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
            <h1 className='text-4xl text-white font-bold uppercase '>Contact <span className='text-warning'>Me</span></h1>
            <p className='text-white'>Send a message</p>
            <Toaster />
            <div className='flex flex-col text-start justify-center pt-6 gap-6 items-center md:flex-row w-full'>
                <div>
                    <h1 className='text-center font-bold text-black'>Talk to me</h1>
                    <div className='grid grid-cols-1 gap-1 text-center  mt-2'>

                        <div className="card bg-white text-black w-60 contact-card rounded-xl blue-shadow-box">
                        <div className="p-4">

                            <div className="avatar">
                            <div className="w-10">
                            <img src={logo2} />
                            </div>
                            </div>
                            <p className=' font-bold text-black'>Email</p>
                            <p className=''>ishratzahan6102@gmail.com</p>
                            
                            
                        </div>
                        </div>
                        <div className="card bg-white text-black w-60 contact-card rounded-xl   blue-shadow-box">
                        <div className="p-4">
                        <div className="avatar">
                            <div className="w-10">
                            <img src={logo3} />
                            </div>
                            </div>
                            <p className=' font-bold text-black'>Whatsapp</p>
                            <p>+880 1886580409</p>
                            
                            
                        </div>
                        </div>
                        <div className="card bg-white text-black w-60 contact-card rounded-xl   blue-shadow-box">
                        <div className="p-4">
                        <div className="avatar">
                            <div className="w-10">
                            <img src={instagram} />
                            </div>
                            </div>
                            <p className='font-bold text-black'>Instagram</p>
                            <p>/ishrat_z6</p>
                            
                            
                        </div>
                        </div>
                    </div>   
                </div>

               <div >
                    
                    <form ref={form} onSubmit={sendEmail} className="card w-96  text-white contact-me-form mx-auto lg:mx-0 mt-0 pt-0  bg-base-100">
                    <div className="card-body">
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold ">What's your name?</span>
                            </label>
                            <input type="text" name="user_name" required placeholder="your name" className="input input-bordered input-primary rounded text-base" />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-bold ">Email</span>
                            </label>
                            <input type="email" name="user_email" required placeholder="your email" className="input input-bordered input-primary rounded text-base" />
                        </div>
                        
                        <div className="form-control"> 
                        <label className="label">
                                <span className="label-text font-bold ">Message</span>
                            </label>
                            <textarea name="message" required placeholder='How may I help you?' className='textarea textarea-bordered textarea-primary h-40 rounded text-base' ></textarea>
                        </div>
                        <div className="form-control mt-2 lg:items-start items-center">
                            <input type="submit" value="Send" className="btn btn-primary btn-wide btn-sm uppercase rounded-md " />
                        </div>
                    </div>
                    </form>

               </div>
            </div>

        </div>


    );
};

export default Contact;