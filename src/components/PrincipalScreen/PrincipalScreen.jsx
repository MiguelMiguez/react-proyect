import React from 'react';
import PrincipalTittle from '../PrincipalTittle/PrincipalTittle';
import ButtonDown from '../ButtonDown/ButtonDown';
import NavBar from '../NavBar/NavBar'
import './PrincipalScreen.css';

const PrincipalScreen = () => {
  return (
    <div className='PrincipalScreen'>
        <NavBar/>
        <PrincipalTittle/>
        <ButtonDown/>
    </div>
  )
}

export default PrincipalScreen