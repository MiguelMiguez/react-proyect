import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, clearCart, removeFromCart }) => {
  const handleClearCart = () => {
    clearCart(); 
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className='Cart'>
      <div>
        <h2 className='CartTitle'>Tu carrito</h2>
        <button onClick={handleClearCart} className='ClearCartButton'>
          Vaciar Carrito
        </button>
      </div>
      {cartItems.length === 0 ? (
        <div>
          <p>El carrito está vacío 😞</p>
        </div>
      ) : (
        <div className='CartItems'>
          {cartItems.map((item) => (
            <div key={item.id} className='CartItem'>
              <img className='ImgItem' src={item.image} alt={item.name} />
              <p>{item.description}</p>
              <p>{`$${item.price}`}</p>
              <button onClick={() => handleRemoveFromCart(item.id)} className='RemoveItemButton'>
              ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
