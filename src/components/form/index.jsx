import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './style.css'

export default function ContactUs() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9sug0pn', 'template_769qsfb', form.current, 'bDvSyRCmsmudJU-qy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <input type="text" name="user_name" placeholder='Name' />
            </div>
            <div>
                <input type="email" name="user_email" placeholder='Email' />
            </div>
            <div>
                <textarea name="message" placeholder='Message' />
            </div>
            <div>
                <button type="submit" className='submitBtn'>
                    Send
                </button>
            </div>
        </form>
    );
}