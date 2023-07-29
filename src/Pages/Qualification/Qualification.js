import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import './Qualification.css'


const Qualification = () => {
    return (
        <div className='text-center py-6 max-w-[1100px] mx-auto '>
             <h1 className='text-4xl uppercase text-white font-bold'>Qualification</h1>
            <p className='text-white'>Education Level</p>

            <div className='text-start p-10 lg:p-20 grid-cols-1 grid md:grid-cols-2 gap-6 justify-center items-start'>
                
            <div className=' '>
                <h1 className='font-bold ml-8 '>Academic</h1>
               <div className='qualification-block ' >
               <div className='qualification-box shadow-lg bg-base-100'>
                    <h2 className="">BBA </h2>
                    <p>Bangladesh - Eden Women's College</p>
                    <div className=" justify-start flex
                    ">
                        <FaCalendar className='mt-1 mr-2'></FaCalendar>
                        <p>2017 - 2020</p>
                    </div>
                </div>
                <div className='qualification-box shadow-lg bg-base-100'>
                    <h2 className="">HSC </h2>
                    <p>Bangladesh - National Ideal College</p>
                    <div className=" justify-start flex">
                        <FaCalendar className='mt-1 mr-2'></FaCalendar>
                        <p>2014 - 2016</p>
                    </div>
                </div>
                <div className='qualification-box shadow-lg bg-base-100'>
                    <h2 className="">SSC </h2>
                    <p>Bangladesh - Dakkhin Banasree Model High School</p>
                    <div className=" justify-start flex">
                        <FaCalendar className='mt-1 mr-2'></FaCalendar>
                        <p>2013 - 2014</p>
                    </div>
                </div>
               </div>
            </div>

           
            <div className=' '>
                <h1 className='font-bold ml-8' >Non-Academic</h1>
                <div className='qualification-block'>
                <div className='qualification-box shadow-lg bg-base-100' >
                <h2 className="">Web Development </h2>
                            <p>Programming Hero -Bangladesh</p>
                            <div className=" justify-start flex">
                                <FaCalendar className='mt-1 mr-2'></FaCalendar>
                                <p>2022 - present</p>
                            </div>
                </div>
                <div className='qualification-box shadow-lg bg-base-100'>
                <h2 className="">Graphic Design </h2>
                        <p className='text-sm'>Department of Youth Development - Bangladesh</p>
                        <div className=" justify-start flex">
                            <FaCalendar className='mt-1 mr-2'></FaCalendar>
                            <p>2019</p>
                        </div>
                </div>
               
                </div>
            </div>
            </div>
        
    </div>
    );
};

export default Qualification;