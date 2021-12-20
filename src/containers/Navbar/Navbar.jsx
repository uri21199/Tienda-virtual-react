import React, { useContext } from 'react'
import icono from '../../assets/images/iconos/icono.png'
import './navbar.scss'
import { CartWidget } from '../../components/CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { UserContext } from '../../context/UserContext'
import person from '../../assets/images/iconos/usuario.png'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = () => {

    const {cart} = useContext(CartContext)
    const {logged, logout} = useContext(UserContext)

    const history = useHistory()

    const handleClick = () => {
        history.push("/")
    }

    const cerrarSesion = () => {
        logout()
        handleClick()
    }

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
            <div className="SignUp">
                {
                    cart.length > 0 && <CartWidget/>
                }
                {
            logged 
            ? 
            <>
                <span id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={person} className='userLogo' alt="" />
                </span>
                <ul class="dropdown-menu profileDropdown" aria-labelledby="dropdownMenuButton3">
                    <li><p>Perfil</p></li>
                    <li><Link to="/orders">Mis ordenes</Link></li>
                    <li onClick={cerrarSesion}>Cerrar sesión</li>
                </ul>
            </>
            :
            <Link to="/login">Iniciar sesión</Link>
            }
            </div>
        </div>
    </header>
</>
)
}

export default Navbar