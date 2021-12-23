import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'
import { UserContext } from '../../context/UserContext'
import './ProfileData.scss'

const ProfileData = () => {

    const {dropOut, user} = useContext(UserContext)
    const history = useHistory()

    const handleClick = () => {
        history.push("/")
    }

    const baja = () => {
        let confirmar = window.confirm("¿Estás seguro de que quieres darte de baja?")
        if (confirmar) {
            dropOut()
            swal ({
                title: 'Cuenta eliminada',
                text: 'Si te arrepientes, puedes volver a registrarte',
                icon: 'success',
                timer: 2000,
            })
            handleClick()
        } else {
            swal ({
                title: 'Baja cancelada',
                text: 'No se ha eliminado tu cuenta',
                icon: 'error',
                timer: 2000,
            })
        }
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
                <h1 className='m-3'>Perfil</h1>
                <button onClick={baja} className='deleteAccount text-white fw-bold'>Eliminar cuenta</button>
            </div>
        )
    }

}

export default ProfileData
