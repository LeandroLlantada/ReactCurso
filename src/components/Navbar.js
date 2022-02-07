import React from 'react';
import '../navbar.css';
import CartWidget from './CartWidget';

function navbar() {

  return (
  <div className='estiloN'>
      <header>
          <h1>Lucí deporte</h1>
      </header>
      <nav>
        <ul className='nav nav-pills nav-fill'>
            <li className='nav-item'>
                <a>Inicio</a>
            </li>
            <li className='nav-item'>
                <a>Categorías</a>
            </li>
            <li className='nav-item'>
                <a>Ofertas</a>
            </li>
            <li className='nav-item'>
                <a>Contacto</a>
            </li>
            <li>
                <CartWidget />
            </li>
        </ul>
       </nav>
  </div>
  );
}

export default navbar;
