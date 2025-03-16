import Header from "./Header"
import Cardpizza from "./Cardpizzas"

const Home = () => {
    return(
    <>
        <Header/>
        <div className="muestra-pizzas">
        <Cardpizza
            name="Napolitana"
            price={5950}
            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
            img="https://www.hola.com/horizon/landscape/e9e1e82cb873-pepperoni-pizza-abob-t.jpg?im=Resize=(960),type=downsize"
        />

        <Cardpizza
        name="Española"
        price={6950}
        ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
        img="https://www.hola.com/horizon/landscape/496fd62df2c2-adobestock84558936.jpg?im=Resize=(960),type=downsize"
        />

        <Cardpizza
        name="Pepperoni"
        price={6950}
        ingredients={["mozzarella", "pepperoni", "orégano"]}
        img="https://www.hola.com/horizon/landscape/4a221b0d688d-adobestock824722188.jpg?im=Resize=(960),type=downsize"
        />
        </div>
    </>
    )
 }

 export default Home