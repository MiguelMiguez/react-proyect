import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ cartItemCount }) => {
  return (
    <div className='NavBar'>
      <nav className="navbar  fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to='/'>
            <h2 className="navbar-brand" href="#">IphoneZS</h2>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
            <ul className="navbar-nav">
              <li className='ListContainer'>
                <NavLink to='/'> 
                  Home
                </NavLink>
              </li>
              <li className='ListContainer'>
                <NavLink to='/phones'> 
                  Phones
                </NavLink>
              </li>
              <li className='ListContainer'>   
                <NavLink to='/mac'> 
                  Mac´s
                </NavLink>
              </li>
              <li className='ListContainer'>
                <NavLink to='/cart'> 
                  <img className='CartBuy' src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="CartBuy" />
                  <p className='CartNumber'>{cartItemCount}</p> 
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
