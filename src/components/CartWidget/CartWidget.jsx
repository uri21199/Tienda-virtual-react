import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import compra from '../../assets/images/iconos/compra.png';
import { CartContext } from '../../context/CartContext';
import "./CartWidget.scss"

export const CartWidget = () => {

    const {totalProductsCart, cart} = useContext(CartContext);


    return(
        <>
        <Link to="/cart"><img src={compra} alt="/" className="cart"/></Link>
        <span className='productsTotal' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">{totalProductsCart()}</span>
        <ul class="dropdown-menu dropdownCart" aria-labelledby="dropdownMenuButton1">
        {
            cart.map(product => (
                <li className='d-flex cartList mb-3'>
                    <h6>{product.name}</h6>
                    <img src={product.image} alt="" />
                    <p className='priceCart'>${product.price}</p>
                    <p className='quantityCart'>{product.cantidad}</p>
                </li>
            ))
        }
        <Link className='goCart' to="/cart">Ver Carrito</Link>
        </ul>
        </>
    )
}