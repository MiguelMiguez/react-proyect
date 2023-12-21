import React, { useRef, useState } from 'react';
import './ContainerPs.css';
import PrincipalScreen from '../PrincipalScreen/PrincipalScreen';
import ContainerPhone from '../ContainerPhone/ContainerPhone';

const ContainerPs = () => {
  const containerPhoneRef = useRef(null);
  const [cartItems, setCartItems] = useState([]);

  const scrollToContainer = () => {
    containerPhoneRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className='ContainerPs'>
      <PrincipalScreen scrollToContainer={scrollToContainer} />
      <ContainerPhone ref={containerPhoneRef} addToCart={addToCart} />
    </div>
  );
};

export default ContainerPs;
