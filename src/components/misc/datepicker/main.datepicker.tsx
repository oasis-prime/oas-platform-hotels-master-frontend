import DatePicker from 'react-datepicker'
import classNames from 'classnames'
import { useState } from 'react'

const MainDatepicker: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <>
      <DatePicker
        className={classNames(
          'w-full bg-transparent border p-3 rounded-lg',
          'font-semibold focus:border-free700 outline-none placeholder-gray-400',
          'border-gray-200'
        )}
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
      />
    </>
  )
}

export { MainDatepicker }
