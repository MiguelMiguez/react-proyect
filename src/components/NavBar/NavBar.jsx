// NavBar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import { useMyContext } from '../MyContext/MyContext';

const NavBar = () => {
  const { cartItemCount } = useMyContext();

  return (
    <div className='NavBar'>
      <nav className="navbar  fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">
            <h2>IphoneZS</h2>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
            <ul className="navbar-nav">
              <li className='ListContainer'>
                <NavLink to='/' activeClassName="active" exact>
                  Home
                </NavLink>
              </li>
              <li className='ListContainer'>
                <NavLink to='/phones' activeClassName="active">
                  Phones
                </NavLink>
              </li>
              <li className='ListContainer'>
                <NavLink to='/mac' activeClassName="active">
                  Mac´s
                </NavLink>
              </li>
              <li className='ListContainer'>
                <NavLink to='/cart' activeClassName="active">
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
};

export default NavBar;
