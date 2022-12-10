import React from 'react';

import 'react-toastify/dist/ReactToastify.css';

import '../../stytles/form/form.css'


export default function ContactUs() {
    
    return (
        <form>

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
            </div>
        </form>
    );
}