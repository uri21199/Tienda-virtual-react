import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { UserContext } from '../../context/UserContext';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const {login} = useContext(UserContext);

    const history = useHistory()

    const handleClick = () => {
        history.push("/")
    }

    const iniciar = () => {
        login(email, password)
        setTimeout(() => {
            handleClick()
        }, 1000)
    }

    return (
        <div className='signUp'>
            <h3>Inicia sesión</h3>
            <div>
                <div>
                    <label>Email</label>
                    <input type="text" className="form-control" id="email" name = "email" onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" className="form-control" id="password" name = "password" onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <button type="button" className="btnSignUp" onClick={iniciar}>Iniciar sesión</button>
            </div>
            <p>¿No tienes cuenta? <Link to="/signup">Registrate</Link></p>
        </div>
    )
}

export default Login
