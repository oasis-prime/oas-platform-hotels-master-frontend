import DatePicker from 'react-datepicker'
import classNames from 'classnames'

type MainDatepicker = {
  className?: string | undefined
  onChange: (val: Date) => void
  value: Date
}

const MainDatepicker: React.FC<MainDatepicker> = ({ onChange, value, className }: MainDatepicker) => {
  return (
    <>
      <DatePicker
        dateFormat={'dd/MM/yyyy'}
        className={className ? className : classNames(
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
