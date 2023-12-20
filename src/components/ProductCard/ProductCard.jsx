import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import DescriptionCard from '../DescriptionCard/DescriptionCard';
import ColorCard from '../ColorCard/ColorCard';
import PriceCard from '../PriceCard/PriceCard';
import './ProductCard.css';



const ProductCard = ({productData}) => {
  const{image, name, price, description} = productData;
  return (
    <div className='ProductCard'>
      <ImageCard image= {image}/>
      <DescriptionCard name= {name} description={description} />
      <PriceCard price={price}/>
    </div>
  )
}

export default ProductCard