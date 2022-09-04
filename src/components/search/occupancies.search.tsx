import { Controller, useFormContext } from 'react-hook-form'
import React, { ButtonHTMLAttributes, useEffect, useRef } from 'react'

import { IHotelsSearch } from '@model/hotel-search'
import { TextFieldNumber } from '@components/misc/textField/number.main'
import classNames from 'classnames'
import { usePopper } from 'react-popper'

const OccupanciesSearch = () => {
  const { watch, control } = useFormContext<IHotelsSearch>()
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false)
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
    function handleClickOutside(event: MouseEvent) {
      const a = event.target
      if (popperElement.current && !popperElement.current.contains(a as Node)) {
        setDropdownPopoverShow(false)
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [popperElement])

  return (
    <div className="flex flex-wrap w-full">
      <div className="relative inline-flex align-middle w-full">
        <button
          className={classNames(
            'w-full px-6 py-3',
            'text-gray-700 font-bold text-sm',
            'uppercase rounded shadow outline-none border border-gray-200',
            'hover:shadow-lg hover:border-primary hover:hover:border-2',
            'focus:outline-none',
          )}
          style={{ transition: 'all .15s ease' }}
          type="button"
          ref={referenceElement}
          onClick={() => {
            setDropdownPopoverShow(!dropdownPopoverShow)
          }}
        >
          <p>
                ผู้ใหญ่ { watch('adults') } คน
            { watch('children') > 0 && `, เด็ก ${watch('children')}` }
          </p>
          <p>{ watch('rooms') } ห้องพัก</p>
        </button>
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
            <div className="flex flex-row gap-4 items-center">
              <div className="w-12">
                <label
                  htmlFor="rooms-input"
                  className="text-gray-700 text-sm font-semibold"
                >
                      ห้อง
                </label>
              </div>
              <div>
                <Controller
                  control={control}
                  name="rooms"
                  render={({ field: { onChange, onBlur, value, ref }}) => (
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
                      ผู้ใหญ่
                </label>
              </div>
              <div>
                <Controller
                  control={control}
                  name="adults"
                  render={({ field: { onChange, onBlur, value, ref }}) => (
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
                      เด็ก
                </label>
              </div>
              <div>
                <Controller
                  control={control}
                  name="children"
                  render={({ field: { onChange, onBlur, value, ref }}) => (
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
