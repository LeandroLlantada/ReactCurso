import React from "react";
import '../navbar.css';
import Carrito from '../images/carritoCompras.png';

function iconoCart() {

    return (
    <div className='estiloN'>
        <div>
            <img src={Carrito} alt="Imagen de carrito"/>
        </div>
    </div>
    );
  }
  
  export default iconoCart;