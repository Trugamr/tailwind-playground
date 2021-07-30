import React, { ElementType, ReactNode } from 'react'
import clsx, { ClassValue } from 'clsx'

interface ButtonOwnProps<E extends ElementType = ElementType> {
  as?: E
  children: ReactNode
  className?: ClassValue
  iconLeft?: ReactNode
  mode?: keyof typeof modes
}

export type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps<E>>

const defaultElement = 'button'

const modes = {
  text: 'text-primary rounded px-1 disabled:text-secondary',
  normal:
    'shadow-sm rounded-full px-3 py-1.5 text-primary border border-gray-200 disabled:border-gray-100 bg-white disabled:text-secondary',
  contained:
    'shadow-sm rounded-full px-3 py-1.5 bg-primary text-white disabled:bg-secondary disabled:text-opacity-80',
}

const Button = <E extends ElementType = typeof defaultElement>({
  as,
  children,
  className,
  iconLeft,
  mode = 'normal',
  ...rest
}: ButtonProps<E>) => {
  const Component = as || 'button'

  return (
    <Component
      className={clsx(
        'flex items-center justify-center space-x-1.5 text-sm font-medium focus:outline-none focus:ring-2 ring-secondary disabled:cursor-not-allowed',
        modes[mode],
        className,
      )}
      {...rest}
    >
      {iconLeft}
      {typeof children === 'string' ? <span>{children}</span> : children}
    </Component>
  )
}

export default Button
