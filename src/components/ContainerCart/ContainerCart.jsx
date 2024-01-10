import React from 'react';
import Cart from '../Cart/Cart';

const ContainerCart = ({ cartItems, clearCart, removeFromCart }) => {
  return (
    <div className='ContainerCart'>
      <Cart
        cartItems={cartItems}
        clearCart={clearCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default ContainerCart;
