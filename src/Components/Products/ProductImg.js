import React, { useState } from 'react'
import './Products.css'
import no_image from '../../Media/no_image.png'

export const ProductImg = ({props}) => {
const [image_1,setImage_1]=useState(true)
return (

<>
<div className='img_banner'>
    {image_1? <>
<img className='img_hover' src={props.product_img} alt={`Product: ${props.product_name} card`} />
<div className='img_miniature_inner_container'>
<div className='img_miniature'>
    {props.product_img&&props.product_img_two?
    <>
        <img className='img_miniature_1' src={props.product_img} />
    <img className='img_miniature_2' src={props.product_img_two} onMouseEnter={()=>setImage_1(false)}   />
    </>
    :<>
    <img className='img_miniature_1' alt={`Product: ${props.product_name} card`} src={props.product_img} />
        <img className='img' style={{height:'80px',width:'80px'}} alt={`Product: ${props.product_name} card`} src={no_image} />

    </>
    }
</div>
</div>
    </>
:
<>
<img className='img_hover' src={props.product_img_two} alt={`Product: ${props.product_name} card  Price:$ ${props.product_price}`} />
<div className='img_miniature'>
    <img className='img_miniature_1' alt={`Product: ${props.product_name } card`}  src={props.product_img}   onMouseEnter={()=>setImage_1(true)}  />
    <img className='img_miniature_2'  alt={`Product: ${props.product_name } card`} src={props.product_img_two}     />
</div>
</>
}
</div>
</>



    )
}
