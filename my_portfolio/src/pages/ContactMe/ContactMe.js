import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css'

function ContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jkmmnpu', 'template_2i9dxr1', form.current, 'CvAX4DPY9C3oGIEQX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="form">
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};


export default ContactMe