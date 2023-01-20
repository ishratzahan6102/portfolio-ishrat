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
        <div className='text-center testimonial-heading pt-10 pb-20 max-w-[1100px] text-gray-600  p-10 mx-auto'>
            <h1 className='text-4xl   text-gray-800 font-bold'>Testimonials</h1>

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
                            <div className="card w-96 bg-primary text-primary-content">
                                <div className="card-body">
                                   
                                    <div className="avatar mx-auto">
                                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={img1} />
                                    </div>
                                    </div>
                                    <p className="text-start px-4 px-4 my-4 ">"Well done. Keep going! Something good will happen."</p>
                                    <div className="text-start px-4">
                                        <p>Admin</p>
                                        <p>Programming Academy</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </SwiperSlide>
                    <SwiperSlide> 
                        <div>
                        <div className="card w-96 bg-primary text-primary-content">
                            <div className="card-body">
                            <div className="avatar mx-auto">
                                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={img2} />
                                    </div>
                                    </div>
                                    <p className="text-start px-4 px-4 my-4">"Amazing work. It's very easy to navigate, Thank you."</p>
                                    <div  className=" text-start px-4">
                                        <p>Shakhawat Hossain</p>
                                        <p>Senior Software Developer, Fiver</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>

<div>
    <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
           
            <div className="avatar mx-auto">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img1} />
            </div>
            </div>
            <p className="text-start px-4 px-4 my-4">"Well done. Keep going! Something good will happen."</p>
            <div className=" text-start px-4">
            <p>Admin</p>
            <p>Programming Academy</p>
            </div>
        </div>
    </div>
</div>


</SwiperSlide>
<SwiperSlide> 
<div>
<div className="card w-96 bg-primary text-primary-content">
    <div className="card-body">
    <div className="avatar mx-auto">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img2} />
            </div>
            </div>
            <p className="text-start px-4 px-4 my-4">"Amazing work. It's very easy to navigate, Thank you."</p>
            <div  className=" text-start px-4">
            <p>Shakhawat Hossain</p>
                                        <p>Senior Software Developer, Fiver</p>
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


