// ItemListContainer.jsx
import React from 'react';
import { useMyContext } from '../MyContext/MyContext';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const { setSortOrder, selectedCategory } = useMyContext();

  const handleSortChange = (order) => {
    console.log('Order clicked:', order); 
    setSortOrder(order);
  };

  return (
    <div className='ContainerButton'>
      <button className='OrderButtons' onClick={() => handleSortChange('MenToMay')}>
        Menor a Mayor
      </button>
      <button className='OrderButtons' onClick={() => handleSortChange('MayToMen')}>
        Mayor a Menor
      </button>
      <button className='OrderButtons' onClick={() => handleSortChange(null)}>
        Mostrar Todos
      </button>
    </div>
  );
};

export default ItemListContainer;
