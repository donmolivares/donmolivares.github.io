import {createContext, useContext, useEffect, useState } from "react";


export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
      
      
  const [products, setProducts]    = useState([]);
  const [carrito,setCarrito]       = useState([]);
  const [totalcompra,setTotalcompra]       = useState();

  const buyProducts = (product) => {
    
    const productrepeat = carrito.find((item) => item.id === product.id)

    if(productrepeat){
        setCarrito(carrito.map((item) => (item.id === product.id ? {...product, quanty: productrepeat.quanty + 1}     : item     )))
    }else{
        setCarrito([...carrito, product])
    }
    
    
 }
    
    
    

  


  return (
    <GlobalContext.Provider
        value={{products, setProducts, carrito, setCarrito, buyProducts, totalcompra, setTotalcompra}}>
    { children }    
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;