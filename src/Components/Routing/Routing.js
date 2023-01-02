import React from 'react'
import {Navigate, Route,Routes} from 'react-router-dom'
import { Main } from '../Main/Main'
import {Login} from '../Auth/Login'
import {Register} from '../Auth/Register'
import { ProductsContainer } from '../Products/ProductsContainer'
import { ProductDetail } from '../Products/ProductDetail'
export const Routing = () => {
  return (
    <>    
    
<Routes>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Home'  element={<Main/>}/>
    <Route path='/' element={<Main/>}/>
    <Route path="/:category" element={ <ProductsContainer/>} />
    <Route path='/product/:id' element={<ProductDetail/>}></Route>
    <Route path="/*" element={ <Navigate to={'/'} /> } />
</Routes >
    </>

  )
}
