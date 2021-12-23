import React from 'react'
import ItemProducto from '../ItemProducto/ItemProducto'
import './HomeProducts.scss'

const HomeProducts = ({products}) => {
    return (
        <>
            <h2 className='my-3 text-center'>POPULAR AHORA</h2>
            <div className="trendProducts">
            {
                products.map ((product) => (
                    <ItemProducto key={product.id} producto={product}/>
                    ))
            }
            </div>
        </>
    )
}

export default HomeProducts
