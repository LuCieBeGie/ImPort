import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './ContactMe.css'

function ContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jkmmnpu', 'template_2i9dxr1', form.current, 'CvAX4DPY9C3oGIEQX')
            .then((result) => {
                Swal.fire({
                    icon: "success",
                    title: "Message sent",
                    showConfirmButton: false,
                    timer: 1500
                });;
                form.current.reset();
            }, (error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please check all the fields and try again!",
                });

            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="form">

            <h2 className='contactHeader'>Leave me a message</h2>
            <label>
                <input type="name" name='name' placeholder="Enter your name" required />
                <span className='inputName'>Name</span>
            </label>
            <label>
                <input type="email" name='email' placeholder="Enter your email" required />
                <span className='inputName'>E-mail</span>
            </label>
            <label>
                <textarea type="text" placeholder="Your message here"></textarea>
            </label>
            <button type="submit">Send</button>

        </form>
    );
};


export default ContactMe