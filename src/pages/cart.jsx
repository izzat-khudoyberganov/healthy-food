import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext'
import Card from '../components/card'
import CartItems from '../components/cartItem'

const Cart = () => {
  const {cartItems} = useContext(MainContext)
  console.log(cartItems);
  
  return (
    <div className='container'>
     {
      cartItems.length > 0 ? <div className="products">
        {
          cartItems.map((el, i) => (
            <CartItems key={i} {...el} />
          ))
        }
        <div className="total">
          <h2>Total: </h2>
          <span>
            {cartItems.reduce((acc, el) => acc + el.price * el.quantity, 0).toFixed(2)} 
          </span>
        </div>
      </div> : <h2>Cart is empty</h2>
     }
    </div>
  )
}

export default Cart