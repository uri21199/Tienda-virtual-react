import React, { useContext } from 'react'
import icono from '../../assets/images/iconos/icono.png'
import './navbar.scss'
import { CartWidget } from '../../components/CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { UserContext } from '../../context/UserContext'
import person from '../../assets/images/iconos/usuario.png'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useModal } from '../../hooks/useModal'
import Modal from '../../components/Modal/Modal'
import swal from 'sweetalert'

const Navbar = () => {

    const {cart} = useContext(CartContext)
    const {logged, logout} = useContext(UserContext)
    const [isOpenModal1, OpenModal1, CloseModal1] = useModal(false)
    const [isOpenModal2, OpenModal2, CloseModal2] = useModal(false)
    const [isOpenModal3, OpenModal3, CloseModal3] = useModal(false)


    const history = useHistory()

    const handleClick = () => {
        history.push("/")
    }

    const cerrarSesion = () => {
        logout()
        swal ({
            title: 'Sesión cerrada',
            text: 'Vuelve pronto',
            icon: 'success',
            timer: 2000
        })
        handleClick()
    }

return (
<>
    <header>
        <div className="headerTop">
            <p onClick={OpenModal1}>Envíos a todo el pais</p>
            <p onClick={OpenModal2}>6 y 12 cuotas sin interés</p>
            <p onClick={OpenModal3}>Primer cambio gratis</p>
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
                    <li><Link to="profile">Perfil</Link></li>
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



            <Modal isOpen={isOpenModal1} closeModal={CloseModal1}>
                <h3>Envíos a todo el país</h3>
                <p>Hacemos envíos a todos los sectores del país, el monto del mismo varía según la cantidad de productos y la distancia.</p>
            </Modal>
            <Modal isOpen={isOpenModal2} closeModal={CloseModal2}>
                <h3 className='fw-bold'>Pago en línea</h3>
                <p>Podés pagar con tu tarjeta Visa, MasterCard o American Express, al hacerlo, ¡podrás pagar hasta en 6 y 12 cuotas sin interés! También es posible efectuar tu pago con Pago Fácil y Rapipago.</p>
            </Modal>
            <Modal isOpen={isOpenModal3} closeModal={CloseModal3}>
                <h3>Primer cambio sin costo</h3>
                <p>¿Tuviste problemas con la prenda? ¿Problemas con el talle? No te preocupes, te ofrecemos un primer cambio totalmente gratis dirigiéndote a la sucursal más cercana.</p>
            </Modal>
</>
)
}

export default Navbar