import Cardpizzas from "./Cardpizzas"
import { useState,useEffect } from "react"

const Home = () => {
    const[info, setInfo]    = useState([]);
    const url = 'http://localhost:5000/api/pizzas';          
     useEffect(() => {
            consultarInformacion(url);
            console.log(info)
     }, []);
    
    const consultarInformacion = (url) => {
       fetch(url)
       .then(response=>response.json())
       .then(data => setInfo(data)); 
    };

    return(
        <>
        <div className="muestra-pizzas">
        {info.map((item,index)=>(
            <Cardpizzas
            name = {item.name}
            desc = {item.desc}
            ingredients= {item.ingredients}
            price= {item.price}
            img= {item.img}
            key ={index}
            />
        ))}
        </div>   
        </>
        )
 }

 export default Home