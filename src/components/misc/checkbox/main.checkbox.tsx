import React from 'react'
import classNames from 'classnames'

type TextFieldProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Checkbox = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const childProps = { ...props }
    const classProps = childProps.className
    delete childProps?.className

    return (
      <input
        ref={ref}
        type="checkbox"
        className={classNames('h-6 w-6', classProps)}
        {...childProps}
      />
    )
  }
)

Checkbox.displayName = ''

export { Checkbox }
