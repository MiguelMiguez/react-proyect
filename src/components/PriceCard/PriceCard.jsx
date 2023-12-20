import React from 'react'
import './PriceCard.css'

const PriceCard = ({price}) => {
  return (
    <div className='PriceCard'>
        <p className='Price'>{`$${price}`}</p>
        <button className='BtnAddCart'>add to cart</button>
    </div>
  )
}

export default PriceCard