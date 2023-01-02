import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Products.css'
import { ProductCard } from './ProductCard'
import { Loader } from './Loader'

export const  ProductsContainer = () => {
const [products,setProducts]=useState([])
const [loader,setLoader]=useState([false])
const {category}=useParams()

const getProducts =async()=>{   
  setLoader(true)
const response= await axios({
    method:'GET',
    url:`http://localhost:5050/products`
})
.then((response)=>{
    const data =response.data.products
    setProducts(data)
    setLoader(false)
})
.catch((err)=>{
    console.log(err)
})
}
useEffect(()=>{

    getProducts()
},[category])

let item=products.filter((product)=>{return product.category===category})


  return (
    <>
  <section className='products_container'>
  <div className='products_container_separator'></div>

  {
loader?
    <Loader/>:
    <>
  <div className='products_inner_container'>
   {item.length===0 ?


    <>
    <h2 className='no_items_alert' >Estamos renovando los productos de esta categoria.</h2>
    <h2></h2>
    </>

  :

   products.map((product)=>{ 
     
     return(
       <>
<ProductCard props={product} key={product._id}/> 
</>
)
})
}
</div>
</>
}
</section>

    </>


    )
}
