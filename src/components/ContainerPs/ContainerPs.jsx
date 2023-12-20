import React, { useRef } from 'react'
import './ContainerPs.css'
import PrincipalScreen from '../PrincipalScreen/PrincipalScreen';
import ContainerPhone from '../ContainerPhone/ContainerPhone';


const ContainerPs = () => {
  const containerPhoneRef = useRef(null);

  const scrollToContainer = () => {
    containerPhoneRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='ContainerPs'>
      <PrincipalScreen scrollToContainer={scrollToContainer} />
      <ContainerPhone ref={containerPhoneRef} />
    </div>
  );
};



export default ContainerPs