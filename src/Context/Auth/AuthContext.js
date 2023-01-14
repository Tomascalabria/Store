import { createContext, useReducer } from "react";



const initial_state={
    user:JSON.parse(localStorage.getItem('user')) || null,
    isFetching:false,
    error:false
}

export const AuthContext=createContext(initial_state)


export const AuthContextProvider=({children})=>{
const [state,dispatch]=useReducer(AuthReducer,initial_state)
useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(state.user))
    // localStorage.setItem('token',JSON.stringify((state.token)))
},[state.user])

return(
    <AuthContext.Provider value={{user:state.user,isFetching:state.isFetching,error:state.error,dispatch}}>

        {children}

    </AuthContext.Provider>
)
}