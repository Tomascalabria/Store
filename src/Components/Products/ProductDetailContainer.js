import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Products.css'
import { Loader } from './Loader'
import { useParams } from 'react-router-dom'
import { OosProductDetail } from './OutOfStock/OosProductDetail'
import { ProductDetail } from './ProductDetail'

export const ProductDetailContainer = () => {
const [product,setProduct]=useState({})
const [loader,setLoader]=useState([false])
const {id}=useParams()
  const getProduct=async()=>{
    const response= await axios({
      method:'GET',
      url:`http://localhost:8080/products/${id}`
  })
  .then((response)=>{
    const data =response.data.data
    setProduct(data)
    setLoader(false)
})
.catch((err)=>{
    console.log(err.response.data)
})
  }

  useEffect(()=>{
    getProduct()
    },[id])

  return (
    loader?<Loader/> :
    product.stock===0?
    <OosProductDetail key={product.id} props={product}/>:
    <ProductDetail key={product.id} props={product} />
        
        )
      }
