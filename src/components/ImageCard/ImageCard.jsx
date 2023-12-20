import React from 'react'
import './ImageCard.css'

const ImageCard = ({image}) => {
  return (
    <div className='ImageCard'>
        <img className='ImgProduct' src={image} alt="" />
    </div>
  )
}

export default ImageCard