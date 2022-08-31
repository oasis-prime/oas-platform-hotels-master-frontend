import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import classNames from 'classnames'

type TButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const Button = React.forwardRef<HTMLButtonElement, TButton>((props, ref) => {
  return (
    <button
      ref={ref}
      // type="submit"
      className={classNames(
        'w-full bg-transparent border p-3 rounded-lg font-semibold outline-none',
        'placeholder-gray-400',
        'focus:border-primary hover:border-primary'
      )}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button }
