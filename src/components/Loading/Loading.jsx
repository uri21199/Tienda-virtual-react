import React from 'react'
import loading from '../../assets/images/iconos/boca-jr.gif'
import './Loading.scss'

const Loading = () => {
    return (
        <div className="loading">
            <div>
                <img src={loading} alt="Cargando" />
            </div>
            <p>Cargando...</p>
        </div>
    )
}

export default Loading
