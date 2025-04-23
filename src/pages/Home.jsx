import React from "react";
import Cardpizzas from "../componentes/Cardpizzas";
import { useState,useEffect } from "react"
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";


const Home = () => {
    const {products, setProducts} = useContext(GlobalContext)
    const url = 'http://localhost:5000/api/pizzas'; 

    const consultarInformacion = async() => {
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        setProducts(data); 

 
  }; 
     
  useEffect(() =>{
    consultarInformacion();
  }, []); 
    
    return(
        <>
        <div className="muestra-pizzas">
        {products.map((item,index)=>(
            <Cardpizzas
            product = {item}
                        />
        ))}
        </div>   
        </>
        )
 }

 export default Home