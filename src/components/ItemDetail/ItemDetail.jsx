import React from 'react';

const ItemDetail = ({ product }) => {
  // Asegúrate de establecer un valor predeterminado para product si es undefined
  const { image, name, price, description } = product || {};

  return (
    <div className='ItemDetail'>
      {product ? (
        <>
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <p>{description}</p>
          <p>Precio: ${price}</p>
        </>
      ) : (
        <p>El producto no se ha cargado aún.</p>
      )}
    </div>
  );
};

export default ItemDetail;