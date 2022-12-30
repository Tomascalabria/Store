import React, { useState } from 'react'
import './Products.css'

export const ProductImg = ({props}) => {
const [image_1,setImage_1]=useState(true)
return (

<>
<div className='img_banner'>
    {image_1? <>
<img className='img_hover' src={props.img_1} alt={`Product: ${props.name} card`} />
<div className='img_miniature'>
    <img className='img_miniature_1' src={props.img_1}  onClick={()=>setImage_1(true)} />
    <img className='img_miniature_2' src={props.img_2} onClick={()=>setImage_1(false)}   />
</div>
    </>
:
<>
<img className='img_hover' src={props.img_2} alt={`Product: ${props.name} card`} />
<div className='img_miniature'>
    <img className='img_miniature_1' src={props.img_1}   onClick={()=>setImage_1(true)}  />
    <img className='img_miniature_2' src={props.img_2}  onClick={()=>setImage_1(false)}    />
</div>
</>
}
</div>
</>



    )
}
