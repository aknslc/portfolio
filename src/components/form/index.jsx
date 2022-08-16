import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../stytles/form/form.css'


export default function ContactUs() {
    const form = useRef();
    const notify = ()=>{
        toast.success("Success");
    }
    const sendEmail = (e) => {
        e.preventDefault();
        notify();
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
                <input type="text" required name="user_name" placeholder='Name' />
            </div>
            <div>
                <input type="email" required name="user_email" placeholder='Email' />
            </div>
            <div>
                <textarea name="message" required placeholder='Message' />
            </div>
            <div>
                <button type="submit" className='submitBtn'>
                    Send
                </button>
                <ToastContainer
                    position="bottom-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </form>
    );
}