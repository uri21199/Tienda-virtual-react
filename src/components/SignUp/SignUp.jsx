import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { UserContext } from '../../context/UserContext'
import './SignUp.scss'

const SignUp = () => {

    const {signUp} = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const history = useHistory()

    const handleClick = () => {
        history.push("/")
    }

    const handleSignup = () => {
        if (password === password2) {
            signUp(email, password)
            setTimeout(() => {
                handleClick()
            }, 1000)
        } else {
            document.getElementById('error').innerHTML = 'Las contraseñas no coinciden'
        }
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
                    <input type="password" className="form-control" id="password" name = "password" onChange={(e)=> setPassword(e.target.value) }/>
                </div>
                <div>
                    <label>Repetir contraseña</label>
                    <input type="password" className="form-control" id="password" name = "password2" onChange={(e)=> setPassword2(e.target.value)}/>
                    <p id="error"></p>
                </div>
                <button type="button" className="btnSignUp" onClick={handleSignup}>Registrarse</button>
            </div>
            <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
        </div>
        
    )

}

export default SignUp
