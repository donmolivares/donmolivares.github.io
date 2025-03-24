import '../assets/Style.css'

const Navbar = () => {
    const totales = 25000;
    const token   = false;
    return (
        <div className="container-barra">
            <div className="barra-izquierda">
                <h5>Pizzería Mamma Mía !</h5>
                <button class="button">🍕 Home</button>
                <button class="button">🔐 Login</button>
                <button class="button">🔐 Register</button>
            </div>
            <div className="barra-derecho  text-info">
                <h5>🛒 Total Ventas $</h5>
                <input className="total" type="text" name="" id="total-1" value={totales}/>
            </div>

        </div>
        
    
    );
    };

 export default Navbar