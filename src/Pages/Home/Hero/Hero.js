import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/LinkedIn Profile.jpg'
import './Hero.css'
import { TypeAnimation } from 'react-type-animation';
import linkedin from '../../../assets/linkedin.png'
import facebook from '../../../assets/facebook.png'
import github from '../../../assets/github.png'



const Hero = () => {


    return (
        <div className='w-full mx-auto pt-10 pb-36 md:py-32 relative text-white'>

            <div className='flex flex-col md:flex-row max-w-[900px] mx-auto '>
                <div className='w-full md:w-1/2 px-6 mx-auto text-center md:text-start'>
                    <div className='mx-auto '>
                        <h1 className='text-4xl md:text-5xl font-bold  uppercase'>Hi, I'm <span className='text-warning'>Israt</span></h1>

                        <p className='text- md:text-xl font-semibold my-2'>

                            <TypeAnimation
                                // Same String at the start will only be typed once, initially
                                sequence={[
                                    'A Front-End Developer',
                                    1000,
                                    'A Mern Stack Developer ',
                                    1000,

                                ]}
                                speed={50} // Custom Speed from 1-99 - Default Speed: 40
                                style={{ fontSize: '1em', }}
                                wrapper="span" // Animation will be rendered as a <span>
                                repeat={Infinity} // Repeat this Animation Sequence infinitely
                            />
                        </p>

                      
                        <div className=''>
                          

                            <div className='flex flex-row justify-center md:justify-start'>
                                <a href="https://www.linkedin.com/in/ishrat-zahan6/">
                                    <div className="avatar ">
                                        <div className="w-8 mr-1 transform hover:scale-105  duration-500">
                                            <img src={linkedin} alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                    </div>
                                </a>
                                <a href="https://www.facebook.com/ishratZahan6">
                                    <div className="avatar">
                                        <div className="w-8 mr-1 transform hover:scale-105  duration-500">
                                            <img src={facebook} alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                    </div>
                                </a>
                                <a href="https://github.com/ishratzahan6102">
                                    <div className="avatar">
                                        <div className="w-8 mr-1 transform hover:scale-105  duration-500">
                                            <img src={github} alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                    </div>
                                </a>

                              
                            </div>
                            <button className="btn btn-primary uppercase mb-2 mr-1"><a href="https://drive.google.com/file/d/1LiTnQMEEMJOpAVAnl9aUEEWVYFOE8mo2/view?usp=sharing" target='_blank'>My Resume </a></button>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 mx-auto py-8  md:mb-12 img-section mt-10 md:mt-[10px]'>
                    <div className=''>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default Hero;