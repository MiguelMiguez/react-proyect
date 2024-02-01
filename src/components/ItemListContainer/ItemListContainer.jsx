
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
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Filtrar
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" onClick={() => handleSortChange('MenToMay')} >Menor a Mayor</a></li>
          <li><a class="dropdown-item" onClick={() => handleSortChange('MayToMen')} >Mayor a menor</a></li>
          <li><a class="dropdown-item"  onClick={() => handleSortChange(null)} >Destacados</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ItemListContainer;
