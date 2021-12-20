import React, { createContext, useState } from 'react'
import swal from 'sweetalert'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [counter, setCounter] = useState(0)


    const addingQuantity = (quantity) => {
        setCantidad(cantidad + quantity)
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            swal({
                title: 'Ya está en el carrito',
                text: 'Puedes agregar más de una vez',
                icon: 'warning',
                timer: 2000
            })
        } else {
            setCart([...cart, {cantidad: quantity,...item}])
        }
    }
    
    const totalProductsCart = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const removeFromCart = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    //remover un solo producto
    const removeOneProduct = (id) => {
        const newCart = cart.map(prod => {
            if (prod.id === id) {
                prod.cantidad = prod.cantidad - 1
            }
            return prod
        })
        setCart(newCart)
    }

    const emptyCart = () => {
        setCart([])
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    return ( 
    <CartContext.Provider value = {{ cart, counter, setCounter, addItem, addingQuantity, removeFromCart, emptyCart, totalPrice, totalProductsCart, removeOneProduct}} > 
        {children} 
    </CartContext.Provider>
    )
}

export default CartContextProvider