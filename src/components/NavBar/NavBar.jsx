import React from 'react';
import './NavBar.css'


const NavBar = () => {
  return (
    <div className='NavBar'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">IphoneZS</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Phones</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Mac´s</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Accesories</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" id='num' aria-current="page" href="#"><img className='CartBuy' src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="" /> 5 </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar