import { Image } from "react-bootstrap"
import '../assets/Style.css'


const Cardpizza = (props) => {
    return(
       <div className="muestra-pizza2">
            <img className="imagen" src="./public/pizza.jpg" alt="" />
            <h2>{props.name}</h2>
            <p>Ingredientes</p>
            <p>🍕{props.ingredients}</p>
            <h3>Precio $ : {props.price}</h3>
            <div className="flex-row">
                 <button class="button">Ver mas 👀</button>
                <button class="button">Añadir 🛒</button>

            </div>
        </div>
        
    )
 }

 export default Cardpizza

