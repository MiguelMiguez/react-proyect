import React from 'react'
import './PriceCard.css'

const PriceCard = () => {
  return (
    <div className='PriceCard'>
        <p className='Price'>$200.000</p>
        <button className='BtnAddCart'>Agregar al carrito</button>
    </div>
  )
}

export default PriceCard