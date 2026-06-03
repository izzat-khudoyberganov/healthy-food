import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext'

const Cart = () => {
  const {cartItems} = useContext(MainContext)
  return (
    <div>
     {
      cartItems.length > 0 && JSON.stringify(cartItems)
     }
    </div>
  )
}

export default Cart