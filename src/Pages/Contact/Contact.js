import React, { useRef } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import logo1 from '../../assets/location.png'
import logo2 from '../../assets/mail.png'
import logo3 from '../../assets/Phone.png'
import instagram from '../../assets/instagram.png'
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9rprvs7', 'template_eh2h4rf', form.current, 'F4GPWvTylpgXgISCX')
            .then((result) => {
                console.log(result.text);
           
                toast("Thanks for your message!")
                e.target.reset()

            }, (error) => {
                console.log(error.text);
            });
    };






    return (
        <div className='my-10  contact-me-page text-center  max-w-[1100px] mx-auto  '>
            <h1 className='text-4xl font-bold'>Contact Me</h1>
            <p className='text-gray-500'>Send a message</p>
            <Toaster />
            <div className='flex flex-col text-start justify-center pt-6 gap-6  text-gray-500 items-center md:flex-row   w-full'>
                <div>
                    <h1 className='text-center font-bold '>Talk to me</h1>
                    <div className='grid grid-cols-1 gap-3 text-center  mt-2'>

                        <div className="card w-60 contact-card rounded-xl   shadow">
                        <div className="p-4">

                            <div className="avatar">
                            <div className="w-10">
                            <img src={logo2} />
                            </div>
                            </div>
                            <p className='text-gray-600 font-bold'>Email</p>
                            <p className='text-sm'>ishratzahan6102@gmail.com</p>
                            <p>Write me ➔</p>
                            
                        </div>
                        </div>
                        <div className="card w-60 contact-card rounded-xl   shadow">
                        <div className="p-4">
                        <div className="avatar">
                            <div className="w-10">
                            <img src={logo3} />
                            </div>
                            </div>
                            <p className='text-gray-600 font-bold'>Whatsapp</p>
                            <p>+880 1886 580 409</p>
                            <p>Write me ➔</p>
                            
                        </div>
                        </div>
                        <div className="card w-60 contact-card rounded-xl   shadow">
                        <div className="p-4">
                        <div className="avatar">
                            <div className="w-10">
                            <img src={instagram} />
                            </div>
                            </div>
                            <p className='text-gray-600 font-bold'>Instagram</p>
                            <p>/ishrat_z6</p>
                            <p>Write me ➔</p>
                            
                        </div>
                        </div>
                    </div>   
                </div>

               <div>
                    
                    <form ref={form} onSubmit={sendEmail} className="card w-96 text-gray-500 rounded-none contact-me-form mx-auto lg:mx-0 mt-0 pt-0  bg-base-100">
                    <div className="card-body">
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold ">What is your name?</span>
                            </label>
                            <input type="text" name="user_name" required placeholder="Insert your name" className="input input-bordered rounded-lg text-base" />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-bold ">Email</span>
                            </label>
                            <input type="email" name="user_email" required placeholder="Insert your email" className="input input-bordered rounded-lg text-base" />
                        </div>
                        
                        <div className="form-control">
                        <label className="label">
                                <span className="label-text font-bold ">Message</span>
                            </label>
                            <textarea name="message" required placeholder='How can I help you?' className='textarea textarea-bordered h-40 rounded-lg text-base' ></textarea>
                        </div>
                        <div className="form-control mt-2 lg:items-start items-center">
                            <input type="submit" value="Send" className="btn btn-primary btn-sm normal-case rounded-md w-1/3" />
                        </div>
                    </div>
                    </form>

               </div>
            </div>

        </div>


    );
};

export default Contact;