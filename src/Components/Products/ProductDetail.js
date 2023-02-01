import React, { useEffect, useState } from 'react'
import { Desktop_SelectSize, SelectSize } from './Selectors/Size_selector/Desktop_SelectSize'

export const ProductDetail = ({props}) => {
const [SizeBar,setSizeBar]=useState(false)
const [selectedSize, setSelectedSize] = useState('');
const handleSideBar=()=>{
setTimeout(()=>{
  setSizeBar(true)
},200)
}
const handleSizeSelection=(e)=>{
  e.preventDefault()
  let size=e.target.value
  setSelectedSize(size)
}
useEffect(()=>{

  console.log(selectedSize)
},[selectedSize])

  return (

    <>
    <div className='product_detail_separator'> </div>
    <div className='product_detail_container'>
      <div className='product_detail_img_container'>
      <img className='product_detail_img' src={props.product_img} alt={props.product_description}/>
      
      </div>  
      <div className='product_detail_text_container'>
        <div className='product_detail_title_container'>
        <h2>{props.product_name}</h2>
        </div>
        <div className='product_detail_price'>
          <div className='product_detail_price_container'>

            <h4 className='product_detail_price_label'>Precio:</h4>
            <h4 className='product_detail_price_label'>$ {props.product_price}</h4>
          </div>
        </div>
        <div className='product_detail_description_outer'>
        <div className='product_detail_description_container'>
        <p className='product_detail_description_container_label'>{props.description}</p>
        </div>

        </div>
      <div className='product_select'>
    
        <> 

        <div className='product_select_sizes'>

        {Object.entries(props.stock).map((size)=>{
          if(size[1]===0){
            return(
              <span key={size[0]} className="price--line-through"><button  key={size[0]} className={`size_${size[0]}_button size_no_stock`} title='Perdon pero no tenemos stock de este producto:'>{size[0]}</button></span>
                )
          }
          else{
            return(
              <button key={size[0]} className={`size_${size[0]}_button size_button`} onClick={(e)=>handleSizeSelection(e)} value={size[0]}>{size[0]} </button>

            )
          }
      })}

          </div>
          
          <div className='product_select_quantity'>
            
              <h4 className='product_select_quantity_label'>Cantidad</h4>   
                     
        </div>

        </>

        </div>
        
        <div className='buy_product_btn_container'>

       <button className='buy_product_btn'>Comprar</button>
        </div>
        
      </div>

      </div>

      <div className='product_detail_separator'> </div>
     

</> 
 )
}
