import React from 'react';
import PrincipalTittle from '../PrincipalTittle/PrincipalTittle';
import ButtonDown from '../ButtonDown/ButtonDown';
import './PrincipalScreen.css';
import SelectProducts from '../SelectProducts/SelectProducts';

const PrincipalScreen = () => {
  return (
    <div className='PrincipalScreen'>
        <PrincipalTittle/>
        <ButtonDown/>
        <SelectProducts/>
    </div>
  )
}

export default PrincipalScreen