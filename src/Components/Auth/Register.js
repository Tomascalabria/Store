import React, { useRef, useState } from 'react'
import './Auth.css'
import login_banner from '../../Media/banner_2.jpg'
import { Password_register } from './Password_register'
export const Register = () => {
const [email,setEmail]=useState('')
const [username,setUsername]=useState('')
const [password_1,setPassword_1]=useState('')
const [password_2,setPassword_2]=useState('')
  const handleEmail=()=>{
      
  }
  return (
  
    <>
    <div className=' authContainer'>
  <div className='login_banner auth_banner' >
    <img className='auth_banner_img' src={login_banner} alt='login banner '/>
   </div>
    
    <div className='login_form_container auth_form_container'>
    <form className='login_form auth_form'>
      <h2 className='auth_form_title login_form_title'>Registro</h2>
     
      <div className='login_email_container auth_email_container'>
      {/* <label className='login_form_email_label auth_email_label'>Email</label> */}
      <input type='email' className='login_form_email_input auth_email_input' value={email} placeholder='EMAIL'></input>
      </div>

      
      <div className='login_email_container auth_email_container'>
      <input   type='username' className='login_form_email_input auth_email_input' value={username} placeholder='username'></input>
      </div>
      
      {/* <label className='login_form_password_label auth_password_label'>contraseña</label> */}
      <Password_register props={{password_1,password_2,setPassword_2,setPassword_1}}/>

          <button className='form_button'>Registrarme</button>
    </form>
    </div>
    </div>
    </>
  )
}