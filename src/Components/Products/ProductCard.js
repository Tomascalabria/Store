import React from 'react'
import { ProductImg } from './ProductImg'
import './Products.css'
export const ProductCard = ({props}) => {
  return (
    <div className='product_card'>
    <ProductImg props={props}/>
  <div className='product_text'>
    <h3 className='product_title' style={{color:'white'}}>{props.name}</h3>
    <p className='product_price'>$ {props.price}</p>
  </div>
  </div>
    )
}
