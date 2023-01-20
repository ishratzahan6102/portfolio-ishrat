import React from 'react';
import { a, Link, useLoaderData } from 'react-router-dom';
import button from "../../assets/circled-play.png"
import './Details.css'
import { FaArrowAltCircleRight, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import facebook from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'
import git from '../../assets/github.png'
import link from '../../assets/linkedin.png'
import whatsapp from '../../assets/Phone.png'

const Details = () => {
    const data = useLoaderData()
    console.log(data)
    const { name, img1, img2, img3, img4, details, liveSite, clientSite, serverSite, intro, technology } = data
    const myFunction = () => {
        let fullImg = document.getElementById("fullImg");
        let smlImg1 = document.getElementById("smlImg1")
        fullImg.src = smlImg1.src
    }
    const myFunction2 = () => {
        let fullImg = document.getElementById("fullImg");
        let smlImg2 = document.getElementById("smlImg2")
        fullImg.src = smlImg2.src
    }
    const myFunction3 = () => {
        let fullImg = document.getElementById("fullImg");
        let smlImg3 = document.getElementById("smlImg3")
        fullImg.src = smlImg3.src
    }
    const myFunction4 = () => {
        let fullImg = document.getElementById("fullImg");
        let smlImg4 = document.getElementById("smlImg4")
        fullImg.src = smlImg4.src
    }
    return (
        <div className='details-bg pt-10 lg:p-0 p-2 pb-20 max-w-[1100px] mx-auto' >
            <div className='flex flex-col lg:flex-row'>
                <div className='w-full lg:w-1/2 p-4 details-img'>
                    <img id='fullImg' src={img1} className=" h-72 w-full " alt='' />
                    <div className='grid grid-cols-4 gap-1 mt-4'>
                        <img id='smlImg1' src={img2} className='h-20 w-44 ' onClick={() => myFunction()} alt='' />
                        <img id='smlImg2' src={img3} className='h-20 w-44 ' onClick={() => myFunction2()} alt='' />
                        <img id='smlImg3' src={img4} className='h-20 w-44 ' onClick={() => myFunction3()} alt='' />
                        <img id='smlImg4' src={img1} className='h-20 w-44 ' onClick={() => myFunction4()} alt='' />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 p-8 pt-2 details-card'>

                    <h1 className='text-5xl uppercase  font-bold'>{name}</h1>




                   <Link to='/contact'>
                   <button className="btn bg-red-600 border-none mt-6  ">Post a review</button></Link>

                    <div className='mt-8'>
                        <p className='font-bold text-justify text-gray-600'>ABOUT THIS PROJECT</p>
                        <p className=' text-justify text-gray-600'>{intro}</p>
                       

                        <div className='mt-8'>
                        <p className=' text-justify text-gray-600 font-bold'>FEATURES</p>
                        
                        <p className=' text-justify text-gray-600'>{details.p1}</p>
                        <p className=' text-justify text-gray-600'>{details.p2}</p>
                        <p className=' text-justify text-gray-600'>{details.p3}</p>
                        <p className=' text-justify text-gray-600'>{details.p4}</p>

                        </div>
                        <div className='mt-8'>
                        <p className=' text-justify text-gray-600 font-bold'>TECHNOLOGY</p>
                        {technology}
                        </div>
                    </div>



                    <div className='flex mt-8 flex-row'>

                        <a href={liveSite}>
                            <button className='btn btn-primary    '>
                                <span className='text-sm normal-case'>Live Site</span>
                            </button>
                        </a>
                        <a href={clientSite}>
                            <button className='btn btn-primary  mx-1'>
                                <span className='text-sm normal-case'>Client Site</span>
                            </button>
                        </a>
                        <a href={serverSite}>
                            <button className='btn btn-primary '>
                                <span className='text-sm normal-case'>Server Site</span>
                            </button>
                        </a>
                        
                    </div>

                    <div className='flex flex-row items-center mt-8'>
                        <p className='font-semibold'>Share:</p>
                        <div className='flex flex-row ml-2 gap-0'>
                            <div className="avatar">
                                <div className="w-10 ">
                                    <img src={facebook} alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-10 ">
                                    <img src={link} alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-10 ">
                                    <img src={insta} alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-10 ">
                                    <img src={whatsapp} alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                           
                            

                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Details;