import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import swal from 'sweetalert';
import { UserContext } from '../../context/UserContext'
import './SignUp.scss'
import emailjs from 'emailjs-com'

const SignUp = () => {

    const {signUp} = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
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
            swal ({
                title: 'Registro exitoso',
                text: 'Bienvenido a la tienda',
                icon: 'success',
                timer: 2000
            })
        } else {
            document.getElementById('error').innerHTML = 'Las contraseñas no coinciden'
        }
    }

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_976qi77', 'template_5rj5rzc', e.target, 'user_0U6P75303pRyXOtIpAlWk')
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });

        e.target.reset()
        handleSignup()
    }


    return (
        <div className='signUp'>
            <h3>Registrarse</h3>
            <form onSubmit={sendEmail}>
                <div>
                <label>Nombre</label>
                <input type="text" className="form-control" id="Nombre" name = "name" onChange={(e)=> setNombre(e.target.value)} />
                </div>
                <div>
                <label>Email</label>
                <input type="email" className="form-control" id="email" name = "email" onChange={(e)=> setEmail(e.target.value)} />
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
                <input type="submit" value="Registrarse" className="btnSignUp"/>
                <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
            </form>
        </div>
        
    )

}

export default SignUp
