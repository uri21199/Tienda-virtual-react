import React from 'react'
import { Link } from 'react-router-dom'
import './FooterLinks.scss'
import useProducts from '../../hooks/useProducts'

const FooterLinks = () => {

    const {data} = useProducts("productos")

    const categories = data.map(product => product.category)

    const uniqueCategories = [...new Set(categories)]

    return (
        <>
            <div className="linkStore mt-5 d-flex flex-column">
                <h5 className="mb-4">Productos</h5>
                    {
                        uniqueCategories.map(category => (
                            <Link to={`/category/${category}`} className="mb-2" key={category}>{category}</Link>
                        ))
                    }
            </div>
            <div className="linkStore mt-5 d-flex flex-column">
                <h5 className="mb-4">Contacto</h5>
                <Link to="/contact" className="mb-2">Contactanos</Link>
                <Link to="/contact" className="mb-2">Reclamos</Link>
                <Link to="/contact" className="mb-2">Cambios y devoluciones</Link>
                <Link to="/contact" className="mb-2">Cambios en tienda</Link>
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
