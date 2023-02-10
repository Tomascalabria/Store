import React, { useContext,  useState } from 'react'
import './Auth.css'
import login_banner from '../../Media/login_banner.webp'
import { Password } from './Password'
import { validateEmail,InvalidMsg } from '../../handlers/handlers'
import { useNavigate } from 'react-router-dom'
import {AuthContext} from '../../Context/Auth/AuthContext'
import {loginProcess} from '../../Context/Auth/ApiCall'
export const Login = () => {
const [email,setEmail]=useState('') 
const [emailIsFocused,setEmailIsFocused]=useState(false)
const [password,setPassword]=useState('') 
const [emailValidation,setEmailValidation]=useState('')
const navigate=useNavigate()

const {user,error}=useContext(AuthContext) 
const { dispatch } = useContext(AuthContext);


function preloadImages(urls, allImagesLoadedCallback){
  var loadedCounter = 0;
var toBeLoadedNumber = urls.length;
urls.forEach(function(url){
  preloadImage(url, function(){
      loadedCounter++;
          console.log('Number of loaded images: ' + loadedCounter);
    if(loadedCounter == toBeLoadedNumber){
      allImagesLoadedCallback();
    }
  });
});
function preloadImage(url, anImageLoadedCallback){
    var img = new Image();
    img.onload = anImageLoadedCallback;
    img.src = url;
}
}

preloadImages([
login_banner

], function(){
});

const handleEmailChange=(e)=>{
e.preventDefault()
setEmail(e.target.value)

if(emailIsFocused&&!validateEmail(e.target.value)){
setEmailValidation('Ingresa un email valido')
}
else{
setEmailValidation('')
}
}

const handleLogin=async(e)=>{
  e.preventDefault()  
  loginProcess({email:email,password:password},dispatch)
}
user?setTimeout(() => {
  navigate('/')
}, 2000):<></>

return (
    
    <>
    <div className=' authContainer'>
  <div className='login_banner auth_banner' >
    <img className='auth_banner_img' src={login_banner} alt='login banner de La Tiendita. Ingresa en nuestra pagina para conocer mas sobre nosotros '/>
   </div>
    
    <div className='login_form_container auth_form_container'>
    <form className='login_form auth_form' onSubmit={handleLogin}>
      <h2 className='auth_form_title login_form_title'>Ingreso</h2>
     
      <div className='login_email_container auth_email_container'>
      {/* <label className='login_form_email_label auth_email_label'>Email</label> */}
      <input onInvalid={(e)=>{InvalidMsg(e.currentTarget)}} onFocus={()=>{setEmailIsFocused(true)}} onChange={handleEmailChange} value={email} type='email'required={true} className='login_form_email_input auth_email_input' placeholder='EMAIL'></input>
        <span className='session_error' >{emailValidation}</span>
      </div>
      
      {/* <label className='login_form_password_label auth_password_label'>contraseña</label> */}
      <Password props={{password,setPassword}}/>
  {error? <><span className='session_error'>{error}</span></>:<></>}
  {user? <><span className='session_success'>Bienvenido {user.user_data.username}</span></>:<></>}
          <button type='submit' className='form_button'>Ingresar</button>
        <p className='auth_password_recovery'>Olvide mi contraseña</p>
    </form>

    </div>
    </div>
    </>
  )
}
