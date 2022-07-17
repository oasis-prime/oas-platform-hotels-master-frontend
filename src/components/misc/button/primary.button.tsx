import React, { JSXElementConstructor, ReactElement } from 'react'

import classNames from 'classnames'

type ButtonPrimaryProps = {
  children?: JSX.Element | any
  addClass?: string
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  children,
  addClass
}) => {
  return (
    <button
      className={classNames(
        'py-3 lg:py-4 px-12 lg:px-16 rounded',
        'text-white font-semibold',
        'bg-primary',
        'hover:shadow-primary transition-all outline-none',
        addClass
      )}>
      {children}
    </button>
  )
}

export { ButtonPrimary }
