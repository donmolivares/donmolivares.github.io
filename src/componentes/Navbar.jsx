const Navbar = () => {
    const total = 25000;
    const token = false;
    return (
        <div className="container-barra">
            <div className="barra-izquierda">
                <h4>Pizzería Mamma Mía !</h4>
                <button class="button">🍕 Home</button>
                <button class="button">🔐Login</button>
                <button class="button">🔐Register</button>
            </div>
            <div className="barra-derecho">
                <h4>🛒 Total Ventas $</h4>
                <input className="total" type="text" name="" id="" value="25.000"/>
            </div>

        </div>
        
    
    );
    };

 export default Navbar