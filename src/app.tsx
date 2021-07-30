import React from 'react'
import { HiCreditCard, HiPlus, HiShoppingCart } from 'react-icons/hi'
import Button from './components/button'

const App = () => {
  return (
    <div className="h-full w-full flex flex-col space-y-2 items-center justify-center bg-gray-50">
      <Button iconLeft={<HiShoppingCart />}>Cart</Button>
      <Button mode="text" iconLeft={<HiPlus />}>
        Add
      </Button>
      <Button mode="contained" iconLeft={<HiCreditCard />}>
        Checkout
      </Button>
    </div>
  )
}

export default App
