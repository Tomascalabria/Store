import { Link } from 'react-router-dom';
import { CartIcon } from '../../CartIcon'

export const HamburguerMenu = () => {
    return (
        <>
     <div id="menuLineas" className="menu__lineas" >
      <div id="linea1" className="menu__lineas__linea1"></div>
      <div id="linea2" className="menu__lineas__linea2"></div>
      <div id="linea3" className="menu__lineas__linea3"></div>
    </div>
    <nav id="menuItems" className="menu__items">
      <ul>
        <li><Link className="menu__items-hover" >Home</Link></li>
        <li><Link className="menu__items-hover" >Equipos</Link></li>
        <li><Link className="menu__items-hover" >Ropa</Link></li>
        <li><Link className="menu__items-hover" >Cursos</Link></li>
        <li><Link className="menu__items-hover" >Preguntas Frecuentes</Link></li>
        <li><Link id="contact__menu" className="menu__items-hover">Contacto</Link></li>
      </ul>
    </nav>
    </>
    );
  };  
  