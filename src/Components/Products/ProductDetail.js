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
      url:`http://localhost:8080/products/${id}`
  })
  .then((response)=>{
    const data =response.data.data
  console.log(data)
    setProduct(data[0])
    setLoader(false)
})
.catch((err)=>{
    console.log(err)
})
  }

  useEffect(()=>{
    getProduct()
    },[id])

  return (
    loader?<Loader/> :
<>
    <div className='product_detail_separator'> </div>
    <div className='product_detail_container'>
      <div className='product_detail_img_container'>
      <img className='product_detail_img' src={product.product_img} alt={product.product_description}/>
      
      </div>  
      <div className='product_detail_text_container'>
        <div className='product_detail_title_container'>
        <h2>{product.product_name}</h2>
        </div>
        <div className='product_detail_price'>
          <div className='product_detail_price_container'>

            <h4 className='product_detail_price_label'>Precio:</h4>
            <h4 className='product_detail_price_label'>$ {product.product_price}</h4>
          </div>
        </div>
        <div className='product_detail_description_outer'>
        <div className='product_detail_description_container'>
        <p className='product_detail_description_container_label'>{product.description}</p>
        </div>

        </div>
      <div className='product_select'>
    
        <> 
        
        <div className='product_select_sizes'>

          <h4 className='product_select_sizes_label'> Seleccionar </h4>
 

          </div>
          <div className='product_select_quantity'>
              <h4 className='product_select_quantity_label'>Cantidad</h4>
              
          
        </div>
        </>

        </div>
       <button className='buy_product_btn'>Comprar</button>
      </div>

      </div>

      <div className='product_detail_separator'> </div>

</>
        
        
        )
      }
