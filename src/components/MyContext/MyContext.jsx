
import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <MyContext.Provider value={{ selectedCategory, setCategory, sortOrder, setSortOrder }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
