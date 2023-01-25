import React, { useState } from "react";
import { checkPassword, validatePasswords } from "../../handlers/handlers";
import hide_password_icon from  '../../Media/hide_password_icon.png'
import show_password_icon from  '../../Media/show_password_icon.png'

export const PasswordRegister=({props})=>{
    const [firstPasswordType, setFirstPasswordType] = useState("password");
    const [secondPasswordType, setSecondPasswordType] = useState("password");
    const [firstPasswordValidation, setFirstPasswordValidation] = useState(false);
    const [secondPasswordValidation, setSecondPasswordValidation] = useState();
    const [passwordsValidationMessage,setPasswordsValidationMessage]=useState('')

    const handleFirstPasswordChange =(evnt)=>{
        evnt.preventDefault()
        if(!checkPassword(props.password_1)){
            setFirstPasswordValidation('Password must be at least 8 characters long and should include:\n1 Capital letter\n1 Special character\n1 number')
        }
        else{
            setFirstPasswordValidation('')
        }
        props.setPassword_1(evnt.target.value);
    }
    const handlePasswords=(password_1,password_2)=>{
        if(!validatePasswords(password_1,password_2)){
            setPasswordsValidationMessage('Passwords do not match')
        }
        else{
            setPasswordsValidationMessage('')
            props.setPasswordsValidation(true)

        }
    }
    const handleSecondPasswordChange =(evnt)=>{
        evnt.preventDefault()
        if(!checkPassword(props.password_2)){
            props.setPasswordsValidation(true)
            setPasswordsValidationMessage('Password must be at least 8 characters long and should include:\n1 Capital letter\n1 Special character\n1 number')
        }
        else{
            props.setPasswordsValidation(false)
            setSecondPasswordValidation('')
        }
        handlePasswords(props.password_1,evnt.target.value)

        props.setPassword_2(evnt.target.value);
    }   
   
    const toggleFirstPassword =(e)=>{
        e.preventDefault()
      if(firstPasswordType==="password")
      {
       setFirstPasswordType("text")
       return;
      }
      setFirstPasswordType("password")
    }
    const toggleSecondPassword =(e)=>{
        e.preventDefault()
        if(secondPasswordType==="password")
        {
        setSecondPasswordType("text")
         return;
        }
        setSecondPasswordType("password")
    }
 
    return(<>
            <div className="auth_password_container password_register_container">
                <div className="first_password_container">
                    <input  type={firstPasswordType} required='true' onChange={handleFirstPasswordChange} value={props.password_1} name="password" className="register_form_password_input auth_password_input" placeholder="CONTRASEÑA" />
                     <button className="show_password_btn" onClick={toggleFirstPassword}>   
                     { firstPasswordType==="password"? <img className="show_password_icon" alt="show password logo.png"  src={show_password_icon} /> :<img className="hide_password_icon" alt="hide password logo.png" src={hide_password_icon} />  }
                     </button>
                </div>
                    <div className="second_password_container">
        
                     <input type={secondPasswordType} required='true' onChange={handleSecondPasswordChange} value={props.password_2} name="second_password" className="register_form_password_input auth_password_input" placeholder="REINGRESA LA CONTRASEÑA" />
                     <button className="show_password_btn" onClick={toggleSecondPassword}>
                     { secondPasswordType==="password"? <img className="show_password_icon" alt="show password logo.png"  src={show_password_icon} /> :<img className="hide_password_icon" alt="hide password logo.png" src={hide_password_icon} />  }
                     </button>

                    </div>

      </div>
                     <span className="password_alert_message">{passwordsValidationMessage}</span></>
    )
}