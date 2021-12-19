import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import './CartView.scss'

const CartView = () => {

    const {cart, emptyCart, totalPrice} = useContext(CartContext)

    if (cart.length === 0){
        return         <>
        <h3 className='mt-3'>Carrito vacío</h3>
        <hr />
        <Link to="/products" className='btnBack'>Volver</Link>
        </>

    }

    return (
            <div>
                <h3 className='my-3'>Carrito de Compras</h3>
                <hr />
                <div className="container-fluid">
                    {
                        cart.map(item => <Cart key={item.id} {...item}/>)
                    }
                </div>
                <div className="container mt-5">

                <p>Valor total de compra: $ <span className="font-weight-bold h3">{parseFloat(totalPrice().toFixed(3))}</span></p>
                <div className='d-flex'>
                    <p>A pagar en:</p>
                    <select name="" id="" className='mx-2 mb-3'>
                        <option value="">Elegir cuotas</option>
                        <option value="">3 cuotas de ${(Number(totalPrice()) / 3).toFixed(3)}</option>
                        <option value="">6 cuotas de ${(Number(totalPrice()) / 6).toFixed(3)}</option>
                        <option value="">12 cuotas de ${(Number(totalPrice()) / 12).toFixed(3)}</option>
                    </select>
                </div>
                </div>
                <hr/>
                <div className="container-fluid align-items-center d-flex">
                    <button className="btnEmptyCart mx-4" onClick={emptyCart}>Vaciar carrito</button>
                    <Link to="/checkout" className="btnFinish">Terminar mi compra</Link>
                </div>
            </div>
    )
}

export default CartView
