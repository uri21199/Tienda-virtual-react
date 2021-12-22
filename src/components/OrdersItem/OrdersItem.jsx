import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import useProducts from '../../hooks/useProducts'
import './OrdersItem.scss'

const OrdersItem = () => {

    const {user, userEmail} = useContext(UserContext)

    const {data} = useProducts("orders", "user", userEmail)

    if (data.length === 0) {
        return (
            <h3 className='my-3 mx-2'>No hay órdenes de compras</h3>
        )
    } else {
        return (
            <div>
                <h2 className='my-3 mx-2'>Órdenes de compras</h2>
                {
                    data.map (product => (
                        <>
                        <div key={product.id} className='order mt-3 d-flex justify-content-between'>
                            <div className='orderInfo'>
                                <h5><span>Nombre del cliente:</span> {`${product.buyer.nombre} ${product.buyer.apellido}`}</h5>
                                <p><span>Email de contacto:</span> {product.buyer.email}</p>
                                <p><span>Monto total pagado:</span> ${product.total}</p>
                                <p><span>Fecha de emisión de la orden:</span> {product.date.toDate().toLocaleDateString()}</p>
                            </div>
                            <div className='orderProduct'>
                                <h5>Productos de la compra:</h5>
                                <div className='orderList'>
                                {
                                    product.items.map (item => (
                                        <div>
                                        <p className='mr-3'>{item.name}</p>
                                        <p className='mx-3'>${item.price}</p>
                                        <p className='mx-3'>{item.cantidad}</p>
                                        <img src={item.image} alt="" className='mx-3'/>
                                        </div>))
                                }
                                </div>
                            </div>
                        </div>
                        </>
            ))
                }
            </div>
        )
    }

}

export default OrdersItem
