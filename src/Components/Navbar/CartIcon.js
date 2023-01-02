import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import CartSvg from  '../../Media/Cart.png'

export const CartIcon = () => {
  const {calculateCartItems,clearCart}=useContext(CartContext)
  return (
    <>
    <div className='cartIcon_container' style={{display:'flex', flexDirection:'row'}}>
    <img src={CartSvg} className='shopping_cart'  alt='Shopping cart || Carrito de Compras' onClick={clearCart}></img>
    <span style={{color:'white',alignContent:'flex-start'}}>{calculateCartItems()}</span>
    </div>
    </>
  )
}
