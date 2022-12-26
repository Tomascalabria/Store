import React from 'react'
import './Categories.css'
import shoes_categories_portrait from '../../../Media/Shoe_categories_portrait.webp'
import clothes_categories_portrait from '../../../Media/Clothes_categories_portrait.avif'
import accesories_categories_portrait from '../../../Media/Accesories_categories_portrait.webp'
export const Categories = () => {

  return (
   <>
   <section className='categories'>
      <div className='categories_container'>
        <div className='inner_categorie categories_clothing'>
          <img src={clothes_categories_portrait} alt='products categories portrait - clothing categories'></img>
          <p className='categories_epigraph'>Clothes</p>
        </div>
        <div className='inner_categorie categories_shoes'>
        <img src={shoes_categories_portrait} alt='products categories portrait - shoes categories'></img>
        <p className='categories_epigraph'>Shoes</p>

        </div>
        <div className='inner_categorie categories_accesories'>
          <img src={accesories_categories_portrait} alt='products categories portrait - accesories categories'></img>
          <p className='categories_epigraph'>Accesories</p>

        </div>
      </div>
   </section>
   </>
  )
}
