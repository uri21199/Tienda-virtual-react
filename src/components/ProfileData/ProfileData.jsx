import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'
import { UserContext } from '../../context/UserContext'

const ProfileData = () => {

    const {dropOut, user} = useContext(UserContext)
    const history = useHistory()

    const handleClick = () => {
        history.push("/")
    }

    const baja = () => {
        dropOut()
        swal ({
            title: 'Cuenta eliminada',
            text: 'Si te arrepientes, puedes volver a registrarte',
            icon: 'success',
            timer: 2000
        })
        handleClick()
    }

    if (!user) {
        return (
            <div>
                <h3 className='my-3 mx-2'>Primero inicia sesión para acceder a está pagina</h3>
            </div>
        )
    } else {
        return (
            <div>
                <h1>perfil</h1>
                <button onClick={baja}>Eliminar cuenta</button>
            </div>
        )
    }

}

export default ProfileData
