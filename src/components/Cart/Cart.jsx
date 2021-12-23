import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Cart.scss'

const Cart = ({name, price, image, cantidad, id, percentage}) => {

const {removeFromCart, removeOneProduct} = useContext(CartContext)

return (
    <div className='d-flex container-fluid purchasedProduct'>
        <div className='purchasedName'>
            <h5>{name}</h5>
        </div>
        <div className='purchasedImg'>
            <img src={image} alt={name} />
        </div>
        <div className='purchasedPrice mx-3'>
            {
                percentage > 0
                ?
                <p>${(price - (price * percentage)).toFixed(3)} <small>({percentage * 100}% OFF APLICADO)</small></p>
                
                :<p>${price}</p>

            }
        </div>
        <div className='purchasedCount mx-3'>
            <p>Cantidad: {cantidad}</p>
        </div>
        {
            cantidad > 1 
            ? <>
                <button onClick={()=> removeFromCart(id)} className='btnDelete'>Eliminar</button>
                <button onClick={()=> removeOneProduct(id)} className='btnDelete2'>Eliminar un solo producto</button>
            </>
            : <button onClick={()=> removeFromCart(id)}>Eliminar</button>
        }
    </div>
    )
}

export default Cart