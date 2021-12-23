import { collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import React, {useContext, useState} from 'react'
import { useHistory, Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import db from '../../firebase/config'
import ItemCount from '../ItemCount/ItemCount'
import ItemDetailDescription from '../ItemDetailDescription/ItemDetailDescription'
import ItemDetailSimilar from '../ItemDetailSimilar/ItemDetailSimilar'
import Loading from '../Loading/Loading'
import './ItemDetail.scss'

const ItemDetail = ({products}) => {
    
    const [quantity, setQuantity] = useState(0)
    const [comprar, setComprar] = useState(false)
    const [size, setSize] = useState('')
    const history = useHistory()
    const {addItem, addingQuantity, setCounter, setTalla, talla} = useContext(CartContext)

    const changeSize = (e) => {
        setSize(e.target.textContent)
        changeStyleSize(e)
        cambiar(e)
        setCounter(0)
    }

    const addSize = (e) => {
        const productsRef = collection (db, "productos")
        const docRef = doc(productsRef, products.id)
        getDoc(docRef)
            .then(doc => {
                setTalla(size)
                updateDoc(docRef, {
                    talla: talla
                })
            })
    }
    
    if (size !== '') {
        addSize()
    }

    const cambiar = (e) => {
        let cambio = e.target.textContent
        products.stock = products.sizeStock[cambio]
    }
    
    const changeStyleSize = (e) => {
        if (document.querySelector('.activeList')) {
            document.querySelector('.activeList').classList.remove('activeList')
        }
        e.target.classList.add('activeList')
        changeStock()
    }
    
    const changeStock = () => {
        if (size !== ''){
            let sizeStock = products.sizeStock
            products.stock = sizeStock[size]
        }
    }

    const onAdd = (qty) => {
        setQuantity(qty)
        setComprar(true)
        setCounter(0)
    }

    const handlePurchase = () => {
        addItem(products, quantity)
        addingQuantity(quantity)
        setCounter(0)
        history.push('/cart')
    }

    const handlePurchaseBack = () =>{
        addItem(products, quantity)
        addingQuantity(quantity)
    }

    const prodDiscounted = () => {
        if (products.discount) {
            let prodFinished = (products.price - (products.price * products.percentage)).toFixed(3)
            return prodFinished
        }
    }

    if (products.sizes === undefined || ItemDetailDescription === null) {
        return <Loading/>
    } else {
        return (
            <>
                <div key={products.id} className="detail mt-4">
                    <div className="imgDetail">
                        <img src={products.image} alt="" />
                    </div>
                    <div className="prodDetail">
                        <h3><i>{products.name}</i></h3>
                        <div className='priceDetailContainer'>
                        {
                            products.discount ?
                            <>
                            <p className="priceDetailOld">${products.price}</p>
                                {products.discount && <p className='mx-2 priceDetailNew'>${prodDiscounted()}</p>}
                            </>
                            :
                            <p className='priceDetailNew'>${products.price}</p>
                        }
                        </div>
                        {products.discount ? <p className="discountDetail">Aplica a descuentos del <span>{products.percentage * 100}% OFF</span> </p>: <p className="discountDetail">No aplica a descuentos</p>}
                        {
                            products.discount ? <p className='cuotas'>6 cuotas sin interés de ${((prodDiscounted() / 6) * 1000).toFixed(0)} </p> : <p className='cuotas'>6 cuotas sin interés de ${(products.price / 6).toFixed(3)} </p>
                        }
                        <h6 className="mt-3">Talles disponibles</h6>
                        <ul className="sizeDetail mt-3">
                            {products.sizes.map(size => (
                                <li key={size} onClick={changeSize} value={size}>{size}</li>
                            ))}
                        </ul>
                        {
                            comprar && quantity > 0
                                ? <div className='btnDiv mt-5'>
                                <button className="mx-3 btnCarrito" onClick={handlePurchase}>Ir al Carrito</button>
                                <Link to="/products" className='mx-3 btnBackStore' onClick={handlePurchaseBack} size={size}>¡Quiero comprar más cosas!</Link>
                            </div>
                            : <ItemCount stock={products.stock} onAdd={(qty) => onAdd(qty)} quantity={quantity} size={size} message="Agregar al carrito"/>
                        }
                    </div>
                </div>
                <div className="infoExtra">
                    <ItemDetailDescription products = {products}/>
                    <ItemDetailSimilar products = {products}/>
                </div>
            </>
        )
    }
    
}
export default ItemDetail
