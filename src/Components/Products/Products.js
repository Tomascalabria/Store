import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ProductDetail } from './ProductDetail'

export const Products = () => {
const [products,setProducts]=useState([])
const {category}=useParams()

const getProducts =async()=>{   
const response= await axios({
    method:'GET',
    url:`http://localhost:5050/spreadsheet`
})
.then((response)=>{
    const data =response.data.products
    let filteredProducts=data.filter(item=>{return item.category===category  })
  
    setProducts(filteredProducts)
})
.catch((err)=>{
    console.log(err)
})
}
useEffect(()=>{

    getProducts()
},[category])

  return (
    <>
  <section className='products_container'>
  <div className='products_inner_container'>
    {products.map((product)=>{ 


return(

<>
<ProductDetail key={product._id} props={{...product}} />
</>
)
})}
</div>

  </section>
    </>

    )
}
