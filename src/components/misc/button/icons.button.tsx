import React, {  } from 'react'
import classNames from 'classnames'

type TButton = React.DetailedHTMLProps<
React.ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
>

type CustomButton = TButton & {
  icons?: string
  onClick?: () => void
  className?: string
}

const ButtonIcons: React.FC<CustomButton> = (props) => {
  const { children, className = '', onClick } = props

  return (
    <button
      onClick={onClick}
      className={classNames(
        'w-full bg-transparent p-3 rounded-lg font-semibold outline-none',
        'placeholder-gray-400',
        'focus:border-free700 hover:text-primary',
        className,
      )}
    >
      { children }
    </button>
  )
}

ButtonIcons.displayName = 'ButtonIcons'

export { ButtonIcons }
