import React, { useState } from 'react'
import './Products.css'
// import more_icon from '../../Media/more_icon.png'

export const ProductImg = ({props}) => {
const [image_1,setImage_1]=useState(true)
return (

<>
<div className='img_banner'>
    {image_1? <>
<img className='img_hover' src={props.img_1} alt={`Product: ${props.name} card`} />
<div className='img_miniature_inner_container'>
<div className='img_miniature'>
    <img className='img_miniature_1' src={props.img_1} />
    <img className='img_miniature_2' src={props.img_2} onMouseEnter={()=>setImage_1(false)}   />
</div>
{/* <button className='see_more_button'><img src={more_icon} className='see_more_img' alt='click here to see more!'/></button> */}
</div>
    </>
:
<>
<img className='img_hover' src={props.img_2} alt={`Product: ${props.name} card  Price:$ ${props.price}`} />
<div className='img_miniature'>
    <img className='img_miniature_1' src={props.img_1}   onMouseEnter={()=>setImage_1(true)}  />
    <img className='img_miniature_2' src={props.img_2}     />
</div>
</>
}
</div>
</>



    )
}
