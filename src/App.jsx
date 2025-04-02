import { useState } from 'react'
import './App.css'
import Header from './componentes/Header' 
import Navbar from './componentes/Navbar'
import Home from './componentes/Home'
import Footer from './componentes/Footer'
import Pizza from './componentes/Pizza'
import Carrito from './componentes/Carrito'
import Register from './componentes/Register'
import Login from './componentes/Login'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/*Revisando*/}
    <Navbar/>   
    <Header/>   
 
 
 
    <Home/>             {/*Hito 4 - Muestra pizza consulta pizzas.js*/}
    {/*      <Pizza/>        {/*Hito 4 - Muestra pizza consulta pizzas.js*/}






    {/* <Carrito/>  {/*Hito 3 - Muestra Carrito pizzas.js Cart*/}
     
    {/* <Home/> */}         {/*Hito 1 - Muestra pizza */}
    {/* <Register/> */}     {/*Hito 2 - registro de usuarios*/}
    {/* <Login/>*/}         {/*Hito 2 - Login*/}
    <Footer/>
    </>
  )
}

export default App
