import React from 'react'
import { Link } from 'react-router-dom'
import { ProductImg } from './ProductImg'
import './Products.css'
export const ProductCard = ({props}) => {
  return (
  <Link to={`/product/${props.product_id}`}><div className='product_card'>
    <ProductImg props={props}/>
   
  <div className='product_text'>
    <h3 className='product_title' style={{color:'white'}}>{props.product_name}</h3>
    <p className='product_price'>$ {props.product_price}</p>
  </div>
  </div></Link>
    )   
}
