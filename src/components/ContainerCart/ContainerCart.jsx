import React from 'react';
import Cart from '../Cart/Cart';

const ContainerCart = ({ cartItems }) => {
  return (
    <div className='ContainerCart'>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default ContainerCart;
