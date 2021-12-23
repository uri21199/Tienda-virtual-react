import React, { createContext, useState } from 'react'
import swal from 'sweetalert'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [counter, setCounter] = useState(0)
    const [talla, setTalla] = useState('')

    const addingQuantity = (quantity) => {
        setCantidad(cantidad + quantity)
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            //agregar cantidad
            const newCart = cart.map(cartItem => {
                if (cartItem.id === item.id) {
                    cartItem.cantidad += quantity
                }
                return cartItem
            })
            setCart(newCart)
            
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
        //si algun producto tiene descuento, se le resta el descuento al precio. Si no tiene descuento, se le suma el precio
        return cart.reduce((acc, prod) => {
            if (prod.percentage > 0) {
                return acc + (prod.price - (prod.price * prod.percentage)) * prod.cantidad
            } else {
                return acc + prod.price * prod.cantidad
            }
        }
        , 0)
        
        
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    return ( 
    <CartContext.Provider value = {{ cart, counter, setCounter, addItem, addingQuantity, removeFromCart, emptyCart, totalPrice, totalProductsCart, removeOneProduct, setTalla, talla}} > 
        {children} 
    </CartContext.Provider>
    )
}

export default CartContextProvider