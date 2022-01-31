import React from 'react';

function navbar() {

    let style = {
        color:"black", backgroundColor:"blue"
    }

  return (
  <div>
      <header>
          <h1>Lucí deporte</h1>
      </header>
      <nav style={style}>
        <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
                <a>Inicio</a>
            </li>
            <li class="nav-item">
                <a>Categorías</a>
            </li>
            <li class="nav-item">
                <a>Ofertas</a>
            </li>
            <li class="nav-item">
                <a>Contacto</a>
            </li>
        </ul>
       </nav>
  </div>
  );
}

export default navbar;
