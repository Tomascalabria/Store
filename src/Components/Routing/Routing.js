import React from 'react'
import {Navigate, Route,Routes} from 'react-router-dom'
import { Main } from '../Main/Main'
import {Register} from '../Auth/Register'
import { ProductsContainer } from '../Products/ProductsContainer'
import { Login } from '../Auth/Login'
import { ProductDetailContainer } from '../Products/ProductDetailContainer'
export const Routing = () => {
  return (
    <>    
    
<Routes>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Home'  element={<Main/>}/>
    <Route path='/' element={<Main/>}/>
    <Route path="/:category" element={ <ProductsContainer/>} />
    <Route path='/product/:id' element={<ProductDetailContainer/>}></Route>
    <Route path="/*" element={ <Navigate to={'/'} /> } />
</Routes >
    </>

  )
}
