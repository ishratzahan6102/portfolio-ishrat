import React from 'react';
import { FaArrowAltCircleRight, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import logo1 from "../../assets/layout.png"
import logo2 from "../../assets/designer.png"
import logo3 from "../../assets/authentication.png"
import logo4 from "../../assets/error.png"
import './Services.css'


const Services = () => {
    return (
        <div className='text-center p-4 max-w-[1100px] mx-auto'>
            <h1 className='text-4xl text-black font-bold'>Services</h1>
            <p className='text-gray-500'>What I offer</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 lg:p-16  text-start'>
                <div className="card  shadow bg-base-100 ">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-8 rounded">
                                <img src={logo1} alt="Tailwind-CSS-Avatar-component" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-600">Web Developer</h2>
                        <div>

                            {/* The button to open modal */}
                            <label htmlFor="my-modal-1" className="text-gray-600">view more ➔</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-1" className="modal-toggle" />
                            <div className="modal ">
                                <div className="modal-box relative p-10 rounded">
                                    <label htmlFor="my-modal-1" className="btn btn-sm btn-outline btn-circle absolute right-10 top-10">✕</label>
                                    <div className='text-center  lg:mt-10'><h3 className="text-2xl text-gray-700 font-bold">Web Developer</h3>
                                        <p className="py-4 text-gray-600">In basic terms, I'm responsible for contributing to building and maintaining websites that are resilient and functional</p></div>

                                    <ul className='py-6 text-gray-600'>
                                        <li className='flex my-2'>1.  I develop Front-end code that determines what a client or user sees when they come to a website.</li>
                                        <li className='flex my-2'>2.  I develop Back-end code that supports the mechanics of how a website should function.</li>
                                        <li className='flex my-2'>3.  I'm more focused on the aesthetics of a website.</li>
                                        


                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="card   shadow bg-base-100 bg-base-100 ">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-8 rounded">
                                <img src={logo2} alt="Tailwind-CSS-Avatar-component" />
                            </div>
                        </div>
                        <h2 className="text-2xl  font-bold text-gray-600">UI/UX Designer</h2>
                        <div>

                            {/* The button to open modal */}
                            <label htmlFor="my-modal-2" className="text-gray-600">view more ➔</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
                            <div className="modal ">
                                <div className="modal-box relative p-10 rounded">
                                    <label htmlFor="my-modal-2" className="btn btn-sm btn-outline btn-circle absolute right-10 top-10">✕</label>
                                    <div className='text-center mt-10'><h3 className="text-2xl text-gray-700 font-bold">UI/UX Designer</h3>
                                        <p className="py-4 text-gray-600">In basic terms, I'm responsible for collecting and translating user insights into delightful experiences.</p></div>

                                    <ul className='py-6 text-gray-600'>
                                        <li className='flex my-2'>1. I create both functional and visually appealing features that address our customers' needs.  </li>
                                        <li className='flex my-2'>2. I use creativity and eye for design – along with technical knowledge – to develop great experiences.</li>
                                        


                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="card  shadow bg-base-100 bg-base-100 ">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-8 rounded">
                                <img src={logo3} alt="Tailwind-CSS-Avatar-component" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-600">Authentication</h2>
                        <div>

                            {/* The button to open modal */}
                            <label htmlFor="my-modal-3" className="text-gray-600">view more ➔</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                            <div className="modal ">
                                <div className="modal-box relative p-10 rounded">
                                    <label htmlFor="my-modal-3" className="btn btn-sm btn-outline btn-circle absolute right-10 top-10">✕</label>
                                    <div className='text-center mt-10'><h3 className="text-2xl text-gray-700 font-bold">Authentication</h3>
                                        <p className="py-4 text-gray-600">As a web developer, I authenticate the browser or application as a requirement.</p></div>

                                    <ul className='py-6 text-gray-600'>
                                        <li className='flex my-2'>1. I develop authentication system of a web site.</li>
                                        <li className='flex my-2'>2. I create an organized management system</li>
                                        <li className='flex my-2'>3. I adapt changes as per owner's need</li>
                                       


                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div  className="card  shadow bg-base-100  bg-base-100 ">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-8 rounded">
                                <img src={logo4} alt="Tailwind-CSS-Avatar-component" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-600">Error Solving</h2>
                        <div>

                            {/* The button to open modal */}
                            <label htmlFor="my-modal-4" className="text-gray-600">view more ➔</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                            <div className="modal ">
                                <div className="modal-box relative p-10 rounded">
                                    <label htmlFor="my-modal-4" className="btn btn-sm btn-outline btn-circle absolute right-10 top-10">✕</label>
                                    <div className='text-center mt-10'><h3 className="text-2xl text-gray-700 font-bold">Error Solving</h3>
                                        <p className="py-4 text-gray-600">My goal as a developer is to solve problems. It might be a new feature, fixing a bug or research new technologies and approaches.</p></div>

                                    <ul className='py-6 text-gray-600'>
                                        <li className='flex my-2'>1. I make sure to think about the user</li>
                                        <li className='flex my-2'>2. I try to understand what the code currently does</li>
                                        <li className='flex my-2'>3. I break the problem into chunks and fill in the gaps</li>
                                       


                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;