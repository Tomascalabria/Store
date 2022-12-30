import React, { useState } from 'react'
import './Products.css'

export const ProductImg = ({props}) => {
const [hover,setHover]=useState(false)
return (<>
{
    hover?
<>
<div className='img_banner'>
<img className='img_hover' src={props.img_1} alt={`Product: ${props.name} card`} onMouseEnter={()=>setHover(true)}onMouseLeave={()=>setHover(false)}/>
    <h3 className='img_hover_text'>add to cart</h3>
</div>
</>
:
<img className='img_no_hover' src={props.img_1} alt={`Product: ${props.name} card`} onMouseEnter={()=>setHover(true)}onMouseLeave={()=>setHover(false)}/>
}
</>

    )
}
