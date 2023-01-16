/**
validateEmail - a function that checks if an email is in a valid format.
@param {string} email - The email that needs to be validated.
@returns {boolean} - Returns true if the email is in a valid format, false otherwise.
*/
const validateEmail=(email)=>{
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  }

/**
 * checkPassword - a function that checks if a password meets certain requirements
 * @param {string} password - The password that needs to be validated
 * @returns {boolean} - Returns true if the password meets the requirements, false otherwise.
 */
 
const checkPassword=(password)=> {
  const pattern = /((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W)\w.{8,18}\w)/;
  return pattern.test(password);
}



const validateUsername=(username)=>{
  if (username.length>=4){
    return true
  }
  else{
    return false
  }
}


const validatePasswords=(password_1,password_2)=>{
  if(password_1===password_2){
    return true
  }
  else{
   return false
  }
}     

const InvalidMsg=(textbox)=> {
  if (textbox.value === '') {
      textbox.setCustomValidity('Che loquitx te falta un dato');
  } else if (textbox.validity.typeMismatch){
      textbox.setCustomValidity('Che loquitx estas tipeando mal el mail');
  } else {
     textbox.setCustomValidity('');
  }

  return true;
}

  module.exports={validateEmail,checkPassword,validatePasswords,validateUsername,InvalidMsg}