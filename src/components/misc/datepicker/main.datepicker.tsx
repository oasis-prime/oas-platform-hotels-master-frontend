import DatePicker from 'react-datepicker'
import classNames from 'classnames'
import { useState } from 'react'

type MainDatepicker = {
  onChange: (val: Date) => void
  value: Date
}

const MainDatepicker: React.FC<MainDatepicker> = ({ onChange, value }: MainDatepicker) => {
  return (
    <>
      <DatePicker
        className={classNames(
          'w-full bg-transparent border p-3 rounded-lg',
          'font-semibold focus:border-free700 outline-none placeholder-gray-400',
          'border-gray-200',
        )}
        selected={value}
        onChange={(date: Date) => onChange(date)}
      />
    </>
  )
}

export { MainDatepicker }
