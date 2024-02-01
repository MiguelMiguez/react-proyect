import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [productInfo, setProductInfo] = useState(null);
  const navigate = useNavigate();

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

  const sumarContador = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        item.quantity += 1;
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const restarContador = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        item.quantity -= 1;
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const setProduct = (product) => {
    setProductInfo(product);
    navigate(`/product/${product.category}/${product.id}`);
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
        sumarContador,
        restarContador,
        productInfo,
        setProduct,
        navigate,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
