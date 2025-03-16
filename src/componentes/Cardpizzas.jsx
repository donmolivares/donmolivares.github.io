import { Image } from "react-bootstrap"
import '../assets/Style.css'


const Cardpizzas = ({name, ingredients, price,img}) => {
    return(
       <div className="card-pizza">
            <img className="imagen-pizza" src={img} alt={name}/>
            <div className="seccion-nombre-pizza">
            <h2 className="nombre-pizza">{name}</h2>
            </div>
                <div className="session-ingredientes">
                <h3 style={{color:"#a49d9c"}}>Ingredientes</h3>
                <p>🍕{ingredients[1]}, {ingredients[2]}, {ingredients[3]}</p>
            </div>

            <h3 style={{color:"black"}}>Precio $ : {price}</h3>
            
            <div className="flex-row">
                 <button class="btn btn-light">Ver mas 👀</button>
                <button class="btn btn-secondary">Añadir 🛒</button>

            </div>
        </div>
        
    )
 }

 export default Cardpizzas

