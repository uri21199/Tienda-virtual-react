import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, Timestamp } from "firebase/firestore"
import db from '../../firebase/config'
import { Link } from 'react-router-dom'
import './Checkout.scss'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { UserContext } from '../../context/UserContext'

const initialValues = {
    nombre: '',
    apellido: '',
    email: '',
    tel: '',
}

const schema = Yup.object().shape({

    nombre: Yup.string()
        .required('El nombre es obligatorio')
        .min(2, 'El nombre debe tener al menos 2 caracteres')
        .max(30, 'El nombre debe tener como máximo 30 caracteres'),
    apellido: Yup.string()
        .required('El apellido es obligatorio')
        .min(2, 'El nombre debe tener al menos 2 caracteres')
        .max(30, 'El nombre debe tener como máximo 30 caracteres'),
    email: Yup.string()
        .email('El email no es válido')
        .required('El email es obligatorio'),
        
    tel: Yup.string()
        .required('El teléfono es obligatorio')
        .min(8, 'El teléfono debe tener al menos 8 caracteres')
        .max(16, 'El teléfono debe tener como máximo 16 caracteres'),

})

const Checkout = () => {

    const {cart, totalPrice, emptyCart, setCounter} = useContext(CartContext)
    const {user} = useContext(UserContext)
    const [orderId, setOrderId] = useState(null)

    const handleSubmit = (values) => {

        const order = {
            buyer: values,
            items: cart,
            total: totalPrice(),
            date: Timestamp.fromDate(new Date()),
            user: user.email
        }
        console.log(user)
        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, order)
            .then((res) => {
                setOrderId(res.id)
                emptyCart()
                setCounter(0)
            })
        }


    return (
        <div>
            {
                orderId ? 
                <>
                    <h3 className='my-3'>¡Tu compra se ha registrado exitosamente!</h3>
                    <hr/>
                    <p>Tu orden ha sido registrada con el id: {orderId}</p>
                    <Link to="/">Volver al inicio</Link>
                </>

                :
                <>
                    <h3 className='mt-2 mx-3'>Checkout</h3>
                    <hr/>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={handleSubmit}
                    >
                        {(formik) => (
                            <form onSubmit={formik.handleSubmit} className='formCheckout'>
                                <input
                                    name="nombre"
                                    onChange={formik.handleChange}
                                    value={formik.values.nombre}
                                    className='form-control my-2'
                                    type="text"
                                    placeholder="Nombre"
                                />
                                {formik.errors.nombre && formik.touched.nombre && <p className='text-danger fw-bold'>{formik.errors.nombre}</p>}
                                <input
                                    name="apellido"
                                    onChange={formik.handleChange}
                                    value={formik.values.apellido}
                                    className='form-control my-2'
                                    type="text"
                                    placeholder="Apellido"
                                />
                                {formik.errors.apellido && formik.touched.apellido && <p className='text-danger fw-bold'>{formik.errors.apellido}</p>}
                                <input
                                    name='email'
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    className='form-control my-2'
                                    type="email"
                                    placeholder="Email"
                                />
                                {formik.errors.email && formik.touched.email && <p className='text-danger fw-bold'>{formik.errors.email}</p>}

                                <input
                                    name='tel'
                                    onChange={formik.handleChange}
                                    value={formik.values.tel}
                                    className='form-control my-2'
                                    type="tel"
                                    placeholder="Teléfono"
                                />
                                {formik.errors.tel && formik.touched.tel && <p className='text-danger fw-bold'>{formik.errors.tel}</p>}

                                <button type='submit' className='btnSend'>Enviar</button>
                            </form>
                        )}
                    </Formik>
                </>
            }
        </div>
    )
}

export default Checkout
