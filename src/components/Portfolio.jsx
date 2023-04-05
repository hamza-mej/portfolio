import React, {useRef} from 'react';
import estoShop from "./../assets/estoShop.jpg";
import shop from "./../assets/shop.png";
import rba7 from "./../assets/rba7.png";
import {HiOutlineArrowSmRight} from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const Portfolio = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 500)}s`;
    };

    return (
        <div id="portfolio" className="w-full h-screen bg-zinc-50 flex flex-col justify-center">
            <div className="max-w-xs md:max-w-4xl mx-auto mb-20">
                <div className="flex flex-col items-center py-10">
                    <h1 className="text-4xl font-bold">Portfolio</h1>
                    <span className="text-l font-medium text-gray-500 mt-3 ">Most recent work</span>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 py-8 md:py-20 max-w-2xl mx-auto">
                            <div className="shadow-2xl h-48 w-84 rounded-lg">
                                <img src={shop} className="object-cover h-48 w-96 bg-gray-300 rounded-lg"  alt={'slide'}/>
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="px-4">
                                    <h2 className="font-bold text-lg">Website SHOP</h2>
                                    <p className="font-medium text-gray-400 text-[15px] pt-4">Realization of an e-commerce website for the sale of
                                        produced through the Symfony/React Js framework.</p>

                                    <button  disabled className="disabled bg-violet-300 py-3 px-3 mt-4 flex inline-flex text-slate-50
                                                font-medium rounded-lg items-center gap-1 " Z>
                                        Demo
                                        <HiOutlineArrowSmRight className="text-2xl text-slate-50 transition-all duration-500"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 py-8 md:py-20 max-w-2xl  mx-auto ">
                            <div className="shadow-2xl h-48 w-84 rounded-lg">
                                <img src={rba7} className="object-cover h-48 w-96 bg-gray-300 rounded-lg"  alt={'slide'}/>
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="px-4">
                                    <h2 className="font-bold text-lg">Website rba7</h2>
                                    <p className="font-medium text-gray-400 text-[15px] pt-4">Realization and deployment of a game site responsive with | html - css - javascript.</p>

                                    <a href="https://hamza-mej.github.io/rba7-wordle/" target="_blank" className="bg-violet-700 py-3 px-3 mt-4 flex inline-flex text-slate-50
                                                font-medium rounded-lg items-center gap-1 hover:bg-violet-800">
                                        Demo
                                        <HiOutlineArrowSmRight className="text-2xl text-slate-50 transition-all duration-500"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 py-8 md:py-20 max-w-2xl  mx-auto ">
                            <div className="shadow-2xl h-48 w-84 rounded-lg">
                                <img src={estoShop} className="object-cover h-48 w-96 bg-gray-300 rounded-lg"  alt={'slide'}/>
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="px-4">
                                    <h2 className="font-bold text-lg">Website ESTO Shop</h2>
                                    <p className="font-medium text-gray-400 text-[15px] pt-4">Website adaptable to all devices, with ui components and animated interactions.</p>

                                    <button  disabled className="bg-violet-300 py-3 px-3 mt-4 flex inline-flex text-slate-50
                                                font-medium rounded-lg items-center gap-1">
                                        Demo
                                        <HiOutlineArrowSmRight className="text-2xl text-slate-50 transition-all duration-500"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"/>
                        </svg>
                        <span ref={progressContent}/>
                    </div>
                </Swiper>
            </div>
        </div>
    );
}

export default Portfolio;