import React from 'react'
import classNames from 'classnames'

type TButton = React.DetailedHTMLProps<
React.ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
>

type ButtonOutlineProps = TButton & {
  children?: React.ReactNode
}

const ButtonOutline: React.FC<ButtonOutlineProps> = (props) => {
  const { children, onClick } = props
  return (
    <button
      onClick={onClick}
      className={classNames(
        'font-medium tracking-wide py-2 px-5 sm:px-8',
        'outline-none rounded-l-full rounded-r-full capitalize transition-all',
        'border border-primary',
        'text-primary bg-white',
        'hover:bg-primary hover:text-white hover:shadow-primary ',
      )}
    >
      { ' ' }
      { children }
    </button>
  )
}

export { ButtonOutline }
