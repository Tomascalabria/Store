import React, { useEffect } from 'react'
import './App.css'
import { Routing } from './Components/Routing/Routing';
import { CheckOut } from './Components/CheckOut/CheckOut';
import { useLocation } from 'react-router-dom';
const  App=()=> {

  return (
    <div className="App">
    
    <Routing/>

    </div>
  );
}

export default App;
