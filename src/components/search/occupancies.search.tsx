import { Controller, useFormContext } from 'react-hook-form'
import React, { ButtonHTMLAttributes } from 'react'

import { IHotelsSearch } from '@model/hotel-search'
import { TextFieldNumber } from '@components/misc/textField/number.main'
import classNames from 'classnames'
import { usePopper } from 'react-popper'

const OccupanciesSearch = () => {
  const { watch, control } = useFormContext<IHotelsSearch>()
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false)
  const [referenceElement, setReferenceElement] =
    React.useState<HTMLButtonElement | null>(null)
  const [popperElement, setPopperElement] =
    React.useState<HTMLDivElement | null>(null)

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start'
  })

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={classNames(
                'w-full px-6 py-3',
                'text-gray-700 font-bold text-sm',
                'uppercase rounded shadow outline-none border border-gray-200',
                'hover:shadow-lg hover:border-primary hover:hover:border-2',
                'focus:outline-none'
              )}
              style={{ transition: 'all .15s ease' }}
              type="button"
              ref={setReferenceElement}
              onClick={() => {
                setDropdownPopoverShow(!dropdownPopoverShow)
              }}>
              <p>
                ผู้ใหญ่ {watch('adults')} คน
                {watch('children') > 0 && `, เด็ก ${watch('children')}`}
              </p>
              <p>{watch('rooms')} ห้องพัก</p>
            </button>
            {dropdownPopoverShow && (
              <div
                ref={setPopperElement}
                className={classNames(
                  // dropdownPopoverShow ? 'block' : 'hidden',
                  'z-50 float-left px-4 py-2 rounded shadow-lg mt-1 bg-white w-full',
                  'divide-y divide-gray-200',
                  'flex flex-col gap-2'
                )}
                style={styles.popper}
                {...attributes.popper}>
                <div className="flex flex-row gap-4 items-center">
                  <div className="w-12">
                    <label
                      htmlFor="rooms-input"
                      className="text-gray-700 text-sm font-semibold">
                      ห้อง
                    </label>
                  </div>
                  <div>
                    <Controller
                      control={control}
                      name="rooms"
                      render={({ field: { onChange, onBlur, value, ref } }) => (
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
                      className="text-gray-700 text-sm font-semibold">
                      ผู้ใหญ่
                    </label>
                  </div>
                  <div>
                    <Controller
                      control={control}
                      name="adults"
                      render={({ field: { onChange, onBlur, value, ref } }) => (
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
                      className="text-gray-700 text-sm font-semibold">
                      เด็ก
                    </label>
                  </div>
                  <div>
                    <Controller
                      control={control}
                      name="children"
                      render={({ field: { onChange, onBlur, value, ref } }) => (
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
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export { OccupanciesSearch }
