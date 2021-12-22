import React from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {

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
    }

    return (
        <div>
            <form onSubmit={sendEmail}>
                <label>Nombre</label>
                <input type="text" name='name'/>
                <label>Email</label>
                <input type="email" name='email'/>
                <label>Mensaje</label>
                <textarea name='message' rows="4"/>
                <input type="submit" value="Enviar"/>
            </form>

        </div>
    )
}

export default ContactForm
