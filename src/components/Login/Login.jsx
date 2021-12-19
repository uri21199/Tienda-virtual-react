import { Formik } from 'formik'
import React from 'react'
import './Login.scss'

const Login = () => {
    return (
        <div>
            <h5>Login</h5>

            <Formik>
                <form className='loginForm'>
                    <div>
                        <label htmlFor="exampleInputEmail1">Correo electrónico</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div>
                        <label htmlFor="exampleInputPassword1">Contraseña</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary my-3">Ingresar</button>
                </form>

            </Formik>
        </div>
    )
}

export default Login
