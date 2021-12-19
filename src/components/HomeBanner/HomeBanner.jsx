import React from 'react'
import { Link } from 'react-router-dom'
import copa from '../../assets/images/iconos/copa.jpg'
import './HomeBanner.scss'

const HomeBanner = () => {
    return (
        <>
            <div className="pt-3 homeBanner">
                <div className="homePresentation">
                    <h1>BOCA JUNIORS</h1>
                    <h5>Conseguí toda la indumentaria de tu club</h5>
                    <Link to="/products">COMPRAR AHORA</Link>
                </div>
                <div className="homePhoto">
                    <img src={copa} alt="" />
                </div>
            </div>
        </>
    )
}

export default HomeBanner
