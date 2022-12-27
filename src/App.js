import React from 'react'
import { Footer } from './Components/Footer/Footer';
import { Main } from './Components/Main/Main';
import {NavBar} from './Components/Navbar/NavBar'
import { Routing } from './Components/Routing/Routing';
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
