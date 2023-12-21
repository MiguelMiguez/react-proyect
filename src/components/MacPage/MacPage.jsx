import React from 'react';
import TittleMac from '../TittleMac/TittleMac';
import './MacPage.css';
import ContainerMac from '../ContainerMac/ContainerMac';

const MacPage = ({ addToCart }) => {
  return (
    <div>
      <TittleMac />
      <ContainerMac addToCart={addToCart} />
    </div>
  );
};

export default MacPage;
