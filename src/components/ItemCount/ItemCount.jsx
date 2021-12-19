import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import BtnAddCart from '../BtnAddCart/BtnAddCart'
import "./ItemCount.scss"

const ItemCount = ({stock, message,onAdd, size}) => {

    
    const {counter, setCounter} = useContext(CartContext)

    const aumentar = () => {
        setCounter(counter + 1)
    }

    const disminuir = () => {
        setCounter(counter - 1)
    }

    return (
        <>
        <div className="divBtn mt-5 d-flex">
            <button className="btnStock" onClick={aumentar}
            disabled={counter === 5 || counter === stock || size === ''}
            >
                +
            </button>
            <p>{counter}</p>
            <button className="btnStock" onClick={disminuir}
            disabled={counter === 0}
            >
                -
            </button>
            <p>{counter === stock ? "Stock agotado." : `Stock máximo disponible: ${stock}`}</p>
        </div>
            {
                size === '' && <p className='m-3'>Elige un talle para comenzar la compra.</p>
            }
            {
                counter === 5 && <p className="text-danger fw-bold m-3 ">La compra no puede superar las 5 unidades.</p>
            }
            <BtnAddCart callShow={() => onAdd(counter)}>
                {message}
            </BtnAddCart>
        </>
    )
}

export default ItemCount