import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.css'
import login_banner from '../../Media/banner_2.jpg'
import { PasswordRegister } from './Password_register'
import { checkPassword, InvalidMsg, validateEmail, validatePasswords, validateUsername } from '../../handlers/handlers'
import { registerProcess } from '../../Context/Auth/ApiCall'
import { AuthContext } from '../../Context/Auth/AuthContext'
export const Register = () => {
const [email,setEmail]=useState('')
const [username,setUsername]=useState('')
const [usernameValidation,setUsernameValidation]=useState('')
const [password_1,setPassword_1]=useState('')
const [password_2,setPassword_2]=useState('')
const [emailValidation,setEmailValidation]=useState('')
const [registrationMessage,setRegistrationMessage]=useState(false)
const [passwordsValidation,setPasswordsValidation]=useState(false)
const {dispatchRegistration}=useContext(AuthContext)
const {registration_error}=useContext(AuthContext)
const {registrated_user}=useContext(AuthContext)
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

  const handleUsername=(e)=>{
    e.preventDefault()
    validateUsername(username)?setUsernameValidation('Username must be at least 5 characters long '):setUsernameValidation('')
    setUsername(e.target.value)
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
  if( checkPassword(password_1)&&checkPassword(password_2)&&validatePasswords(password_1,password_2)&&validateEmail(email)&&validateUsername(username)){
     registerProcess({
      username:username,
      email:email,
      password:password_1},dispatchRegistration)
    setRegistrationMessage(true)
    }
    else{
      console.log({registration_error})
    }
    
  }
  registrationMessage?setTimeout(() => {
    setRegistrationMessage(false)
    navigate('/')
  }, 2000):<></>
  


  return (
  
    <>
    <div className=' authContainer'>
  <div className='login_banner auth_banner' >
    <img className='auth_banner_img' src={login_banner} alt='register banner. Registrate en La Tiendita y se parte de la comunidad mas grande de personas con estilo.'/>
   </div>
    
    <div className='login_form_container auth_form_container'>
    <form className='login_form auth_form' onSubmit={handleSubmit}>
      <h2 className='auth_form_title login_form_title'>Registro</h2>
     
      <div className='login_email_container auth_email_container'>
      <input onInvalid={(e)=>InvalidMsg(e.currentTarget)} type='email' onChange={handleEmailChange} className='login_form_email_input auth_email_input' required='true' value={email} placeholder='MAIL'></input>
      </div>

      
      <div className='login_email_container auth_email_container'>
      <input type='username' onChange={handleUsername} className='login_form_email_input auth_email_input' required='true' value={username} placeholder='USUARIO'></input>
      </div>
      
      <PasswordRegister  props={{password_1,password_2,setPassword_2,setPassword_1,passwordsValidation,setPasswordsValidation}}/>
    {registrated_user&&registrationMessage?<span className='session_success'>Usuario Registrado con exito</span>:<></>  }
    {registration_error?<span className='session_error'> {registration_error}</span>:<></>  }
          <button type='submit' className='form_button'>Registrarme</button>
    </form>
    </div>
    </div>
    </>
  )
}