import React, { useEffect, useState,useRef, useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import { Desktop_SelectSize, SelectSize } from './Selectors/Size_selector/Desktop_SelectSize'

export const ProductDetail = ({props}) => {
  const ref = useRef(null);
const {addToCart,cart,totalCost}=useContext(CartContext)
const [selected_button,setSelectedButton]=useState('')
const [SizeBar,setSizeBar]=useState(false)
const [selectedSize, setSelectedSize] = useState(false);
const [warningMessage,setWarningMessage]=('')
const handleSideBar=()=>{
setTimeout(()=>{
  setSizeBar(true)
},200)
}

const loop=()=>{
if(props.stock[selectedSize]<13){
  console.log('Ojo eh, el stock de este producto es : '+props.stock[selectedSize])
}
  
}
loop()

const addItemToCart=()=>{
if(!selectedSize){
  setWarningMessage('Tenes que seleccionar un talle primero')
}
else{

  let product={
    ...props,size:selectedSize
  }
  
  
addToCart(product)
}
}
totalCost()

const handleSizeSelection=(e)=>{
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
    
        <> 

        <div className='product_select_sizes'>
       <div className='select_size_title_container'>
        <h6>Seleccione su talle</h6>

       </div>
        {Object.entries(props.stock).map((size)=>{
          if(size[1]===0){
            return(
              <span key={size[0]} className="price--line-through"><button  key={size[0]} className={ `size_${size[0]}_button size_no_stock` } title='Perdon pero no tenemos stock de este producto:'>{size[0]}</button></span>
                )
          }
          else{
            return(
              <button key={size[0]} ref={ref} className={`size_${size[0]}_button size_button`} onClick={(e)=>handleSizeSelection(e)} value={size[0]}>{size[0]} </button>

            )
          }
      })}

          </div>
         

        </>

        
        <div className='buy_product_btn_container'>

       <button className='buy_product_btn' onClick={addItemToCart}>Comprar</button>
        </div>
        <p style={{color:'red',fontSize:'1.4rem'}}>{warningMessage}</p>
      </div>

      </div>

      <div className='product_detail_separator'> </div>
     

</> 
 )
}
