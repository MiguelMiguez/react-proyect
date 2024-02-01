import React from 'react';
import Cart from '../Cart/Cart';
import { useMyContext } from '../MyContext/MyContext';

const ContainerCart = () => {
  const { cartItems, clearCart, removeFromCart, sumarContador, restarContador } = useMyContext();

  return (
    <div className='ContainerCart'>
      <Cart
        cartItems={cartItems}
        clearCart={clearCart}
        removeFromCart={removeFromCart}
        sumarContador={sumarContador}
        restarContador={restarContador}
      />
    </div>
  );
};

export default ContainerCart;
