import React from 'react'
import navBarLogo from '../../Media/Sneaker_illustration.png'
import navBarFont from '../../fonts/TTF/HKGroteskWide-Light.ttf'
export const NavBar = () => {
  return (
  <>
  <nav className='NavBar' style={{width:'100%',height:'180px',background:'transparent',  borderBottom:'solid rgb(252, 242, 184) 1px'}}>
    <div className='NavBar_outer_container' style={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>
      <div className='NavBar_top_container' style={{height:'30%',width:'100%',margin:'0rem 0.9rem',display:'flex',justifyContent:'center', alignItems:'center'}}>
        
         <div className='NavBar_top_logo_section' style={{flex:'1',width:'50%'}} >
          <img src={navBarLogo} alt='Navbar logo - Sneaker or shoe' style={{width:'60px',height:'60px'}}></img>
          </div>
          <div className='NavBar_top_auth_section' style={{width:'50%',justifyContent:'flex-end',display:'flex'}}>
            <div className='NavBar_top_auth_container' style={{ gap:'1rem',marginRight:'1rem'}}> 

            <button style={{fontFamily:navBarFont,fontSize:'0.9rem',fontWeight:'lighter', color:'#ffff'}}>LOGIN</button>
            <button style={{fontFamily:navBarFont,fontSize:'0.9rem',fontWeight:'lighter', color:'#ffff'}}> REGISTER</button>
            </div>
            
          </div>
          <div className='NavBar_top_section'>

          </div>
        </div>
    <div className='NavBar_main_container' style={{height:'70%',alignItems:'center',display:'flex',width:'100%',margin:'0.5rem 0rem 0.5rem 0rem'}}>
        <div className="NavBar_main_section" style={{width:'100%',height:'40%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'3rem',borderRadius: '50px',margin:' 0px 10px',background:'transparent'}}>

      <h2 className='navBar_main_title' style={{fontFamily:navBarFont,fontSize:'1.3rem',fontWeight:'lighter',background:'transparent',color:'#ffffffde'}}>SHOES</h2>
      <h2 className='navBar_main_title' style={{fontFamily:navBarFont,fontSize:'1.3rem',fontWeight:'lighter',background:'transparent',color:'#ffffffde'}}>CLOTHES</h2>
      <h2 className='navBar_main_title' style={{fontFamily:navBarFont,fontSize:'1.3rem',fontWeight:'lighter',background:'transparent',color:'#ffffffde'}}>ACCESORIES</h2>
      </div>
    </div>
    </div>
  </nav>
  </>

  )
}
