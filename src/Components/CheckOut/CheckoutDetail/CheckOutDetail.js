import React, { useContext } from 'react'
import { CartContext } from '../../../Context/Cart/CartContext'

export const CheckOutDetail = () => {
  const { cart } =useContext(CartContext)
    return (
    <div className='checkOutDetail'>
        <h2 className='detail_title'>Resumen del pedido</h2>
    </div>
  )
}
