import React from 'react'
import classNames from 'classnames'

type ButtonOutlineProps = {
  children?: React.ReactNode
}

const ButtonOutline: React.FC<ButtonOutlineProps> = ({ children }) => {
  return (
    <button
      className={classNames(
        'font-medium tracking-wide py-2 px-5 sm:px-8',
        'outline-none rounded-l-full rounded-r-full capitalize transition-all',
        'border border-primary',
        'text-primary bg-white',
        'hover:bg-primary hover:text-white hover:shadow-primary '
      )}>
      {' '}
      {children}
    </button>
  )
}

export { ButtonOutline }
