import { useState } from 'react'
import './App.css'
import Navbar from './componentes/Navbar'
import Home from './componentes/Home'
import Footer from './componentes/Footer'
import Register from './componentes/Register'
import Login from './componentes/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>   
     <Register/>
     
  {/* <Home/> */}         {/*Hito 1 - Muestra pizza */}
  {/* <Register/> */}     {/*Hito 2 - registro de usuarios*/}
  {/* <Login/>*/}         {/*Hito 2 - Login*/}
     <Footer/>
  {/* Tu comentario va aquí */}
      
    </>
  )
}

export default App
