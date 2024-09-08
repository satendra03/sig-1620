import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


import { EffectCards } from 'swiper/modules';
import { Link } from 'react-router-dom';

function DepartmentInfoCard({ departments }) {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                loop={true}
                modules={[EffectCards]}
                className="w-[80%] h-[80vh]"
            >
                {departments.map((item, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                            <Link to={"/shreyansh"}>
                                <div className="box flex items-center justify-center">
                                    {/* <img className='shadow-lg rounded-md' src={item.departmentImageUrl} alt="name" /> */}
                                    <img className='shadow-lg rounded-md' src={item.src.landscape} alt="name" />
                                    <div className="text border h-full w-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   ">
                                        <div className="text flex flex-col items-center justify-center">
                                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                                {item.photographer}
                                            </h3>
                                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                                {departments.id}
                                            </p>
                                            {/* <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                            {item.departmentName}
                                        </h3> */}
                                            {/* <p className="leading-7 [&:not(:first-child)]:mt-6">
                                            {departments.description}
                                        </p> */}

                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default DepartmentInfoCard