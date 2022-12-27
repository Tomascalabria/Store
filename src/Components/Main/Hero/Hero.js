import React from 'react'
import './Hero.css'
import { TitleTransition } from './TitleTransition'


export const Hero = () => {
  return (<>
  <section className='hero' style={{width:'100%',height:'500px',display:'flex',flexDirection:'row'}} >

  
    <div style={{width:'100%',height:'10%',justifyContent:'center',textAlign:'center',marginTop:'0.5rem',alignContent:'center',borderBottom: 'solid 1px rgb(252, 242, 184)'  }}>
    <TitleTransition  />
    </div>
    </section>
    </>
  )
}
