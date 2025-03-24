import Cardpizza from "./Cardpizzas"
import { pizzas  as bd_pizzas} from "../assets/datos/pizzas"
import { useState } from "react"

const Home = () => {
    const[pizzas,setPizzas]= useState(bd_pizzas)

    return(
        <>
        <div className="muestra-pizzas">
        {pizzas.map((pizza)=>(
            <Cardpizza
            key ={pizza.id}{...pizza}
            />
        ))}
        </div>   
        </>
        )
 }

 export default Home