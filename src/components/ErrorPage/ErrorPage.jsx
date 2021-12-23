import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorPage.scss'

const ErrorPage = () => {
    return (
        <div>
            <h1 className='m-3'>Error</h1>
            <p className='mx-3'>Esta página no se encuentra disponible.</p>
            <p className='mx-3'>Pero no te preocupes, te invitamos a volver a nuestro catálogo de <Link to="/products">Productos</Link></p>
        </div>
    )
}

export default ErrorPage
