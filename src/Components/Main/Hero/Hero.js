import React from 'react'
import './Hero.css'
import { TitleTransition } from './TitleTransition'


export const Hero = () => {
  return (<>
  <section className='hero' style={{width:'100%',height:'600px',display:'flex',flexDirection:'row'}} >
  
<div className='left_hero_contaier' style={{height:'100%',width:'25%'}}>
    <div className='left_hero' style={{height:'100%',width:'100%'}}>
  
    
    </div>
  </div>
  <div className='main_hero_contaier' style={{display:'flex',height:'100%',width:'50%',flexDirection:'column', textAlign:'center',alignContent:'center', justifyContent:'center'}}>
    <h2 className='title'>ULTIMATE</h2>
    
    <div style={{width:'100%',justifyContent:'center',textAlign:'center',alignContent:'center'}}>
    <TitleTransition  />
    </div>
    <h2 className='title'>STORE</h2>
    </div>
    <div className='right_hero_contaier' style={{height:'100%',width:'25%'}}>
  </div>
    </section>
    </>
  )
}
