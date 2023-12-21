import React from 'react'
import './PriceCard.css'

const PriceCard = ({price}) => {
  return (
    <div className='PriceCard'>
        <p className='Price'>{`$${price}`}</p>
    </div>
  )
}

export default PriceCard