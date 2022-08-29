import { ChangeEvent } from 'react'
import classNames from 'classnames'

interface ITextFieldNumberProp {
  name: string
  onChange: (...event: any[]) => void
  value: number
}

const TextFieldNumber = (prop: ITextFieldNumberProp) => {
  return (
    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
      <button
        type="button"
        data-action="decrement"
        className={classNames(
          'bg-white text-gray-600 hover:text-gray-700 hover:border-gray-400',
          'h-full w-20 rounded-l cursor-pointer outline-none',
          'border border-gray-200'
        )}
        onClick={() => {
          const sum = prop.value - 1 < 0 ? 0 : prop.value - 1
          prop.onChange(sum)
        }}>
        <span className="m-auto text-2xl font-thin">−</span>
      </button>
      <input
        type="number"
        className={classNames(
          'flex w-full items-center bg-white',
          'font-semibold text-md text-center',
          'outline-none focus:outline-none',
          'hover:text-black hover:border-gray-400 focus:text-black text-gray-700 outline-none',
          'md:text-basecursor-default',
          'border border-gray-200'
        )}
        name={prop.name}
        value={prop.value}
        onChange={prop.onChange}></input>
      <button
        type="button"
        data-action="increment"
        className={classNames(
          'bg-white text-gray-600 hover:text-gray-700 hover:border-gray-400',
          'h-full w-20 rounded-l cursor-pointer outline-none',
          'border border-gray-200'
        )}
        onClick={() => {
          const sum = prop.value + 1
          prop.onChange(sum)
        }}>
        <span className="m-auto text-2xl font-thin">+</span>
      </button>
    </div>
  )
}

export { TextFieldNumber }
