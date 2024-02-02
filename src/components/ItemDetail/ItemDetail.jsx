import React, { useState } from 'react';
import { useMyContext } from '../MyContext/MyContext';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const { image, name, price, description, info } = product || {};
  const { addToCart } = useMyContext();
  const [quantity, setQuantity] = useState(1);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setButtonClicked(true);
    setQuantity(1);
  };

  return (
    <div className='ItemDetail'>
      {product ? (
        <>
          <div className='ImgDetail'>
            <img className='ImgProduct' src={image} alt={name} />
          </div>
          <div className='DetailProduct'>
            <h2 className='TittleProduct2'>{name}</h2>
            <p className='InfoProduct'>{description}</p>
            <p className='InfoProduct2'>U$D {price}</p>
            <p className='InfoProduct'>✅En Stock</p>
            <div>
              <button
                className='ButtonProduct'
                onClick={handleAddToCart}
                disabled={buttonClicked}
              >
                {buttonClicked ? 'Agregado al Carrito' : 'Agregar al Carrito'}
              </button>
            </div>
            <p>{info}</p>
          </div>
        </>
      ) : (
        <p>El producto no se ha cargado aún.</p>
      )}
    </div>
  );
};

export default ItemDetail;
