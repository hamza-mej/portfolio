import React, { useRef } from 'react';
import { HiOutlineArrowSmRight, HiOutlineExternalLink } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import estoShop from "./../assets/estoShop.jpg";
import shop from "./../assets/shop.png";
import rba7 from "./../assets/rba7.png";
import alert from "./../assets/alert-app.jpg";
import booking from "./../assets/booking-app.webp";
import pdp from "./../assets/pdp-app.png";
import surfacePlanner from "./../assets/surface-planner.png";
import paragonProperties from "./../assets/paragon-properties.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";

const Portfolio = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const swiperRef = useRef(null);
    const isPaused = useRef(false);

    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
        }
        if (progressContent.current && !isPaused.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            isPaused.current = true;
            swiperRef.current.autoplay.pause();
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            isPaused.current = false;
            swiperRef.current.autoplay.resume();
        }
    };

    const portfolioItems = [
        {
            title: "Paragon Properties",
            description: "Implémentation d’une carte interactive Google Maps avec React.js dans le site Paragon Properties pour afficher les projets sur la carte, ajouter des informations détaillées et intégrer des filtres dynamiques.",
            image: paragonProperties,
            link: "https://drive.google.com/file/d/1IARwfU9aHkmvClTbDqpMInxKsFj2Z2Im/view?usp=drive_link",
            disabled: false,
            stack: {
                Frontend: "Next.js + React.js",
                Styling: "Tailwind CSS",
                API: "Google Maps API",
                Tools: ["GitHub", "Trello"]
            },
            tags: [
                "Next.js",
                "React.js",
                "Google Maps API",
                "Real Estate Tech",
                "Interactive Map"
            ]
        },
        {
            title: "SurfacePlanner",
            description: "Real estate listing enhancement tool with automated property quotes, professional photo editing, and dynamic forms. Full-stack Next.js with Supabase backend.",
            image: surfacePlanner,
            link: null,
            disabled: true,
            stack: {
                Frontend: "Next.js",
                Backend: "Next.js API Routes + Supabase",
                Database: "Supabase PostgreSQL",
                Styling: "Tailwind CSS",
                Features: ["Property quote calculator", "Image editing pipeline", "Form builder"]
            },
            tags: [
                "Next.js",
                "Supabase",
                "Real Estate Tech",
                "Image Processing",
                "Property Analytics"
            ]
        },
        {
            title: "Hotel Deal Tracker",
            description: "Scrapes Booking/Expedia for price drops, alerts users via mobile notifications when deals match their criteria. Built with Symfony (backend) + React Native/Expo (mobile).",
            image: booking,
            link: null,
            disabled: true,
            tags: [
                "Symfony",
                "React Native",
                "Redux",
                "Expo",
                "Web Scraping",
                "Price Alerts",
                "Booking/Expedia API",
                "Push Notifications"
            ]
        },
        {
            title: "PDP Signing Platform",
            description: "Role-based document signing system for enterprises with digital signatures, PDF/Word handling, and email notifications.",
            image: pdp,
            link: "https://drive.google.com/file/d/1h_upD9E_7TRi1gZfzfwA_2gUciW8jW6O/view",
            disabled: false,
            tags: [
                "Symfony",
                "Twig",
                "e-Signature",
                "Role-Based",
                "Workflow Automation"
            ]
        },
        {
            title: "Notification Scheduling Alerts",
            description: "Desktop app for scheduling alerts with customizable notifications (built with Electron).",
            image: alert,
            link: null,
            disabled: true,
            tags: ["Electron", "React", "Desktop", "Time-based Alerts"]
        },
        {
            title: "E-commerce Platform",
            description: "Built with Symfony and React JS, this full-featured e-commerce solution includes product management, cart functionality, and secure checkout.",
            image: shop,
            link: null,
            disabled: true,
            tags: ["Symfony", "React", "API Platform", "React Components", "Stripe", "From scratch"]
        }
    ];

    return (
        <div id="portfolio" className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 py-12 md:py-20 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header section - outside of swiper */}
                <div className="text-center mb-12 md:mb-16 opacity-0 animate-fade-in">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 md:mb-4">
                        Featured <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
                    </h1>
                    <p className="text-base md:text-lg font-medium text-gray-500 max-w-2xl mx-auto">
                        Here are some of my recent works with modern technologies
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        slidesPerView={1}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        effect={'fade'}
                        fadeEffect={{
                            crossFade: true
                        }}
                        modules={[Autoplay, Pagination, Navigation, EffectFade]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="portfolio-swiper"
                    >
                        {portfolioItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 py-4 md:py-8"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {/* Image Section */}
                                    <div className="order-2 lg:order-1">
                                        <div className="relative overflow-hidden rounded-xl shadow-2xl group">
                                            <img
                                                src={item.image}
                                                className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="order-2 lg:order-1 flex flex-col justify-center mt-32 lg:mt-0">
                                        <div className="text-center lg:text-left px-4 lg:px-0">
                                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
                                                {item.title}
                                            </h2>
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6 max-w-lg mx-auto lg:mx-0">
                                                {item.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-6 md:mb-8 justify-center lg:justify-start">
                                                {item.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="text-xs md:text-sm font-medium bg-violet-100 text-violet-700 px-3 py-1 rounded-full"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {item.disabled ? (
                                                <button
                                                    disabled
                                                    className="bg-gray-300 text-gray-500 py-3 px-6 rounded-lg font-medium flex items-center gap-2 cursor-not-allowed mx-auto lg:mx-0 group"
                                                >
                                                    Coming Soon
                                                    <HiOutlineArrowSmRight className="text-xl group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            ) : (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 mx-auto lg:mx-0 w-fit group shadow-lg hover:shadow-xl"
                                                >
                                                    View Project
                                                    <HiOutlineExternalLink className="text-xl group-hover:scale-110 transition-transform" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20" fill="none" stroke="#7c3aed" strokeWidth="2" />
                            </svg>
                            <span ref={progressContent} className="text-violet-700 font-medium"></span>
                        </div>

                        <div className="swiper-button-next !text-violet-700 !opacity-70 hover:!opacity-100 transition-opacity"></div>
                        <div className="swiper-button-prev !text-violet-700 !opacity-70 hover:!opacity-100 transition-opacity"></div>
                    </Swiper>
                </div>
            </div>

            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                }
                
                .portfolio-swiper {
                    padding-bottom: 60px;
                }
                
                .portfolio-swiper .swiper-slide {
                    opacity: 0;
                    transition: opacity 0.6s ease-in-out;
                }
                
                .portfolio-swiper .swiper-slide-active {
                    opacity: 1;
                }
                
                .swiper-pagination-bullet {
                    background: #c4b5fd !important;
                    opacity: 0.6 !important;
                    width: 10px !important;
                    height: 10px !important;
                    transition: all 0.3s ease !important;
                }
                
                .swiper-pagination-bullet-active {
                    background: #7c3aed !important;
                    opacity: 1 !important;
                    width: 30px !important;
                    border-radius: 8px !important;
                }
                
                .swiper-button-next:after, 
                .swiper-button-prev:after {
                    font-size: 1.8rem !important;
                    font-weight: bold !important;
                }
                
                .autoplay-progress {
                    position: absolute;
                    right: 24px;
                    bottom: 24px;
                    z-index: 10;
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    color: #7c3aed;
                }
                
                .autoplay-progress svg {
                    --progress: 0;
                    position: absolute;
                    left: 0;
                    top: 0;
                    z-index: 10;
                    width: 100%;
                    height: 100%;
                    stroke-width: 2;
                    stroke: #7c3aed;
                    fill: none;
                    stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
                    stroke-dasharray: 125.6;
                    transform: rotate(-90deg);
                }
                
                @media (max-width: 768px) {
                    .portfolio-swiper {
                        padding-bottom: 50px;
                    }
                    
                    .autoplay-progress {
                        right: 16px;
                        bottom: 16px;
                        width: 36px;
                        height: 36px;
                    }
                    
                    .autoplay-progress span {
                        font-size: 12px;
                    }
                    
                    .swiper-button-next:after, 
                    .swiper-button-prev:after {
                        font-size: 1.5rem !important;
                    }
                }
            `}</style>
        </div>
    );
}

export default Portfolio;