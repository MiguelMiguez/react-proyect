import React from 'react';
import PrincipalTittle from '../PrincipalTittle/PrincipalTittle';
import ButtonDown from '../ButtonDown/ButtonDown';
import './PrincipalScreen.css';


const PrincipalScreen = () => {
  return (
    <div className='PrincipalScreen'>
        <PrincipalTittle/>
        <ButtonDown/>    
    </div>
  )
}

export default PrincipalScreen