import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='footer_section'>
    <div className='footer_container'>
        <div className='footer_inner_container_one'>
            <h2 className='main_footer_text'>Entra en nuestro mundo</h2>
            <p className='main_footer_text_p'>Dejanos tu mail para que te mandemos nuestras novedades, promociones, descuentos y mas</p>

        </div>
        <div className='footer_inner_container_two'>

        <input placeholder='Dejanos tu Mail' ></input>
        <button className='footer_contact_button'> Enviar</button>
        </div>
        <div className='footer_terms'>

        </div>
    </div>
    </footer>
  )
}
