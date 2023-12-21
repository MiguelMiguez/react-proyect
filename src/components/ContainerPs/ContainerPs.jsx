import React, { useRef } from 'react';
import './ContainerPs.css';
import PrincipalScreen from '../PrincipalScreen/PrincipalScreen';
import ContainerPhone from '../ContainerPhone/ContainerPhone';

const ContainerPs = ({ addToCart }) => {
  const containerPhoneRef = useRef(null);

  const scrollToContainer = () => {
    containerPhoneRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='ContainerPs'>
      <PrincipalScreen scrollToContainer={scrollToContainer} />
      <ContainerPhone ref={containerPhoneRef} addToCart={addToCart} />
    </div>
  );
};

export default ContainerPs;