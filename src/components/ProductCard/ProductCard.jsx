import React, { useState } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import DescriptionCard from '../DescriptionCard/DescriptionCard';
import PriceCard from '../PriceCard/PriceCard';
import './ProductCard.css';

const ProductCard = ({ productData, addToCart }) => {
  const { image, name, price, description } = productData;
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleAddToCart = () => {
    if (!isButtonDisabled) {
      addToCart(productData);
      setButtonDisabled(true); 
    }
  };

  return (
    <div className='ProductCard'>
      <ImageCard image={image} />
      <DescriptionCard name={name} description={description} />
      <PriceCard price={price} />
      <div>
        <button className='BtnAddCart' onClick={handleAddToCart} disabled={isButtonDisabled}>
          Add to Cart
        </button>
        <button className='BtnAddCart'>Ver Producto</button>
      </div>
    </div>
  );
};

export default ProductCard;
