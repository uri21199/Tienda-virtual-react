import React from 'react'
import emailjs from 'emailjs-com'
import './ContactForm.scss'
import swal from 'sweetalert'

const ContactForm = () => {

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_976qi77', 'template_83y6spx', e.target, 'user_0U6P75303pRyXOtIpAlWk')
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
        swal("¡Gracias!", "Su mensaje ha sido enviado correctamente, nos pondremos en contacto a la brevedad.", "success")
        e.target.reset()
    }

    return (
        <div>
            <h4 className='mx-3 mt-5'>Formulario</h4>
            <p className='mx-3 mt-3 mb-5'>Si necesitás contactarte con nosotros completá el formulario, nos pondremos en contacto lo antes posible.</p>
            {/* formulario de contacto */}
            <form onSubmit={sendEmail} className='py-3'>
                <div className="formContact">
                <div className='m-3'>
                    <label className='my-1'>Nombre y apellido</label>
                    <input className='formInput' type="text" name="user_name" id="user_name"/>
                </div>
                <div className='m-3'>
                    <label className='my-1'>Email</label>
                    <input className='formInput' type="email" name="user_email" id="user_email"/>
                </div>
                <div className='m-3'>
                    <label className='my-1'>Teléfono</label>
                    <input className='formInput' type="number" name="user_tel" id="user_tel"/>
                </div>
                <div className='m-3'>
                    <label className='my-1'>Localidad</label>
                    <input className='formInput' type="text" name="user_city" id="user_city"/>
                </div>
                <div className='m-3'>
                    <label className='my-1'>Asunto</label>
                    <input className='formInput' type="text" name="user_subject" id="user_subject"/>
                </div>
                </div>
                <div className='textareaInput'>
                    <label className='my-1'>Mensaje</label>
                    <textarea className='formInput' name="user_message" id="user_message" rows="5"></textarea>
                </div>
                <input type="submit" value="Enviar" className='inputSubmit'/>
            </form>
        </div>
    )
}

export default ContactForm
