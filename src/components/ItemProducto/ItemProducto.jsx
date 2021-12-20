import React from 'react'
import { useHistory } from 'react-router-dom'
import './itemProducto.scss'


const ItemProducto = ({producto}) => {

    const history = useHistory()

    const handleClick = () => {
        history.push(`/detail/${producto.id}`)
    }

    if (producto.stock > 0){
        return (
            <div className="product" onClick={handleClick}>
            <img src={producto.image} alt={producto.name} style={producto.discount ? {opacity: '.9'} : {}}/>
            
            {
                producto.discount ? <><p className="prodDiscount">{producto.percentage * 100}%</p>
                <p className="prodPrice discount">{producto.price}</p>
                <p className='priceDiscounted'>{(producto.price - (producto.price * producto.percentage)).toFixed(3)}</p>
                </> : <p className="prodPrice">{producto.price}</p>
            }
            <p className="prodTitle">{producto.name}</p>
            <p className="prodCategory">{(producto.category).toUpperCase()}</p>
            </div>
        )
    }
}

export default ItemProducto
