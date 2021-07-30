import React from 'react'
import { HiShoppingCart } from 'react-icons/hi'
import Button from './components/button'

const App = () => {
  return (
    <div className="h-full w-full flex flex-col space-y-2 items-center justify-center bg-gray-50">
      <Button iconLeft={<HiShoppingCart />}>Cart</Button>
    </div>
  )
}

export default App
