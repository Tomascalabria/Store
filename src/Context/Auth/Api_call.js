import axios from "axios";


export const Login_start=async(userCrentials,dispatch)=>{
    dispatch({type:'LOGIN_START'})
    try{
     const response=await axios.post('http://localhost:5050/auth/login',userCrentials)
        dispatch({type:'LOGIN_SUCCESS',payload:response.data},window.localStorage.setItem('token',JSON.stringify(response.data.token)))

    }
    catch(err){
        dispatch({type:'LOGIN_FAILURE',payload:err,})
        


    }
}

export const logoutProcess=async(dispatch)=>{
    try{
        dispatch({type:'LOGIN_START',payload:'null'})
        window.localStorage.setItem('token',null)
    }
    catch(err){
        console.log(err)
    }
}