import React, { useEffect } from 'react'
import { CheckOutDetail } from './CheckoutDetail/CheckOutDetail'
import { ShipmentForm } from './ShipmentForm'

export const CheckOut = () => {

  return (
    <>
    <div className='checkout_container'>

    <ShipmentForm/>
    <CheckOutDetail/>
    </div>
    </>
    )
}
