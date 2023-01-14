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
shoesSizes=[]
clothesSizes=[]
  return (
    loader?<Loader/> :
<>
    <div className='product_detail_container'>
      <div className='product_detail_img_container'>
      <img className='product_detail_img' src={product.product_img_1} alt={product.product_description}/>
      
      </div>  
      <div className='product_detail_text_container'>
        <div className='product_detail_title_container'>
        <h2>{product.product_name}</h2>
        </div>
        <div className='product_detail_description_container'>
        <p>{product.product_description}</p>
        </div>

      <div className='product_select'>
        {
          !product.product_category==='vestimenta'||!product.category==='Vestimenta' ?
         <> 
        
        <div className='product_select_sizes'>

          <h4> Talles </h4>
          <div className='product_select_sizes_button'>
          {shoesSizes.map((size)=>{
          return(
            <button  value={size} className='size_button'>{size} </button>
            )
          })}
           
           </div>

          </div>
          <div className='product_select_quantity'>
              <h4>Cantidad</h4>
              <form>
                
                <select className='quantity_select'  title='Talles'>
                  <option className='quantity_option_1 quantity_option'>1</option>
                  <option className='quantity_option_2 quantity_option'>2</option>
                  <option className='quantity_option_3 quantity_option'>3</option>
                  <option className='quantity_option_4 quantity_option'>4</option>
                  <option className='quantity_option_5 quantity_option'>5</option>
                  <option className='quantity_option_6 quantity_option'>6</option>
                  <option className='quantity_option_7 quantity_option'>7</option>
                  <option className='quantity_option_8 quantity_option'>8</option>
                  <option className='quantity_option_9 quantity_option'>9</option>
                </select>
              </form>
          
        </div>
        </>
        :
        <> 
        
        <div className='product_select_sizes'>

          <h4> Talles </h4>
          <div className='product_select_sizes_button'>
          {clothesSizes.map((size)=>{
          return(
            <button  value={size} className='size_button'>{size} </button>
            )
          })}
           
           </div>

          </div>
          <div className='product_select_quantity'>
              <h4>Cantidad</h4>
              <form>
                
                <select className='quantity_select'  title='Talles'>
                  <option className='quantity_option_1 quantity_option'>1</option>
                  <option className='quantity_option_2 quantity_option'>2</option>
                  <option className='quantity_option_3 quantity_option'>3</option>
                  <option className='quantity_option_4 quantity_option'>4</option>
                  <option className='quantity_option_5 quantity_option'>5</option>
                  <option className='quantity_option_6 quantity_option'>6</option>
                  <option className='quantity_option_7 quantity_option'>7</option>
                  <option className='quantity_option_8 quantity_option'>8</option>
                  <option className='quantity_option_9 quantity_option'>9</option>
                </select>
              </form>
          
        </div>
        </>
}
        </div>
       <button className='buy_product_btn'>Comprar</button>
      </div>

      </div>


</>
        
    
  )
}
