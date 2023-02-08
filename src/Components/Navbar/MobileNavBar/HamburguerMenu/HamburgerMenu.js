import { Link } from 'react-router-dom';
import { CartIcon } from '../../../Cart/CartIcon'

export const HamburguerMenu = () => {

    return (
        <>
     
     <div id="menuLineas" className="menu__lineas"   >
     
      <div id="linea1" className="menu__lineas__linea1"></div>
      <div id="linea2" className="menu__lineas__linea2"></div>
      <div id="linea3" className="menu__lineas__linea3"></div>
    </div>
    <nav id="menuItems" className="menu__items">
      
      <ul>
        <li><Link className="menu__items-hover" >Home</Link></li>
        <li><Link className="menu__items-hover" >Zapatillas</Link></li>
        <li><Link className="menu__items-hover" >Ropa</Link></li>
        <li><Link className="menu__items-hover" >Accesorios</Link></li>
      </ul>
    </nav>
    </>
    );
  };  
  