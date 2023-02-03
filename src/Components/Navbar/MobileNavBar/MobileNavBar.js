import React from "react"
import { HamburguerMenu } from "./HamburguerMenu/HamburgerMenu"



export const MobileNavBar=()=>{
    return(

        <div className='NavBar_outer_container' style={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>
        <div className='NavBar_top_container' style={{height:'100%',width:'100%',margin:'0rem 0.9rem',display:'flex',justifyContent:'center', alignItems:'center'}}>
           <div className='NavBar_top_logo_section' style={{flex:'1',width:'80px'}} >

    <HamburguerMenu/>           
                </div>
              
            </div>
            <div className='NavBar_top_section'>
  
            </div>
  
      </div> 
  )
  }
