import { Controller, useFormContext } from 'react-hook-form'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { getCheckIn, getCheckOut } from '@utils/func'

import { HotelsAutocomplete_getHotels_hotels } from '@graphql/services/__generated__/HotelsAutocomplete'
import { IHotelsSearch } from '@model/hotel-search'
import { LanguageEnum } from '__generated__/globalTypes'
import { TextField } from '@components/misc/textField'
import classNames from 'classnames'
import { debounce } from 'lodash'
import { useHotelsAutocomplete } from '@graphql/services/hotels'
import { usePopper } from 'react-popper'
import { useTranslation } from 'next-i18next'

const HotelSearchInput = () => {
  const { t } = useTranslation()

  const { watch, control, setValue } = useFormContext<IHotelsSearch>()
  const data = watch()
  // const [value, setValue] = useState('')
  const [selected, setSelected] = useState<HotelsAutocomplete_getHotels_hotels>()

  const [autocompleteQuery, { data: queryData, loading }] = useHotelsAutocomplete()

  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false)
  const referenceElement = useRef<HTMLInputElement>(null)
  const popperElement = useRef<HTMLDivElement>(null)

  const { styles, attributes } = usePopper(referenceElement.current, popperElement.current, {
    placement: 'bottom-start',
  })

  const handleDebounceFn = async (e: string) => {
    handleQuery(e)
    setDropdownPopoverShow(true)
  }

  const debounceFn = useCallback(debounce(handleDebounceFn, 500), [])

  const handleQuery = (keyword: string) => {
    autocompleteQuery({
      variables: {
        input: {
          pagination: {
            page: 0,
            pageSize: 5,
          },
          language: LanguageEnum.TAI,
          keywords: {
            keyword: [...keyword.split(' ')],
          },
        },
      },
    })
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const a = event.target
      if (popperElement.current && !popperElement.current.contains(a as Node)) {
        setDropdownPopoverShow(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [popperElement])

  useEffect(() => {
    if (data?.checkIn?.getTime() >= data?.checkOut?.getTime()) {
      console.log('Effect checkIn')
      setValue('checkOut', getCheckOut(data.checkOut, data.checkIn))
    }
  }, [data.checkIn])

  useEffect(() => {
    if (data?.checkOut?.getTime() <= data?.checkIn?.getTime()) {
      console.log('Effect checkOut')
      setValue('checkIn', getCheckIn(data.checkIn, data.checkOut))
    }
  }, [data.checkOut])

  return (
    <div className="flex flex-wrap w-full">
      <div className="relative inline-flex align-middle w-full">
        <Controller
          render={({ field: { onChange, value }}) => (
            <TextField
              value={value}
              placeholder={t('common:search.input_placeholder')}
              ref={referenceElement}
              onChange={(e) => {
                onChange(e)
                debounceFn(e.target.value)
              }}
            />
          )}
          name="name"
          control={control}
        />


        { /* Dialog */ }
        <div
          ref={popperElement}
        >
          <div
            className={classNames(
              'z-50 float-left px-4 py-2 rounded shadow-lg mt-1 bg-white w-full',
              'divide-y divide-gray-200',
              'flex flex-col gap-2',
            )}
            style={!dropdownPopoverShow ? { display: 'none' } : styles.popper}
            {...attributes.popper}
          >
            <div className="min-h-[10rem] relative">
              { loading && (
                <div
                  className="absolute"
                  style={{
                    top: 'calc(50% - 1.5rem)',
                    left: 'calc(50% - 1.5rem)',
                  }}
                >
                  <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
                </div>)
              }
              {
                !loading &&
                <div className="gird divide-y-[1px]">
                  { queryData?.getHotels?.hotels.map((v) => (
                    <div
                      key={v.code}
                      data-code={v.code}
                      className="p-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setSelected(v)
                        setDropdownPopoverShow(false)

                        v.hotelName != null && setValue('name', v.hotelName)
                      }}
                    >
                      <div>{ v.hotelName }</div>
                    </div>
                  )) }
                </div>
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HotelSearchInput }