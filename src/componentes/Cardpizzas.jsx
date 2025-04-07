import '../assets/Style.css'
import Pizza from '../pages/Pizza'
import { Link } from "react-router-dom";

const Cardpizzas = ({name, desc, ingredients, price,img}) => {

    return(
       <div className="card-pizza">
            <img className="imagen-pizza" src={img} alt={name}/>
            <div className="seccion-nombre-pizza">
            <h2 className="nombre-pizza">{name}</h2>
            <div className="session-ingredientes">
                <p style={{color:"#a49d9c"}}>{desc}</p>
            </div>
            </div>
                <div className="session-ingredientes">
                <h3 style={{color:"#a49d9c"}}>Ingredientes</h3>
                {ingredients.map((ingrediente)=>(
                  <ul>
                    <li key={ingrediente}>{ingrediente}</li>
                  </ul>  
                )
                )}

            <p>- </p>
            </div>

            <h3 style={{color:"black"}}>Precio $ : {price}</h3>
            
            <div className="flex-row">
            <Link className="nav-link" aria-current="page" to="/Pizza">
                  
              <button class="btn btn-light">Ver mas 👀</button>
             </Link>
                 
                <button class="btn btn-secondary">Añadir 🛒</button>

            </div>
        </div>
        
    )
 }

 export default Cardpizzas