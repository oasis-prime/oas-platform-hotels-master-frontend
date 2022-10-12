import { Controller, useFormContext } from 'react-hook-form'
import React, { useEffect, useRef, useState } from 'react'

import { IHotelsSearch } from '@model/hotel-search'
import { TextFieldNumber } from '@components/misc/textField/number.main'
import classNames from 'classnames'
import { usePopper } from 'react-popper'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

type OccupanciesSearch = {
  screen: 'main' | 'topbar'
}

const OccupanciesSearch = (prop: OccupanciesSearch) => {
  const { t } = useTranslation()

  const router = useRouter()
  const { locale } = router

  const { watch, control } = useFormContext<IHotelsSearch>()
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false)
  const referenceElement = useRef<HTMLButtonElement>(null)
  const popperElement = useRef<HTMLDivElement>(null)

  const { styles, attributes } = usePopper(referenceElement.current, popperElement.current, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'arrow',
        options: {
          // element: arrow,
        },
      },
    ],
  })


  useEffect(() => {
    if (!dropdownPopoverShow) return

    function handleClickOutside(event: MouseEvent) {
      const a = event.target
      if (popperElement.current &&
        !popperElement.current.contains(a as Node) &&
        referenceElement.current &&
        !referenceElement.current.contains(a as Node) &&
        dropdownPopoverShow) {
        setDropdownPopoverShow(false)
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [popperElement, referenceElement, dropdownPopoverShow])

  return (
    <div className={classNames(
      'flex flex-wrap w-full bg-white',
      prop.screen === 'topbar' && 'h-full rounded-md',
    )}
    >
      <div className={classNames(
        'relative inline-flex align-middle w-full',
        prop.screen === 'topbar' && 'h-full',
      )}
      >
        <button
          className={classNames(
            'w-full px-6 py-3',
            'text-gray-700 font-bold text-sm',
            'uppercase rounded shadow outline-none border border-gray-200',
            'hover:shadow-lg hover:border-primary',
            'focus:outline-none',
            prop.screen === 'topbar' && 'h-full rounded-md',
          )}
          style={{ transition: 'all .15s ease' }}
          type="button"
          ref={referenceElement}
          onClick={() => {
            setDropdownPopoverShow(!dropdownPopoverShow)
          }}
        >
          { prop.screen == 'main' ? (
            <>
              <p>
                { locale === 'th' && t('common:occupanciesSearch.adults') } { watch('adults') } { t('common:occupanciesSearch.adultsUnit') }
                { watch('children') > 0 && `, ${ locale === 'th' ? t('common:occupanciesSearch.children') : '' } ${watch('children')} ${ t('common:occupanciesSearch.childrenUnit') }` }
              </p>
              <p>{ watch('rooms') } { t('common:occupanciesSearch.roomsUnit') }</p>
            </>
          ) : (
            <>
              <p>
                { locale === 'th' && t('common:occupanciesSearch.adults') } { watch('adults') } { t('common:occupanciesSearch.adultsUnit') }
                { watch('children') > 0 && `, ${ locale === 'th' ? t('common:occupanciesSearch.children') : '' } ${watch('children')} ${ t('common:occupanciesSearch.childrenUnit') }` } ,
                { watch('rooms') } { t('common:occupanciesSearch.roomsUnit') }
              </p>
            </>
          ) }

        </button>
        <div
          ref={popperElement}
        >
          <div
            className={classNames(
              'z-50 float-left px-4 py-2 rounded shadow-lg mt-1 bg-white',
              'divide-y divide-gray-200',
              'flex flex-col gap-2',
            )}
            style={!dropdownPopoverShow ? { display: 'none' } : styles.popper}
            {...attributes.popper}
          >
            <div className="flex flex-row gap-4 items-center">
              <div className="w-12">
                <label
                  htmlFor="rooms-input"
                  className="text-gray-700 text-sm font-semibold"
                >
                  { t('common:occupanciesSearch.rooms') }
                </label>
              </div>
              <div>
                <Controller
                  control={control}
                  name="rooms"
                  render={({ field: { onChange, value }}) => (
                    <TextFieldNumber
                      name="rooms-input"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center pt-2">
              <div className="w-12">
                <label
                  htmlFor="custom-input-number"
                  className="text-gray-700 text-sm font-semibold"
                >
                  { t('common:occupanciesSearch.adults') }
                </label>
              </div>
              <div>
                <Controller
                  control={control}
                  name="adults"
                  render={({ field: { onChange, value }}) => (
                    <TextFieldNumber
                      name="adults-input"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center pt-2">
              <div className="w-12">
                <label
                  htmlFor="custom-input-number"
                  className="text-gray-700 text-sm font-semibold"
                >
                  { t('common:occupanciesSearch.children') }
                </label>
              </div>
              <div>
                <Controller
                  control={control}
                  name="children"
                  render={({ field: { onChange, value }}) => (
                    <TextFieldNumber
                      name="children-input"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { OccupanciesSearch }
