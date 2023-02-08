import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import '../Products.css'
import { Loader } from '../Loader'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../../Context/CartContext'

export const OosProductDetail = () => {
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

            <h4 className='product_detail_price_label'>N/A</h4>
            <h4 className='product_detail_price_label'></h4>
          </div>
        </div>
        <div className='product_detail_description_outer'>
        <div className='product_detail_description_container'>
        <p className='product_detail_description_container_label'>{product.description}</p>
        </div>

        </div>
      <div className='detail_Out_of_stock'>
      <h4 className='detail_Out_of_stock_title'>Lo sentimos este producto está agostado</h4>
        <> 
        
    
        </>

        </div>
       <button className='buy_product_btn'>Comprar</button>
      </div>

      </div>

      <div className='product_detail_separator'> </div>

</>
        
        
        )
      }
