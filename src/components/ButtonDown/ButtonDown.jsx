import React from 'react';
import './ButtonDown.css';

const ButtonDown = ({ scrollToContainer }) => {
  return (
    <div className='ButtonDown'>
      <button className="BtnScroll" onClick={scrollToContainer}>
        <img
          className='ImgBtn'
          src="https://cdn-icons-png.flaticon.com/512/25/25623.png"
          alt="Button"
        />
      </button>
    </div>
  );
};

export default ButtonDown;
