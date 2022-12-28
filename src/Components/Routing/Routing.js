import React from 'react'
import {Navigate, Route,Routes} from 'react-router-dom'
import { Main } from '../Main/Main'
import { Products } from '../Products/Products'
import {Login} from '../Auth/Login'
import {Register} from '../Auth/Register'
export const Routing = () => {
  return (
    <>    
    
<Routes>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Home'  element={<Main/>}/>
    <Route path='/' element={<Main/>}/>
    <Route path="/:category" element={ <Products/>} />
    <Route path="/*" element={ <Navigate to={'/'} /> } />
    
</Routes >
    </>

  )
}
