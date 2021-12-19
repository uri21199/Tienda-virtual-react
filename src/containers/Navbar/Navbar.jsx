import React, { useContext } from 'react'
import icono from '../../assets/images/iconos/icono.png'
import './navbar.scss'
import { CartWidget } from '../../components/CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const Navbar = () => {

    const {cart} = useContext(CartContext)

return (
<>
    <header>
        <div className="headerTop">
            <p>Envíos a todo el pais</p>
            <p>6 y 12 cuotas sin interés</p>
            <p>Primer cambio gratis</p>
        </div>
        <div className="headerBajo">
            <div className="logo">
                <a href="/">
                    <img src={icono} alt="Icono de Tienda Marvel" />
                </a>
            </div>
            <nav className="menu">
                <ul className="menuUl">
                    <li className="items"><Link to="/">Inicio</Link></li>
                    <li className="items"><Link to="/products">Productos</Link></li>
                    <li className="items"><Link to="/contact">Contacto</Link></li>
                </ul>
            </nav>
            <div className="login">
                {
                    cart.length > 0 && <CartWidget/>
                }
                <Link to="/login">Ingresar</Link>
            </div>
        </div>
    </header>
</>
)
}

export default Navbar