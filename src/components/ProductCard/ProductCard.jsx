// ProductCard.js
import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import DescriptionCard from '../DescriptionCard/DescriptionCard';
import PriceCard from '../PriceCard/PriceCard';
import './ProductCard.css';

const ProductCard = ({ productData, addToCart }) => {
  const { image, name, price, description } = productData;

  const handleAddToCart = () => {
    addToCart(productData);
  };

  return (
    <div className='ProductCard'>
      <ImageCard image={image} />
      <DescriptionCard name={name} description={description} />
      <PriceCard price={price} />
      <button className='BtnAddCart' onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
 