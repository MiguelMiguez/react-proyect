import React from 'react';
import './PhonesPage.css';
import ContainerPhone from '../ContainerPhone/ContainerPhone';
import TittlePhone from '../TittlePhone/TittlePhone';

const PhonesPage = ({ addToCart }) => {
  return (
    <div>
      <TittlePhone />
      <ContainerPhone addToCart={addToCart} />
    </div>
  );
};

export default PhonesPage;