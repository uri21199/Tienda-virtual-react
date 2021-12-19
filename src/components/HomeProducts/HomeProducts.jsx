import React from 'react'
import ItemProducto from '../ItemProducto/ItemProducto'

const HomeProducts = ({products}) => {
    return (
        <>
            <h2 className='my-3 text-center'>POPULAR AHORA</h2>
            <div className="d-flex justify-content-center">
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
