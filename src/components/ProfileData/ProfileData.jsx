import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'
import { UserContext } from '../../context/UserContext'
import './ProfileData.scss'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { addDoc, collection } from 'firebase/firestore'
import db from '../../firebase/config'

const initialValues = {
    nombre: '',
    apellido: '',
    localidad: '',
    provincia: '',
    nacimiento: '',
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
        .min(2, 'El apellido debe tener al menos 2 caracteres')
        .max(30, 'El apellido debe tener como máximo 30 caracteres'),
        
    localidad: Yup.string()
        .required('La localidad es obligatoria')
        .min(2, 'La localidad debe tener al menos 2 caracteres')
        .max(40, 'La localidad debe tener como máximo 40 caracteres'),
        
    provincia: Yup.string()
        .required('La provincia es obligatoria')
        .min(2, 'La provincia debe tener al menos 2 caracteres')
        .max(40, 'La provincia debe tener como máximo 40 caracteres'),
        
    email: Yup.string()
        .email('El email no es válido')
        .required('El email es obligatorio'),
        
    tel: Yup.string()
        .required('El teléfono es obligatorio')
        .min(8, 'El teléfono debe tener al menos 8 caracteres')
        .max(16, 'El teléfono debe tener como máximo 16 caracteres'),
    })
    
    
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

    const handleSubmit = (values) => {
        
        const userData = {
            data: values,
        }

        const userRef = collection(db, "infoUsers")

        addDoc(userRef, userData)
        .then((res) => {
            swal ({
                title: 'Datos actualizados',
                text: 'Los datos se han actualizado correctamente',
                icon: 'success',
                timer: 2000,
            })
        })
        .catch(() => {
            swal ({
                title: 'Error',
                text: 'Ha ocurrido un error al actualizar los datos',
                icon: 'error',
                timer: 2000,
            })
        })
        .finally(() => {
            handleClick()
        })
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
                <h4 className='m-3 mt-4'>Completá tus datos para poder acceder a todos los beneficios</h4>
                <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
                    {(formik) =>(
                        <form onSubmit={formik.handleSubmit} className='formProfile'>
                            <div className='nombreInput'>
                                <input type="text" name='nombre' onChange={formik.handleChange} value={formik.values.nombre} placeholder='Nombre' className='form-control'/>
                                {formik.errors.nombre && formik.touched.nombre && <p className='text-danger fw-bold'>{formik.errors.nombre}</p>}
                            </div>
                            <div className='apellidoInput'>
                                <input type="text" name='apellido' onChange={formik.handleChange} value={formik.values.apellido} placeholder='Apellido' className='form-control'/>
                                {formik.errors.apellido && formik.touched.apellido && <p className='text-danger fw-bold'>{formik.errors.apellido}</p>}
                            </div>
                            <div className='localidadInput'>
                                <input type="text" name='localidad' onChange={formik.handleChange} value={formik.values.localidad} placeholder='Localidad' className='form-control'/>
                                {formik.errors.localidad && formik.touched.localidad && <p className='text-danger fw-bold'>{formik.errors.localidad}</p>}
                            </div>
                            <div className='provinciaInput'>
                                <input type="text" name='provincia' onChange={formik.handleChange} value={formik.values.provincia} placeholder='Provincia' className='form-control'/>
                                {formik.errors.provincia && formik.touched.provincia && <p className='text-danger fw-bold'>{formik.errors.provincia}</p>}
                            </div>
                            <div className='nacimientoInput'>
                                <input type="date" name='nacimiento' onChange={formik.handleChange} value={formik.values.nacimiento} placeholder='Nacimiento' className='form-control'/>
                                {formik.errors.nacimiento && formik.touched.nacimiento && <p className='text-danger fw-bold'>{formik.errors.nacimiento}</p>}
                            </div>
                            <div className='emailInput'>
                                <input type="text" name='email' onChange={formik.handleChange} value={formik.values.email} placeholder='Email' className='form-control'/>
                                {formik.errors.email && formik.touched.email && <p className='text-danger fw-bold'>{formik.errors.email}</p>}
                            </div>
                            <div className='telInput'>
                                <input type="number" name='tel' onChange={formik.handleChange} value={formik.values.tel} placeholder='Tel' className='form-control'/>
                                {formik.errors.tel && formik.touched.tel && <p className='text-danger fw-bold'>{formik.errors.tel}</p>}
                            </div>
                            <button type='submit' className='btnSave'>Guardar datos</button>
                            <button onClick={baja} className='deleteAccount text-white fw-bold'>Eliminar cuenta</button>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }

}

export default ProfileData
