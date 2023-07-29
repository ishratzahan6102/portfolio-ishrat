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

        <div className='max-w-[1100px] text-start text-primary mx-auto  md:py-36 about-section'>
            <div className='mx-auto inner-about-section'>
                <p className='text-4xl font-bold uppercase'>About Me</p>

                <div className=' text-gray-600'>
                    <div className=''>
                        <div className='about-me my-4'>
                        <p className='text-base px-6 md:px-0 my-4 text-justify md:text-justify'>I'm a Web Developer and a tech enthusiast. I help businesses to grow their online presence by having modern and up-to-date websites. My work relates to the development of user interface and user experience using React JS, Javascript, Html, Css etc. Feel free to contact me for any queries. </p>


                        </div>
                        <div className=' my-4 '>
                            <div className='grid grid-cols-2  md:grid-cols-3 gap-2 w-full mx-auto text-start  '>

                                <div className='about-card'>

                                    
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary uppercase mb-2"><Link to="/contact">EMAIL</Link></button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default About;