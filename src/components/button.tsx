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
  text: '',
  normal:
    'shadow-sm rounded-full px-3 py-1.5 border border-gray-200 disabled:border-gray-100 bg-white',
  contained:
    'shadow-sm rounded-full px-3 py-1.5 bg-purple-800 text-white disabled:bg-purple-600 disabled:text-opacity-80 disabled:text-white',
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
        'flex items-center justify-center space-x-1.5 text-sm font-medium text-purple-800 focus:outline-none focus:ring-2 ring-purple-400 rounded px-1 disabled:cursor-not-allowed disabled:text-purple-400',
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
