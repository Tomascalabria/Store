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
    url:`http://localhost:8080/products/`
})
.then((response)=>{
    const data =response.data.data
    console.log()
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

let item=products.filter((product)=>{return product.product_category.toLowerCase()===category})

  return (
    <>
  <section className='products_container'>
  {
loader?
    <Loader/>:
    <>
  <div className='products_inner_container'>
   {item.length===0 ?


    <>
    <div className='no_products_container'>

    <h2 className='no_items_alert' >Estamos renovando los productos de esta categoria.</h2>
    <h2></h2>
    </div>
    </>

  :
<>
       <div className='product_search'> 
      <input className='product_search_bar' title='search' placeholder='Buscar: Air Max'></input>

    </div>
    <div className='product_filtering'>

    </div>
    <div className='products_container_separator'></div>

   {products.map((product)=>{ 
     
     return(
       <>
<ProductCard props={product} key={product.product_id}/> 
</>
)
})}</>
}

</div>
</>

}
</section>
<div className='products_container_separator'></div>
<div className='products_container_separator'></div>

    </>


    )
}
