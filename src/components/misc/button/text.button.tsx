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
        // type="submit"
        className={classNames(
          'w-full bg-transparent p-3 rounded-lg font-semibold outline-none',
          'placeholder-gray-400',
          'focus:border-free700 hover:text-primary'
        )}
        {...props}
      />
    )
  }
)
{
  /* <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-primary transition-all"> */
}

ButtonText.displayName = 'ButtonText'

export { ButtonText }
