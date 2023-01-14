import { createContext, useEffect, useReducer } from "react"
import AuthReducer from "./AuthReducer"

const initialState={
    user:JSON.parse(localStorage.getItem('session')) || null,
    isFetching:false,
    error:false
}

export const AuthContext=createContext(initialState)



export const AuthContextProvider=({children})=>{
    const [state, dispatch]=useReducer(AuthReducer,initialState)
    useEffect(()=>{
        localStorage.setItem('session',JSON.stringify(state.user))
        // localStorage.setItem('token',JSON.stringify((state.token)))
    },[state.user])
   
    return(
        <AuthContext.Provider value={{user:state.user,isFetching:state.isFetching,error:state.error,dispatch:dispatch}}>

            {children}

        </AuthContext.Provider>
    )

}