import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import DescriptionCard from '../DescriptionCard/DescriptionCard';
import ColorCard from '../ColorCard/ColorCard';
import PriceCard from '../PriceCard/PriceCard';
import './ProductCard.css';



const ProductCard = () => {
  return (
    <div className='ProductCard'>
      <ImageCard/>
      <DescriptionCard/>
      <ColorCard/>
      <PriceCard/>
    </div>
  )
}

export default ProductCard