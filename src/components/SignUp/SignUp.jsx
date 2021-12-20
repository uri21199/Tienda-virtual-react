import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { UserContext } from '../../context/UserContext'
import './SignUp.scss'

const SignUp = () => {

    const {signUp} = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory()

    const handleClick = () => {
        history.push("/")
    }

    const handleSignup = () => {
        signUp(email, password)
        setTimeout(() => {
            handleClick()
        }, 1000)
    }

    return (
        <div className='signUp'>
            <h3>Registrarse</h3>
            <div>
                <div>
                    <label>Email</label>
                    <input type="text" className="form-control" id="email" name = "email" onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="text" className="form-control" id="password" name = "password" onChange={(e)=> setPassword(e.target.value) }/>
                </div>
                <button type="button" className="btnSignUp" onClick={handleSignup}>Registrarse</button>
            </div>
            <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
        </div>
        
    )

}

export default SignUp
