import React from 'react';
import PrincipalTittle from '../PrincipalTittle/PrincipalTittle';
import ButtonDown from '../ButtonDown/ButtonDown';
import './PrincipalScreen.css';


const PrincipalScreen = ({ scrollToContainer }) => {
  return (
    <div className='PrincipalScreen'>
      <PrincipalTittle />
      <ButtonDown scrollToContainer={scrollToContainer} />
    </div>
  )
}

export default PrincipalScreen