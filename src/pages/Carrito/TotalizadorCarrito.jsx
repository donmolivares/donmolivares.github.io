import {useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

const TotalizadorCarrito = () => {
    const {carrito, totalcompra,setTotalcompra} = useContext(GlobalContext)

    const total = carrito.reduce((acc, el) => acc + el.price * el.quanty, 0 )
    setTotalcompra(total)
  return (
    <div className="cartTotal">
        <h3>Total a pagar: {total}</h3>
    </div>
  )
}

export default TotalizadorCarrito