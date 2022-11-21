import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import classNames from 'classnames'

type TButton = React.DetailedHTMLProps<
React.ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
>

const ButtonText = React.forwardRef<HTMLButtonElement, TButton>(
  (props, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={classNames(
          'w-full bg-transparent p-3 rounded-lg font-semibold outline-none',
          'placeholder-gray-400',
          'focus:border-free700 hover:text-primary',
        )}
        {...props}
      />
    )
  },
)

ButtonText.displayName = 'ButtonText'

export { ButtonText }
