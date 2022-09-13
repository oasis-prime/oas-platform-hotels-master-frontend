import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import classNames from 'classnames'

type TButton = React.DetailedHTMLProps<
React.ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
>

type CustomButton = TButton & {
  icons?: string
}

const ButtonIcons: React.FC<CustomButton> = (props) => {
  const childProps = { ...props }
  const classProps = childProps.className
  delete childProps?.className

  return (
    <button
      onClick={props.onClick}
      className={classNames(
        'w-full bg-transparent p-3 rounded-lg font-semibold outline-none',
        'placeholder-gray-400',
        'focus:border-free700 hover:text-primary',
        classProps,
      )}
    >
      { childProps.children }
    </button>
  )
}

ButtonIcons.displayName = 'ButtonIcons'

export { ButtonIcons }
