import React from 'react'
import './Hero.css'
import black_arrow from '../../../Media/black_arrow.png'
import gold_arrow from '../../../Media/gold_arrow.png'
import white_arrow from '../../../Media/white_arrow.png'
import banner from '../../../Media/banner_3.jpg'


export const Hero = () => {

  return (<>
  <section className='hero' style={{width:'100%',height:'550px',display:'flex',flexDirection:'row'}} >
    <div style={{width:'100%',height:'100%',justifyContent:'center',textAlign:'center',marginTop:'0.5rem',alignContent:'center'  }}>
    <div className='banner'>
    <img src={banner}></img>
      <div className='banner_text_container'>
        <div className='banner_text'>
          <h2>Colección 2023</h2>
           <button className='banner_arrow'><img src={gold_arrow}></img></button>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}
