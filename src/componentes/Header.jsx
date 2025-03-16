import { Image } from "react-bootstrap"
import '../assets/Style.css'

const Header = () => {
    return(
       <div className="container-header">
            <img className="imagen-header"src="src/assets/Header.jpg" />
            <h1 className="texto-encima">Pizzería Mamma Mía!</h1>
            <h3 className="centrado"  style={{color:"white" }}>Tenemos las mejores pizzas que podras encontrar!</h3>
        </div>
    )
 }

 export default Header