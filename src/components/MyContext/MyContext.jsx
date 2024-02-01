import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    setCartItemCount((prevCount) => prevCount + 1);
  };

  const clearCart = () => {
    setCartItems([]);
    setCartItemCount(0);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    setCartItemCount((prevCount) => prevCount - 1);
  };

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <MyContext.Provider
      value={{
        selectedCategory,
        setCategory,
        sortOrder,
        setSortOrder,
        cartItems,
        setCartItems,
        cartItemCount,
        setCartItemCount,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
