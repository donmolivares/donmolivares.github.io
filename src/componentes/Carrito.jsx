import React, { useState } from 'react'
import { pizzaCart as bd_pizzas} from '../assets/datos/pizzas'

 



function Carrito() {
 const [cart, setCart] = useState(bd_pizzas);
 const [count, setCount] = useState(0);


 let suma = () => {
    setCount(count + 1);
    total;

  };

  let resta = () => {
    setCount(count - 1);
    
  };

 const total = cart.reduce((acc, producto) => {
    return acc + producto.price*producto.count;
    
},0) 

const eliminarpizza = (tarea) => {
    const listaFiltrada = setCart.filter(el => el.id !==
    tarea.id)
    setCart(listaFiltrada)
    }

 return (
    <div className='listado_pizzas'>
    <h3>Detalle del pedido :</h3>
    
    {cart.map((pizza)=>(
      
      <div className='cada_elemento_lista'>
        <div>
            <img className="imagen_pizza_carrito" src={pizza.img} alt={pizza.name}/>
        </div>
        <div className='nodo'>
            <h4>{pizza.id}</h4>
        </div>
        <div className='nodo'>
            <h4>{pizza.name}</h4>
        </div>
        <div className='nodo'>
            <h4>{pizza.price}</h4>
        </div> 
        <div className='nodo_sumaoresta'>
            <button className='botonessuma' on onClick={suma}>+</button>
           
            <input type="number" className="cantidad" id={pizza.id} value={count}/>
            <button className='botonesresta'on onClick={resta}>-</button>
        </div>   
      </div>   

    ))}
    <h3>Total del pedido : {total}</h3>

    <button type="button" class="btn btn-secondary btn-sm" onClick={<p>{total}</p>}>Pagar</button>
    
    </div>
    
  )
}


export default Carrito