import React from 'react'
import './ItemDetailDescription.scss'

const ItemDetailDescription = ({products}) => {

    if (products.description === undefined) {
        return null
    } else {
        return (
            <>
            <h4 className="detailDescription list-unstyled d-flex">
                Descripción
            </h4>
            <ul className="descriptions d-flex">
                {products.description.map (item=> {
                    return (
                        <li key={item} className="mt-3 mx-5">
                            {item}
                        </li>
                    )
                })}
            </ul>
 
            </>
        )
            }
}

export default ItemDetailDescription
