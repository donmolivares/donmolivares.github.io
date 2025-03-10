import { Image } from "react-bootstrap"
import '../assets/Style.css'

const Header = () => {
    return(
       <div className="container">
            <img src="/public/Header.jpg" />
            <h1>Pizzería Mamma Mía!</h1>
            <p>Tenemos las mejores pizzas que podras encontrar!</p>

        </div>
    )
 }

 export default Header