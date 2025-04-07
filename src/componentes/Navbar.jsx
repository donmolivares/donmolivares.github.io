import '../assets/Style.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    const totales = 25000;
    const token   = false;
    return (
        <div className="container-barra">
            <div className="barra-izquierda">
                <h5>Pizzería Mamma Mía !</h5>
                
        

                <Link className="nav-link" aria-current="page" to="/">
                <button type="button" class="btn btn-secondary">🍕 Home</button>
                
              </Link>
              <Link className="nav-link" aria-current="page" to="/Login">
              <button type="button" class="btn btn-secondary">🔐 Login</button>
              
              </Link>
              <Link className="nav-link" aria-current="page" to="/Register">
              <button type="button" class="btn btn-secondary pl-5">🔐 Register</button>
            
              </Link>
                

                
                
                
            </div>
            <div className="barra-derecho  text-info">
                
                <Link className="nav-link" aria-current="page" to="/Carrito">
                  
                   <button type="button" class="btn btn-secondary">🛒 Carrito</button>
              </Link>
              <h5> Total Ventas $</h5>
                <input className="total" type="text" name="" id="total-1" value={totales}/>
            </div>

        </div>
        
    
    );
    };

 export default Navbar