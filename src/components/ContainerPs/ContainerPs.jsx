// ContainerPs.js
import React, { useRef } from 'react';
import './ContainerPs.css';
import PrincipalScreen from '../PrincipalScreen/PrincipalScreen';
import ContainerPhone from '../ContainerPhone/ContainerPhone';
import ContainerMac from '../ContainerMac/ContainerMac'

const ContainerPs = ({ addToCart }) => {
  const containerPhoneRef = useRef(null);

  const scrollToContainer = () => {
    if (containerPhoneRef && containerPhoneRef.current) {
      containerPhoneRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='ContainerPs'>
      <PrincipalScreen scrollToContainer={scrollToContainer} />
      <ContainerPhone addToCart={addToCart} ref={containerPhoneRef} />
      <ContainerMac addToCart={addToCart}/>
    </div>
  );
};

export default ContainerPs;
