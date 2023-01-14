import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/Auth/AuthContext';
import { DefaultNavBar } from './DefaultNavBar';
import './NavBar.css'
import { SessionNavBar } from './SessionNavBar';
export const NavBar = () => {
const {user}=useContext(AuthContext)

  return (
  <>
  <nav className='NavBar' style={{width:'100%',height:'90px',background:'transparent'}}  >
  {user? <SessionNavBar/>:<DefaultNavBar/>}
  </nav>
  </>

  )
}
