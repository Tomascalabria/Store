import React, { useEffect, useState } from 'react'
import { validateEmail } from '../../../handlers/handlers'
import '../CheckOut.css'
export const Page1Sf = () => {
const [method,setMethod]=useState('')
const [validatedEmail,setValidatedEmail]=useState(false)
const getMethod=(e)=>{
let value=e.target.value
 setMethod(value)
}
useEffect(()=>{
  console.log(method)
},[method])

const handleEmail=(e)=>{
  let value=e.target.value
  if(validateEmail(value)===true){
    setValidatedEmail(false)
    console.log(value) 
  }

}
useEffect(()=>{

  console.log(validatedEmail)
},[validatedEmail])

  return (
<div className='form_container'>
<div className='checkOut_method'>
  <div className='checkOut_method_ship'>
    <button className='method_button' value={'envio'} onClick={(e)=>getMethod(e)}>Envio</button></div>

<div className='checkOut_method_pick'>
    <button className='method_button' value={'retiro'} onClick={(e)=>getMethod(e)}>Retiro en tienda</button>
    </div>

</div>


<form className='checkOutForm'>
  <h3 className='checkout_title'>Datos</h3>
  <div className='checkout_name checkout_label_container'>
     <label className='checkout_label'>Nombre</label>
     <input className='checkout_input' placeholder='Nombre'/>
  </div>

  <div className='checkout_name checkout_label_container'>
     <label className='checkout_label'>Apellido</label>
     <input className='checkout_input' placeholder='Apellido'/>
  </div>

  <div className='checkout_name checkout_label_container'>
     <label className='checkout_label'>Email</label>
     <input className='checkout_input' onChange={(e)=>{handleEmail(e)}} placeholder='Email'/>
  </div>  
</form>

</div>
    )
}
