import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.css"
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import img1 from '../../assets/John-C.jpg'
import img2 from '../../assets/Mike-Rigdon.jpg'

const Testimonial = () => {

    return (
        <div className='text-center testimonial-heading pt-10 pb-20 max-w-[1200px]  mx-auto'>
            <h1 className='text-4xl text-white  uppercase font-bold'>Testimonials</h1>

            <div className="my-20">
                <Swiper

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                        <div>
                            <div className="card rounded-lg bg-white text-black ">
                                <div className="card-body">

                                    <div className="avatar mx-auto">
                                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={img1} />
                                        </div>
                                    </div>
                                    <p className="text-start px-4  my-4 ">"Well done. Keep going! Something good will happen."</p>
                                    <div className="text-start px-4">
                                        <p className="font-bold text-xl">John Rudy M.C.</p>
                                        <p className="text-gray-600">Instructor</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="card rounded-lg bg-white text-black border-success">
                                <div className="card-body">
                                    <div className="avatar mx-auto">
                                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={img2} />
                                        </div>
                                    </div>
                                    <p className="text-start px-4 px-4 my-4">"Amazing work. It's very easy to navigate, Thank you."</p>
                                    <div className=" text-start px-4">
                                        <p className="font-bold text-xl">Shakhawat Hossain</p>
                                        <p className="text-gray-600">Senior Software Developer, Fiver</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div>
                            <div className="card  rounded-lg   bg-white text-black border-success">
                                <div className="card-body">

                                    <div className="avatar mx-auto">
                                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={img1} />
                                        </div>
                                    </div>
                                    <p className="text-start px-4 px-4 my-4">"Well done. Keep going! Something good will happen."</p>
                                    <div className=" text-start px-4">
                                        <p className="font-bold text-xl">John Rudy M.C.</p>
                                        <p className="text-gray-600">Instructor</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="card  rounded-lg  bg-white text-black border-success">
                                <div className="card-body">
                                    <div className="avatar mx-auto">
                                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={img2} />
                                        </div>
                                    </div>
                                    <p className="text-start px-4 px-4 my-4">"Amazing work. It's very easy to navigate, Thank you."</p>
                                    <div className=" text-start px-4">
                                        <p className="font-bold text-xl">Shakhawat Hossain</p>
                                        <p className="text-gray-600">Senior Software Developer, Fiver</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>


        </div>
    );
};

export default Testimonial;


