import React, { useState } from 'react'
import { Page1Sf } from './ShipmentForm/page1sf'
import { Page2Sf } from './ShipmentForm/page2sf'
import { Page3Sf } from './ShipmentForm/page3sf'

export const ShipmentForm = () => {
 const [page,setPage]=useState(1)


return (
<>
<div className='checkOutForm'>

  {page===1?<Page1Sf/> :page===2?<Page2Sf/>:page===3?<Page3Sf/>:<></>}
  
  
  <button onClick={()=>{setPage(page+1)}}  style={{color:'white'}}>Siguiente</button>
</div>
  </>
  )
}

