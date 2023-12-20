import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'
import MacPage from '../MacPage/MacPage';



const NavBar = () => {
  return (
    <div className='NavBar'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link to='/'>
                <h2 class="navbar-brand" href="#">IphoneZS</h2>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li className='ListContainer'>
                            <NavLink  to='/'> 
                                Home
                            </NavLink>
                        </li>
                        <li className='ListContainer'>
                            <NavLink  to='/phones'> 
                                Phones
                            </NavLink>
                        </li>
                        <li className='ListContainer'>   
                            <NavLink  to='/mac'> 
                                Mac´s
                            </NavLink>
                        </li>
                        <li className='ListContainer'>
                            <NavLink  to='/cart'> 
                                <img className='CartBuy' src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="" /> 
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar