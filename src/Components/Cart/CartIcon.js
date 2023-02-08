import React, { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../Context/CartContext'
import CartSvg from  '../../Media/Cart.png'

export const CartIcon = ({props}) => {
  const {calculateCartItems}=useContext(CartContext)
  
return (
    <>
    <div className='cartIcon_container'  style={{display:'flex', flexDirection:'row'}}>
    <img src={CartSvg} className='shopping_cart' onClick={()=>props.handleClick()}  alt='Shopping cart || Carrito de Compras' ></img>
    <span style={{color:'white',alignContent:'flex-start'}}>{calculateCartItems()}</span>
    </div>
    </>
  )
}
