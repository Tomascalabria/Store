import React from 'react'
import './Categories.css'
import shoes_categories_portrait from '../../../Media/Shoe_categories_portrait.webp'
import clothes_categories_portrait from '../../../Media/Clothes_categories_portrait.avif'
import accesories_categories_portrait from '../../../Media/Accesories_categories_portrait.webp'
import discount_banner from '../../../Media/winter_sale_discount_banner.jpg'
export const Categories = () => {

  return (
   <>
   <section className='categories' >
      <div className='categories_container'>
        <div className='inner_categorie categories_clothing'>
          <img src={clothes_categories_portrait} alt='products categories portrait - clothing categories'></img>
          <p className='categories_epigraph'>Vestimenta</p>
        </div>
        <div className='inner_categorie categories_shoes'>
        <img src={shoes_categories_portrait} alt='products categories portrait - shoes categories'></img>
        <p className='categories_epigraph'>Calzado</p>

        </div>
        <div className='inner_categorie categories_accesories'>
          <img src={accesories_categories_portrait} alt='products categories portrait - accesories categories'></img>
          <p className='categories_epigraph'>Accesorios</p>
        </div>
      </div>
   </section>
   <section className='discounts'>
    <div className='discounts_container'>
      <img className='discounts_container_img' src={discount_banner} alt='Winter season discount banner'></img>
      <div>
       <h2 className='discount_epigraph'>No te pierdas la oportunidad</h2> 
      </div>

    </div>
   </section>
   </>
  )
}
