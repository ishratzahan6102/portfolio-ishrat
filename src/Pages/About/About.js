import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/IMG_20220919_010117_047.jpg'
import logo1 from '../../assets/experience.png'
import logo2 from '../../assets/completed.png'
import logo3 from '../../assets/support.png'
import './About.css'
import work from '../../Comp 1.json';

import Lottie from "lottie-react";


const About = () => {



    return (

        <div className='max-w-[1100px] text-start mx-auto  md:py-36 about-section'>
            <div className='mx-auto text-black inner-about-section'>
                <h1 className='text-4xl font-bold'>About Me</h1>
                
                <div className=' text-gray-600'>
                <div className=''>
                    <div className='about-me my-4'>
                        <p className='my-1'> Name: <span className=''>Israt Zahan</span></p>
                        <p className='my-1'>Qualification: <span className=''>BBA Graduate</span></p>
                        <p> Whatsapp: <span className=''>+880 1886 580 409 </span></p>
                        <p className='my-1'>Hobby: <span className=''>Learning a new feature.</span></p>
                        <p className='my-1'> Email: <span className=''>ishratzahan6102@gmail.com</span></p>
                        
                      
                    </div>
                    <div className=' my-4 '>
                        <div className='grid grid-cols-2  md:grid-cols-3 gap-2 w-full mx-auto text-start  '>
                            <div className=" about-card ">
                                
                                <h2 className=" font-semibold  md:text-black ">Experience</h2>
                                <p className=' '>1+ year</p>
                            </div>
                            
                            <div className=' about-card'>
                                
                                <h2 className=" font-semibold  md:text-black">Support</h2>
                                <p className=' '>Online 24/7</p>
                            </div>
                        </div>
                    </div>
                    <button className="btn md:btn-primary bg-white text-black  normal-case mb-2"><Link to="/contact">Contact Me</Link></button>
                </div>
                </div>
            </div>

        </div>

    );
};

export default About;