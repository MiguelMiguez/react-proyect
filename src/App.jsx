import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MacPage from './components/MacPage/MacPage';
import NavBar from './components/NavBar/NavBar';
import PhonesPage from './components/PhonesPage/PhonesPage';
import ContainerPs from './components/ContainerPs/ContainerPs';
import Cart from './components/Cart/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const clearCart = () => {
    setCartItems([]); // Vacía el carrito
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart); // Elimina un elemento del carrito por su ID
  };

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={<ContainerPs addToCart={addToCart} />}
          />
          <Route path='/mac' element={<MacPage addToCart={addToCart} />} />
          <Route path='/phones' element={<PhonesPage addToCart={addToCart} />} />
          <Route
            path='/cart'
            element={
              <Cart
                cartItems={cartItems}
                clearCart={clearCart}
                removeFromCart={removeFromCart}
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
