import React from 'react'
import './DescriptionCard.css'

const DescriptionCard = ({ name, description }) => {
  return (
    <div className='DescriptionCard'>
      <h2 className='TittleProduct'>{name}</h2>
      <p className='InfoProduct'>{description}</p>
    </div>
  );
};

export default DescriptionCard