import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Products.css'
import { ProductCard } from './ProductCard'
import { Loader } from './Loader'
import { OosProductCard } from './OutOfStock/OosProductCard'

export const  ProductsContainer = () => {
const [products,setProducts]=useState([])
const [loader,setLoader]=useState([false])
const [search,setSearch]=useState('')
const {category}=useParams()

const getProducts =async()=>{   
  setLoader(true)
const response= await axios({
    method:'GET',
    url:`http://localhost:8080/products/`
})
.then((response)=>{
    const data =response.data.data
    setProducts(data)
    setLoader(false)
})
.catch((err)=>{
    console.log(err)
})
}


const searchProducts=(e)=>{
const search=e.target.value
setSearch(search)
let response=products.filter((item)=>{return item.product_name.includes(search)||item.description.includes(search)})

return setProducts(response)

}

useEffect(()=>{
    getProducts()
},[category])

let item=products.filter((product)=>{return product.category_name===category})


  return (
    <>
  <section className='products_container'>
  {
loader?
    <Loader/>:
    <>
  <div className='products_inner_container'>
{item.length===0?
  <>
  <div className='no_products_container'>
  
  <h2 className='no_items_alert' >Estamos renovando los productos de esta categoria.</h2>
  </div>
  </>


  :
<>
       <div className='product_search'> 
      <input className='product_search_bar' title='search' placeholder='Buscar: Air Max' value={search} onChange={(e)=>searchProducts(e)} ></input>

    </div>
    <div className='product_filtering'>

    </div>
    <div className='products_container_separator'></div>

   {item.map((product)=>{ 
    if(product.stock===0){
      return(
      <OosProductCard props={product} key={product.product_id}/>
      )}
      else{

        return(
          <>
<ProductCard props={product} key={product.product_id}/> 
</>
)
}
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
