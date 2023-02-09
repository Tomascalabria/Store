import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../../../Context/Cart/CartContext";
import navBarLogo from '../../../../Media/Sneaker_illustration.png';
import { Cart } from "../../../Cart/Cart";


  export const DesktopNavBar=()=>{
    const {handleClick,style}=useContext(CartContext)
const checkMenuStatus=()=>{
  if(style!='menu'){
    handleClick()
  }

}
    return(
  <div className='NavBar_outer_container' style={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>
        <div className='NavBar_top_container' style={{height:'100%',width:'100%',margin:'0rem 0.9rem',display:'flex',justifyContent:'center', alignItems:'center'}}>
          
           <div className='NavBar_top_logo_section' style={{flex:'1',width:'80px'}} >
           <Link to='/'> <img src={navBarLogo} alt='Navbar logo - Sneaker or shoe' style={{width:'60px',height:'60px'}}></img></Link>
            </div>
            <div className="NavBar_main_section" style={{width:'37.5%',height:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'3rem',textAlign:'center',borderRadius: '50px',background:'transparent'}}>
  
            <Link to='/calzado' onClick={checkMenuStatus}> <h2 className='navBar_main_title'>CALZADO</h2></Link>
            <Link to='/vestimenta' onClick={checkMenuStatus}> <h2 className='navBar_main_title'>VESTIMENTA</h2></Link>
            <Link to='/accesorios' onClick={checkMenuStatus}>  <h2 className='navBar_main_title'>ACCESORIOS</h2></Link>
            </div>
            <div className='NavBar_top_auth_section' style={{width:'30.5%',justifyContent:'flex-end',display:'flex', flexDirection:'row',alignContent:'center'}}>
              <div className='NavBar_top_auth_container' style={{ gap:'1rem',marginRight:'1.3em'}}> 
              <Link to={'/Login'} onClick={checkMenuStatus}><button className='authButton' >INGRESAR</button></Link>
              <Link to={'/Register'} onClick={checkMenuStatus}  ><button  className='authButton'> REGISTRARME</button></Link>
              <Cart/>
                </div>
              
            </div>
            <div className='NavBar_top_section'>
  
            </div>
          </div>
  
      </div> 
       )
  }
  