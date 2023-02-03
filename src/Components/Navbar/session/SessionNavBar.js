import React, { useContext } from 'react'
import navBarLogo from '../../../Media/Sneaker_illustration.png';
import {CartIcon} from '../CartIcon'
import { Link, useNavigate } from 'react-router-dom';
import { logoutProcess } from '../../../Context/Auth/ApiCall';
import { AuthContext } from '../../../Context/Auth/AuthContext';

export const SessionNavBar = () => {
const { user } = useContext(AuthContext)
const navigate=useNavigate()
const { dispatch }= useContext(AuthContext)
    const handleLogout=()=>{
        logoutProcess(dispatch)
    
    }
  return (
<div className='NavBar_outer_container' style={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>
      <div className='NavBar_top_container' style={{height:'100%',width:'100%',margin:'0rem 0.9rem',display:'flex',justifyContent:'center', alignItems:'center'}}>
        
         <div className='NavBar_top_logo_section' style={{flex:'1',width:'80px'}} >
         <Link to='/'> <img src={navBarLogo} alt='Navbar logo - Sneaker or shoe' style={{width:'60px',height:'60px'}}></img></Link>
          </div>
          <div className="NavBar_main_section" style={{width:'37.5%',height:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'3rem',textAlign:'center',borderRadius: '50px',background:'transparent'}}>

          <Link to='/calzado'> <h2 className='navBar_main_title'>CALZADO</h2></Link>
          <Link to='/vestimenta'> <h2 className='navBar_main_title'>VESTIMENTA</h2></Link>
          <Link to='/accesorios'>  <h2 className='navBar_main_title'>ACCESORIOS</h2></Link>
          </div>
          <div className='NavBar_top_auth_section' style={{width:'30.5%',justifyContent:'flex-end',display:'flex', flexDirection:'row',alignContent:'center'}}>
            <div className='NavBar_top_auth_container' style={{ gap:'1rem',marginRight:'1.3em'}}> 
            <Link to={'/'}><button className='authButton' onClick={handleLogout}>Logout</button></Link>
            <button  className='authButton' > profile</button>
            <CartIcon/> 
              </div>
            
          </div>
          <div className='NavBar_top_section'>

          </div>
        </div>
    </div>
    )
}
