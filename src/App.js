import React from 'react'
import { Footer } from './Components/Footer/Footer';
import './App.css'
import {NavBar} from './Components/Navbar/NavBar'
import { Routing } from './Components/Routing/Routing';
import { Products } from './Components/Products/Products';
const  App=()=> {
  return (
    <div className="App">
      <NavBar/>

      <Routing/>
      <Footer/> 
    </div>
  );
}

export default App;
