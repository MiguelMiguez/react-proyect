import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MacPage from './components/MacPage/MacPage';
import NavBar from './components/NavBar/NavBar';
import PhonesPage from './components/PhonesPage/PhonesPage';
import ContainerPs from './components/ContainerPs/ContainerPs';
import ContainerCart from './components/ContainerCart/ContainerCart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const updateQuantity = (itemId, action) => {
    const updatedCartItems = [...cartItems];
    const selectedItemIndex = updatedCartItems.findIndex((item) => item.id === itemId);

    if (selectedItemIndex !== -1) {
      const selectedItem = updatedCartItems[selectedItemIndex];
      if (action === 'increment') {
        selectedItem.quantity += 1;
      } else if (action === 'decrement') {
        selectedItem.quantity -= 1;
        if (selectedItem.quantity === 0) {
          updatedCartItems.splice(selectedItemIndex, 1);
        }
      }
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ContainerPs addToCart={addToCart} />} />
          <Route path='/mac' element={<MacPage addToCart={addToCart} />} />
          <Route path='/phones' element={<PhonesPage addToCart={addToCart} />} />
          <Route
            path='/cart'
            element={
              <ContainerCart
                cartItems={cartItems}
                clearCart={clearCart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />
          <Route path='*' element={<ContainerPs addToCart={addToCart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
