// ProductCard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageCard from '../ImageCard/ImageCard';
import DescriptionCard from '../DescriptionCard/DescriptionCard';
import PriceCard from '../PriceCard/PriceCard';
import './ProductCard.css';

const ProductCard = ({ productData, addToCart }) => {
  const { image, name, price, description } = productData;
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!isButtonDisabled) {
      addToCart(productData);
      setButtonDisabled(true);
    }
  };

  const handleVerProducto = () => {
    navigate('/item-detail');
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
        <button className='BtnAddCart' onClick={handleVerProducto}>
          Ver Producto
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
