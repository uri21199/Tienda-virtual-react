import React from 'react'
import { Link } from 'react-router-dom'
import './FooterBanner.scss'

const FooterBanner = () => {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center subscribe">
                <div className="subscribeFirst mt-3">
                    <p>Suscribete y enterate de nuestras novedades obteniendo hasta descuentos del 30%</p>
                </div>
                <div className="subscribeSecond">
                    <Link to="/signup" className="py-2 px-3">Suscribirse a nuestra tienda</Link>
                </div>
            </div>
        </>
    )
}

export default FooterBanner
