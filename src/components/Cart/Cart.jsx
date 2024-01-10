import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cartItems, clearCart, removeFromCart, updateQuantity }) => {
  const handleClearCart = () => {
    clearCart();
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const [counters, setCounters] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  const sumarContador = (itemId) => {
    setCounters({
      ...counters,
      [itemId]: counters[itemId] + 1,
    });
  };

  const restarContador = (itemId) => {
    if (counters[itemId] > 1) {
      setCounters({
        ...counters,
        [itemId]: counters[itemId] - 1,
      });
    }
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
              <div>
                <button onClick={() => restarContador(item.id)} className='BtnQuantity'>
                  -
                </button>
                <p>{counters[item.id]}</p>
                <button onClick={() => sumarContador(item.id)} className='BtnQuantity'>
                  +
                </button>
              </div>
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
