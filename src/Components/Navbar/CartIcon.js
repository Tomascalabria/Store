import React from 'react'
import CartSvg from  '../../Media/Cart.png'

export const CartIcon = () => {
  return (
    <>
    <div className='cartIcon_container' style={{display:'flex', flexDirection:'row'}}>
    <img src={CartSvg} className='shopping_cart'  alt='Shopping cart || Carrito de Compras'></img>
    <span style={{color:'white',alignContent:'flex-start'}}>1</span>
    </div>
    </>
  )
}
