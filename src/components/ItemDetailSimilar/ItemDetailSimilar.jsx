import React from 'react'
import useProducts from '../../hooks/useProducts'
import ItemProducto from '../ItemProducto/ItemProducto'

const ItemDetailSimilar = ({products}) => {

    const propiedad = "category"
    const propiedad2 = products.category

    const {data} = useProducts("productos", propiedad, propiedad2)

    return (
        <>
            <h2 className='mt-5 mb-3 mx-5'>Productos Similares</h2>
            <div className="d-flex mx-5">
            {
                data.map (product => (
                    product.id !== products.id && <ItemProducto key={product.id} producto={product}/>
                ))
            }
            </div>
        </>
    )
}

export default ItemDetailSimilar
