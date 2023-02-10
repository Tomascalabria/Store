import React from 'react'
import './Hero.css'
import gold_arrow from '../../../Media/gold_arrow.png'
import banner from '../../../Media/banner_3.jpg'


export const Hero = () => {

  return (<>
  <section className='hero' style={{width:'100%',height:'550px',display:'flex',flexDirection:'row'}} >
    <div style={{width:'100%',height:'100%',justifyContent:'center',textAlign:'center',marginTop:'0.5rem',alignContent:'center'  }}>
    <div className='banner'>
    <img alt='Banner de La Tiendita. Coleccion 2023' src={banner}></img>
      <div className='banner_text_container'>
        <div className='banner_text'>
          <h2>Colección 2023</h2>
           <button className='banner_arrow'><img alt='Flecha amarilla para ver los productos de la coleccion 2023' src={gold_arrow}></img></button>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}
