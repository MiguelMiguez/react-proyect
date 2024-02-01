import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = ({ cartItems, clearCart, removeFromCart, sumarContador, restarContador }) => {
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

  const sumarContadorLocal = (itemId) => {
    sumarContador(itemId);
    setCounters({
      ...counters,
      [itemId]: counters[itemId] + 1,
    });
  };

  const restarContadorLocal = (itemId) => {
    restarContador(itemId);
    if (counters[itemId] > 1) {
      setCounters({
        ...counters,
        [itemId]: counters[itemId] - 1,
      });
    }
  };

  useEffect(() => {
    setCounters(
      cartItems.reduce((acc, item) => {
        acc[item.id] = counters[item.id] || 1;
        return acc;
      }, {})
    );
  }, [cartItems]);

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
              <p className='CartInfo'>{item.description}</p>
              <p className='CartInfo'>{`$${item.price}`}</p>
              <div>
                <button onClick={() => restarContadorLocal(item.id)} className='BtnQuantity'>
                  -
                </button>
                <p>{counters[item.id]}</p>
                <button onClick={() => sumarContadorLocal(item.id)} className='BtnQuantity'>
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
