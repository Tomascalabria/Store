import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Products.css'
import { ProductCard } from './ProductCard'
import { Loader } from './Loader'

export const ProductsContainer = () => {
const [products,setProducts]=useState([])
const [loader,setLoader]=useState([false])
const {category}=useParams()

const getProducts =async()=>{   
  setLoader(true)
const response= await axios({
    method:'GET',
    url:`http://localhost:5050/spreadsheet`
})
.then((response)=>{
    const data =response.data.products
    let filteredProducts=data.filter(item=>{return item.category===category  })
  
    setProducts(filteredProducts)
    setLoader(false)
})
.catch((err)=>{
    console.log(err)
})
}
useEffect(()=>{

    getProducts()
},[category])

let item=products.filter((product)=>{return product.category==='vestimenta'})
console.log(item)

  return (
    <>
    
  <section className='products_container'>
  <div className='products_container_separator'></div>

  {
loader?
    <Loader/>:
    <>
  <div className='products_inner_container'>

    {products.map((product)=>{ 
      
return(
<>
<ProductCard props={product} key={product._id}/> 
</>
)
})}
</div>
</>
}
</section>

    </>


    )
}
