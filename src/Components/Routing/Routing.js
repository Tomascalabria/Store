import React, { useEffect } from 'react'
import {Navigate, Route,Routes, useLocation} from 'react-router-dom'
import { Main } from '../Main/Main'
import {Register} from '../Auth/Register'
import { ProductsContainer } from '../Products/ProductsContainer'
import { Login } from '../Auth/Login'
import { ProductDetailContainer } from '../Products/ProductDetailContainer'
import { CheckOut } from '../CheckOut/CheckOut'
import { NavBar } from '../Navbar/NavBar'
import { Footer } from '../Footer/Footer'
export const Routing = () => {
const location=useLocation()
  
useEffect(()=>{

},[location])
return (
    <>    
{location.pathname==='/checkout'?<CheckOut/>:
<>
 <NavBar/>
<Routes>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Home'  element={<Main/>}/>
    <Route path="/checkout" element={ <CheckOut/>} />
    <Route path='/' element={<Main/>}/>
    <Route path="/:category" element={ <ProductsContainer/>} />
    <Route path='/product/:id' element={<ProductDetailContainer/>}></Route>
    <Route path="/*" element={ <Navigate to={'/'} /> } />
</Routes >
<Footer/> 
</>
}
    </>

  
  )
}
