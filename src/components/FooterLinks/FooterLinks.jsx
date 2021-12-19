import React from 'react'
import { Link } from 'react-router-dom'
import './FooterLinks.scss'

const FooterLinks = () => {
    return (
        <>
            <div className="linkStore mt-5 d-flex flex-column">
                <h5 className="mb-4">Productos</h5>
                <Link to="/category/camisetas" className="mb-2">Camisetas</Link>
                <Link to="/category/abrigos" className="mb-2">Abrigos</Link>
                <Link to="/category/pantalon" className="mb-2">Pantalón</Link>
                <Link to="/category/short" className="mb-2">Short</Link>
            </div>
            <div className="linkStore mt-5 d-flex flex-column">
                <h5 className="mb-4">Contacto</h5>
                <Link to="/contact" className="mb-2">Contactanos</Link>
                <Link to="/contact" className="mb-2">Reclamos</Link>
                <Link to="/contact" className="mb-2">Sugerencias</Link>
                <Link to="/contact" className="mb-2">Dudas frecuentes</Link>
                <Link to="/contact" className="mb-2">Cambios y devoluciones</Link>
                <Link to="/contact" className="mb-2">Cambios en tienda</Link>
                <Link to="/contact" className="mb-2">Guía de talles</Link>
            </div>
            <div className="linkStore mt-5 d-flex flex-column">
                <h5 className="mb-4">Redes sociales</h5>
                <Link to="/contact" className="mb-2">Instagram</Link>
                <Link to="/contact" className="mb-2">Facebook</Link>
                <Link to="/contact" className="mb-2">Twitter</Link>
            </div>
        </>
    )
}

export default FooterLinks
