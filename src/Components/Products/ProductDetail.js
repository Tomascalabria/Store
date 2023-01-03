import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './Products.css'
import { Loader } from './Loader'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

export const ProductDetail = () => {
const categories=['vestimenta','accesorios','otros']
const [product,setProduct]=useState({})
const [loader,setLoader]=useState([false])
const {id}=useParams()
const {addToCart}=useContext(CartContext)
  const getProduct=async()=>{
    const response= await axios({
      method:'GET',
      url:`http://localhost:5050/product/${id}`
  })
  .then((response)=>{
    const data =response.data.product
  console.log(data)
    setProduct(data)
    setLoader(false)
})
.catch((err)=>{
    console.log(err)
})
  }

  useEffect(()=>{
    getProduct()
    },[id])

    const shoesSizes = product.shoes_sizes ? Object.keys(product.shoes_sizes).filter((availability) =>{return product.shoes_sizes[availability]==='TRUE'}) : [];
const clothesSizes = product.clothes_sizes ? Object.keys(product.clothes_sizes).filter((availability) =>{return product.clothesSizes[availability]==='TRUE'}) : [];

  return (
    loader?<Loader/> :
<>
    <div className='product_detail_container'>
      <div className='product_detail_img_container'>
      <img className='product_detail_img' src={product.img_1} alt={product.description}/>
      
      </div>  
      <div className='product_detail_text_container'>
        <div className='product_detail_title_container'>
        <h2>{product.name}</h2>
        </div>
        <div className='product_detail_description_container'>
        <p>{product.description}</p>
        </div>

        <div className='product_select'>
          <h4> Talles </h4>
          <div className='product_select_sizes'>
          {shoesSizes.map((size)=>{
          return(
            <button  value={size} className='size_button'>{size} </button>
            )
          })}
          </div>
        </div>
       
      </div>
      </div>
</>

    
  )
}
