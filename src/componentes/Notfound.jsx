import React from 'react'
import { Link } from "react-router-dom";

function Notfound() {
  return (

    <div className='elemento-notfound'>
        <img className="imagen-notfound"src="src/assets/404.jpg" />   

      <div className='boton-irinicio'>
        <Link className="nav-link" aria-current="page" to="/">
          <button type="button" class="btn btn-info mt-10">Ir al Inicio</button>
        </Link> 
      </div>
    <div/>
    </div>
  )
}

export default Notfound