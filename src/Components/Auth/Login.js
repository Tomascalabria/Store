import React from 'react'
import './Auth.css'
import login_banner from '../../Media/login_banner.webp'
import { Password } from './Password'
export const Login = () => {
  return (
    <>
    <div className=' authContainer'>
  <div className='login_banner auth_banner' >
    <img className='auth_banner_img' src={login_banner} alt='login banner '/>
   </div>
    
    <div className='login_form_container auth_form_container'>
    <form className='login_form auth_form'>
      <h2 className='auth_form_title login_form_title'>Ingreso</h2>
     
      <div className='login_email_container auth_email_container'>
      {/* <label className='login_form_email_label auth_email_label'>Email</label> */}
      <input  name='email' type='email' className='login_form_email_input auth_email_input' placeholder='EMAIL'></input>
      </div>
      
      {/* <label className='login_form_password_label auth_password_label'>contraseña</label> */}
      <Password/>

          <button className='form_button'>Ingresar</button>
        <p className='auth_password_recovery'>Olvide mi contraseña</p>
    </form>
    </div>
    </div>
    </>
  )
}
