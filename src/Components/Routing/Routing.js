import React from 'react'
import {Navigate, Route,Routes} from 'react-router-dom'
import { Login } from '../Main/Auth/Login'
import { Register } from '../Main/Auth/Register'
import { Main } from '../Main/Main'

export const Routing = () => {
  return (
    <>    
    
<Routes>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Home'  element={<Main/>}/>
    <Route path='/' element={<Main/>}/>
    <Route path="/*" element={ <Navigate to={'/'} /> } />
    
</Routes >
    </>

  )
}
