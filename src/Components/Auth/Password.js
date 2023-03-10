import React, { useState } from "react";
import hide_password_icon from  '../../Media/hide_password_icon.png'
import show_password_icon from  '../../Media/show_password_icon.png'

export const Password=({props})=>{

    const [passwordType, setPasswordType] = useState("password");
    const handlePasswordChange =(e)=>{
        e.preventDefault()
        props.setPassword(e.target.value);
    }
    const togglePassword =(e)=>{
        e.preventDefault()
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    return(
            <div className="auth_password_container">
                <div className="password_container">
                    <input type={passwordType} onChange={handlePasswordChange} value={props.password} name="password" className="login_form_password_input auth_password_input" placeholder="CONTRASEÑA" />
                     <button className="show_password_btn" onClick={togglePassword}>
                     { passwordType==="password"? <img className="show_password_icon" alt="show password logo.png - Hace click y conoce tu contrasñea"  src={show_password_icon} /> :<img className="hide_password_icon" alt="hide password logo.png" src={hide_password_icon} />  }
                     </button>
                </div>

      </div>
    )
}