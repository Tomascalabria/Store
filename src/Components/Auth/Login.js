import React, { useEffect, useState } from 'react'
import './Auth.css'
import login_banner from '../../Media/login_banner.webp'
import { Password } from './Password'
import axios from 'axios'
import { validateEmail } from '../../handlers/validateEmail'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
const [email,setEmail]=useState('') 
const [password,setPassword]=useState('') 
const [emailValidation,setEmailValidation]=useState('')
const navigate=useNavigate()

const handleEmailChange=(e)=>{
e.preventDefault()
setEmail(e.target.value)

if(!validateEmail(e.target.value) ){
setEmailValidation('Invalid Email')
}
else{
setEmailValidation('')
}
}


  const handleLogin=async(e)=>{
  e.preventDefault()
    const response = await axios.post('http://localhost:5050/auth/login',{
      email:email,
      password:password,
    })
    .then((res)=>{
        console.log(res.data)
      setTimeout(()=>{
        navigate('/')
      },2000)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
  return (
    
    <>
    <div className=' authContainer'>
  <div className='login_banner auth_banner' >
    <img className='auth_banner_img' src={login_banner} alt='login banner '/>
   </div>
    
    <div className='login_form_container auth_form_container'>
    <form className='login_form auth_form' onSubmit={handleLogin}>
      <h2 className='auth_form_title login_form_title'>Ingreso</h2>
     
      <div className='login_email_container auth_email_container'>
      {/* <label className='login_form_email_label auth_email_label'>Email</label> */}
      <input  onChange={handleEmailChange} value={email} type='email' className='login_form_email_input auth_email_input' placeholder='EMAIL'></input>
        <span style={{color:'red',fontSize:'.9rem'}}>{emailValidation}</span>
      </div>
      
      {/* <label className='login_form_password_label auth_password_label'>contraseña</label> */}
      <Password props={{password,setPassword}}/>

          <button type='submit' className='form_button'>Ingresar</button>
        <p className='auth_password_recovery'>Olvide mi contraseña</p>
    </form>
    </div>
    </div>
    </>
  )
}
