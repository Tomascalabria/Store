import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navBarLogo from '../../Media/Sneaker_illustration.png';
import { CartIcon } from './CartIcon';
import './NavBar.css'
export const NavBar = () => {
const [scrolling, setScrolling ]=useState(false)

const handleScroll=(e)=>{
  console.log(e.current.target)
  console.log(window.scrollY)
}


  return (
  <>
  <nav className='NavBar' style={{width:'100%',height:'180px',background:'transparent',  borderBottom:'solid rgb(252, 242, 184) 1px'}} onScroll={(e)=>{handleScroll(e)}} >
    <div className='NavBar_outer_container' style={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>
      <div className='NavBar_top_container' style={{height:'30%',width:'100%',margin:'0rem 0.9rem',display:'flex',justifyContent:'center', alignItems:'center'}}>
        
         <div className='NavBar_top_logo_section' style={{flex:'1',width:'50%'}} >
         <Link to='/'> <img src={navBarLogo} alt='Navbar logo - Sneaker or shoe' style={{width:'60px',height:'60px'}}></img></Link>
          </div>
          <div className='NavBar_top_auth_section' style={{width:'50%',justifyContent:'flex-end',display:'flex', flexDirection:'row',alignContent:'center'}}>
            <div className='NavBar_top_auth_container' style={{ gap:'1rem',marginRight:'3em'}}> 
            <Link to={'/Login'}><button className='authButton' >INGRESAR</button></Link>
            <Link to={'/Register'}><button  className='authButton'> REGISTRARME</button></Link>
            <CartIcon/>
              </div>
            
          </div>
          <div className='NavBar_top_section'>

          </div>
        </div>
    <div className='NavBar_main_container' style={{height:'70%',alignItems:'center',display:'flex',width:'100%',margin:'0.5rem 0rem 0.5rem 0rem'}}>
        <div className="NavBar_main_section" style={{width:'100%',height:'40%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'3rem',borderRadius: '50px',margin:' 0px 10px',background:'transparent'}}>

      <h2 className='navBar_main_title'>CALZADO</h2>
      <h2 className='navBar_main_title'>VESTIMENTA</h2>
      <h2 className='navBar_main_title'>ACCESORIOS</h2>
      </div>
    </div>
    </div>
  </nav>
  </>

  )
}
