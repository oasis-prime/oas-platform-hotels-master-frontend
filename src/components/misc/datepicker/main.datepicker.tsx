import DatePicker from 'react-datepicker'
import { useState } from 'react'

const MainDatepicker: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
      />
    </>
  )
}

export { MainDatepicker }
