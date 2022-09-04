import React, { useCallback, useEffect, useRef, useState } from 'react'

import { IHotelsSearch } from '@model/hotel-search'
import { LanguageEnum } from '__generated__/globalTypes'
import { TextField } from '@components/misc/textField'
import classNames from 'classnames'
import { debounce } from 'lodash'
import { useFormContext } from 'react-hook-form'
import { useHotelsAutocomplete } from '@graphql/services/hotels'
import { usePopper } from 'react-popper'

const HotelSearchInput = () => {
  const { watch, control } = useFormContext<IHotelsSearch>()

  const [value, setValue] = useState('')

  const [autocompleteQuery, { data, loading }] = useHotelsAutocomplete()

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

  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
    debounceFn(e.target.value)
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

  return (
    <div className="flex flex-wrap w-full">
      <div className="relative inline-flex align-middle w-full">
        <TextField
          value={value}
          placeholder="สถานที่, โรงแรม, เมือง, ประเทศ"
          ref={referenceElement}
          onChange={handleChange}
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
                  { data?.getHotels?.hotels.map((v) => (
                    <div
                      key={v.code}
                      data-code={v.code}
                      className="p-2"
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