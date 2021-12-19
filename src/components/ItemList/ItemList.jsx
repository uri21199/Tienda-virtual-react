import React from 'react';
import ItemProducto from '../ItemProducto/ItemProducto';
import './itemList.scss'


const ItemList = ({listproducto}) => {
    return (
        <>
            <div className="ulList">
                {listproducto.map(producto => 
                    <ItemProducto producto={producto}/>
                )}
            </div>
        </>
    )
}

export default ItemList
