import './App.css';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Qualification from "./components/Qualification";
import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
     <> {/* Adjust vertical spacing */}
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;




// import React, {useState} from 'react';
// import {BsBraces} from "react-icons/bs";
// import {FaChevronDown} from "react-icons/fa";
// import {CiServer} from "react-icons/ci";
// import {TbTools} from "react-icons/tb";

// const Skills = () => {
//     const [activeDiv, setActiveDiv] = useState(1);

//     const handleDivClick = (divNumber) => {
//         if (activeDiv === divNumber) {
//             setActiveDiv(0);
//         } else {
//             setActiveDiv(divNumber);
//         }
//     };

//     const skillsData = [
//         {
//             id: 1,
//             icon: <BsBraces className="text-2xl md:text-3xl text-violet-900" />,
//             title: "Frontend developer",
//             experience: "More than 2 years",
//             skills: [
//                 { name: "HTML", percentage: 80 },
//                 { name: "CSS - Bootstrap - Tailwind", percentage: 80 },
//                 { name: "JavaScript", percentage: 70 },
//                 { name: "React JS - Redux Toolkit", percentage: 75 }
//             ]
//         },
//         {
//             id: 2,
//             icon: <CiServer className="text-2xl md:text-3xl text-violet-900" />,
//             title: "Backend developer",
//             experience: "More than 2 years",
//             skills: [
//                 { name: "POO - MVC", percentage: 70 },
//                 { name: "PHP", percentage: 70 },
//                 { name: "Symfony", percentage: 75 },
//                 { name: "API Platform", percentage: 70 }
//             ]
//         },
//         {
//             id: 3,
//             icon: <TbTools className="text-2xl md:text-3xl text-violet-900" />,
//             title: "Technical competence",
//             experience: "More than 4 years",
//             skills: [
//                 { name: "UML - SCRUM", percentage: 75 },
//                 { name: "Git", percentage: 80 },
//                 { name: "Docker", percentage: 60 },
//                 { name: "Photoshop - Illustrator", percentage: 65 }
//             ]
//         }
//     ];

//     return (
//         <div id="skills" className="w-full min-h-screen bg-zinc-50 py-16 md:py-20 px-4 md:px-6">
//             <div className="max-w-4xl mx-auto">
//                 <div className="text-center mb-12 md:mb-16">
//                     <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">Skills</h1>
//                     <span className="text-base md:text-lg font-medium text-gray-500">My technical level</span>
//                 </div>
                
//                 <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
//                     {skillsData.map((category) => (
//                         <div key={category.id} className="w-full">
//                             <div 
//                                 className="flex items-center gap-3 md:gap-4 p-4 md:p-6 mb-4 md:mb-6 cursor-pointer hover:bg-violet-50 rounded-lg transition-colors duration-200"
//                                 onClick={() => handleDivClick(category.id)}
//                             >
//                                 {category.icon}
//                                 <div className="flex-grow">
//                                     <h2 className="text-lg md:text-xl font-semibold text-gray-800">
//                                         {category.title}
//                                     </h2>
//                                     <span className="text-xs md:text-sm text-gray-500">
//                                         {category.experience}
//                                     </span>
//                                 </div>
//                                 <FaChevronDown 
//                                     className={`text-violet-700 transition-transform duration-300 ${
//                                         activeDiv === category.id ? 'rotate-180' : ''
//                                     }`}
//                                 />
//                             </div>
                            
//                             <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                                 activeDiv === category.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//                             }`}>
//                                 <div className="pl-8 md:pl-16 pr-4 md:pr-6 pb-4 md:pb-6 space-y-4 md:space-y-6">
//                                     {category.skills.map((skill, index) => (
//                                         <div key={index} className="skill-item">
//                                             <div className="flex justify-between items-center mb-2">
//                                                 <h3 className="text-xs md:text-sm font-medium text-gray-700">
//                                                     {skill.name}
//                                                 </h3>
//                                                 <span className="text-xs md:text-sm text-gray-500">
//                                                     {skill.percentage}%
//                                                 </span>
//                                             </div>
//                                             <div className="w-full bg-violet-200 rounded-full h-2">
//                                                 <div 
//                                                     className="bg-violet-700 h-2 rounded-full transition-all duration-1000 ease-out"
//                                                     style={{ width: activeDiv === category.id ? `${skill.percentage}%` : '0%' }}
//                                                 />
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Skills;

// import React, {useState} from 'react';
// import {SlGraduation} from "react-icons/sl";
// import {MdOutlineDateRange, MdWorkOutline} from "react-icons/md";

// const Qualification = () => {
//     const [activeTab, setActiveTab] = useState('education');

//     const educationData = [
//         {
//             title: "Engineering cycle Computer Engineering",
//             institution: "EHEI OUJDA",
//             period: "2018 - 2021",
//             side: "left"
//         },
//         {
//             title: "DUT - Computer applications developer",
//             institution: "ESTO",
//             period: "2015 - 2018",
//             side: "right"
//         },
//         {
//             title: "Bachelor degree SVT",
//             institution: "School",
//             period: "2014 - 2015",
//             side: "left"
//         }
//     ];

//     const workData = [
//         {
//             title: "TOMOES",
//             institution: "Agence de développement - MARRAKESH (Télétravail)",
//             period: "July 2023 - Nov 2024 (1 year and 4 months)",
//             side: "right"
//         },
//         {
//             title: "Share Conseil",
//             institution: "Agence web digitale - MAROC RABAT (Présentiel)",
//             period: "Août 2022 - Sep 2023 (9 months)",
//             side: "left"
//         },
//         {
//             title: "Algolus",
//             institution: "Agence de marketing digital - MAROC OUJDA (Présentiel)",
//             period: "Janvier 2022 - Juin 2022 (6 months)",
//             side: "right"
//         },
//         {
//             title: "Stage PFE | FCPO",
//             institution: "agence web experte en développement des sites web à oujda",
//             period: "2021 (6 months)",
//             side: "left"
//         }
//     ];

//     const TimelineItem = ({ item, index, isLast }) => (
//         <div className="flex items-start mb-6 md:mb-8 last:mb-0">
//             {item.side === "left" ? (
//                 <>
//                     <div className="w-full pr-6 md:pr-8 text-right">
//                         <h2 className="text-sm md:text-base font-bold text-gray-800 mb-1">{item.title}</h2>
//                         <h3 className="text-gray-600 font-medium text-xs md:text-sm mb-2">{item.institution}</h3>
//                         <span className="flex items-center justify-end gap-1.5 text-gray-400 font-medium text-xs">
//                             <MdOutlineDateRange className="text-sm"/>
//                             <span>{item.period}</span>
//                         </span>
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <div className="bg-violet-700 h-3 w-3 rounded-full flex-shrink-0 z-10"></div>
//                         {!isLast && <div className="w-0.5 bg-violet-300 h-12 md:h-16 mt-2"></div>}
//                     </div>
//                     <div className="w-full pl-6 md:pl-8"></div>
//                 </>
//             ) : (
//                 <>
//                     <div className="w-full pr-6 md:pr-8"></div>
//                     <div className="flex flex-col items-center">
//                         <div className="bg-violet-700 h-3 w-3 rounded-full flex-shrink-0 z-10"></div>
//                         {!isLast && <div className="w-0.5 bg-violet-300 h-12 md:h-16 mt-2"></div>}
//                     </div>
//                     <div className="w-full pl-6 md:pl-8">
//                         <h2 className="text-sm md:text-base font-bold text-gray-800 mb-1">{item.title}</h2>
//                         <h3 className="text-gray-600 font-medium text-xs md:text-sm mb-2">{item.institution}</h3>
//                         <span className="flex items-center gap-1.5 text-gray-400 font-medium text-xs">
//                             <MdOutlineDateRange className="text-sm"/>
//                             <span>{item.period}</span>
//                         </span>
//                     </div>
//                 </>
//             )}
//         </div>
//     );

//     const MobileTimelineItem = ({ item, index, isLast }) => (
//         <div className="flex items-start mb-6 md:mb-8 last:mb-0">
//             <div className="flex flex-col items-center mr-4">
//                 <div className="bg-violet-700 h-3 w-3 rounded-full flex-shrink-0 z-10"></div>
//                 {!isLast && <div className="w-0.5 bg-violet-300 h-12 md:h-16 mt-2"></div>}
//             </div>
//             <div className="flex-1">
//                 <h2 className="text-sm md:text-base font-bold text-gray-800 mb-1">{item.title}</h2>
//                 <h3 className="text-gray-600 font-medium text-xs md:text-sm mb-2">{item.institution}</h3>
//                 <span className="flex items-center gap-1.5 text-gray-400 font-medium text-xs">
//                     <MdOutlineDateRange className="text-sm"/>
//                     <span>{item.period}</span>
//                 </span>
//             </div>
//         </div>
//     );

//     return (
//         <div id="qualification" className="w-full min-h-screen bg-zinc-50 md:bg-zinc-100 py-16 md:py-20 px-4 md:px-6">
//             <div className="max-w-4xl mx-auto">
//                 <div className="text-center mb-12 md:mb-16">
//                     <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">Qualification</h1>
//                     <span className="text-base md:text-lg font-medium text-gray-500">My Personal journey</span>
//                 </div>
                
//                 <div className="flex justify-center gap-4 md:gap-8 mb-12 md:mb-16">
//                     <button 
//                         className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-lg font-medium transition-all duration-300 ${
//                             activeTab === 'education' 
//                                 ? 'bg-violet-700 text-white shadow-lg' 
//                                 : 'text-gray-600 hover:text-violet-700'
//                         }`}
//                         onClick={() => setActiveTab('education')}
//                     >
//                         <SlGraduation className="text-lg md:text-xl"/>
//                         Education
//                     </button>
//                     <button 
//                         className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-lg font-medium transition-all duration-300 ${
//                             activeTab === 'work' 
//                                 ? 'bg-violet-700 text-white shadow-lg' 
//                                 : 'text-gray-600 hover:text-violet-700'
//                         }`}
//                         onClick={() => setActiveTab('work')}
//                     >
//                         <MdWorkOutline className="text-lg md:text-xl"/>
//                         Work
//                     </button>
//                 </div>
                
//                 <div className="max-w-3xl mx-auto">
//                     {activeTab === 'education' && (
//                         <div className="transition-all duration-500 ease-in-out">
//                             {/* Desktop Timeline */}
//                             <div className="hidden md:block">
//                                 {educationData.map((item, index) => (
//                                     <TimelineItem 
//                                         key={index} 
//                                         item={item} 
//                                         index={index} 
//                                         isLast={index === educationData.length - 1}
//                                     />
//                                 ))}
//                             </div>
                            
//                             {/* Mobile Timeline */}
//                             <div className="md:hidden">
//                                 {educationData.map((item, index) => (
//                                     <MobileTimelineItem 
//                                         key={index} 
//                                         item={item} 
//                                         index={index} 
//                                         isLast={index === educationData.length - 1}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     )}
                    
//                     {activeTab === 'work' && (
//                         <div className="transition-all duration-500 ease-in-out">
//                             {/* Desktop Timeline */}
//                             <div className="hidden md:block">
//                                 {workData.map((item, index) => (
//                                     <TimelineItem 
//                                         key={index} 
//                                         item={item} 
//                                         index={index} 
//                                         isLast={index === workData.length - 1}
//                                     />
//                                 ))}
//                             </div>
                            
//                             {/* Mobile Timeline */}
//                             <div className="md:hidden">
//                                 {workData.map((item, index) => (
//                                     <MobileTimelineItem 
//                                         key={index} 
//                                         item={item} 
//                                         index={index} 
//                                         isLast={index === workData.length - 1}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Qualification;

// // Portfolio.js - Complete with mobile responsiveness
// import React, { useRef } from 'react';
// import { HiOutlineArrowSmRight } from "react-icons/hi";
// import { Swiper, SwiperSlide } from "swiper/react";
// import estoShop from "./../assets/estoShop.jpg";
// import shop from "./../assets/shop.png";
// import rba7 from "./../assets/rba7.png";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";

// // import required modules
// import { Pagination, Navigation, Autoplay } from "swiper";

// const Portfolio = () => {
//     const progressCircle = useRef(null);
//     const progressContent = useRef(null);

//     const onAutoplayTimeLeft = (s, time, progress) => {
//         if (progressCircle.current) {
//             progressCircle.current.style.setProperty('--progress', 1 - progress);
//         }
//         if (progressContent.current) {
//             progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//         }
//     };

//     const portfolioItems = [
//         {
//             title: "Website SHOP",
//             description: "Realization of an e-commerce website for the sale of products through the Symfony/React JS framework.",
//             image: shop,
//             link: null,
//             disabled: true
//         },
//         {
//             title: "Website rba7",
//             description: "Realization and deployment of a game site responsive with HTML, CSS, and JavaScript.",
//             image: rba7,
//             link: "https://hamza-mej.github.io/rba7-wordle/",
//             disabled: false
//         },
//         {
//             title: "Website ESTO Shop",
//             description: "Website adaptable to all devices, with UI components and animated interactions.",
//             image: estoShop,
//             link: null,
//             disabled: true
//         }
//     ];

//     return (
//         <div id="portfolio" className="w-full min-h-screen bg-zinc-50 py-16 md:py-20 px-4 md:px-6">
//             <div className="max-w-6xl mx-auto">
//                 <div className="text-center mb-12 md:mb-16">
//                     <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">Portfolio</h1>
//                     <span className="text-base md:text-lg font-medium text-gray-500">Most recent work</span>
//                 </div>

//                 <div className="max-w-5xl mx-auto">
//                     <Swiper
//                         slidesPerView={1}
//                         spaceBetween={20}
//                         centeredSlides={true}
//                         autoplay={{
//                             delay: 4500,
//                             disableOnInteraction: false,
//                         }}
//                         loop={true}
//                         pagination={{
//                             clickable: true,
//                         }}
//                         navigation={true}
//                         modules={[Autoplay, Pagination, Navigation]}
//                         onAutoplayTimeLeft={onAutoplayTimeLeft}
//                         className="portfolio-swiper"
//                         breakpoints={{
//                             640: {
//                                 spaceBetween: 30,
//                             },
//                             768: {
//                                 spaceBetween: 40,
//                             },
//                         }}
//                     >
//                         {portfolioItems.map((item, index) => (
//                             <SwiperSlide key={index}>
//                                 <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 py-4 md:py-8 max-w-4xl mx-auto">
//                                     <div className="order-2 md:order-1">
//                                         <div className="relative overflow-hidden rounded-lg shadow-xl group">
//                                             <img
//                                                 src={item.image}
//                                                 className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
//                                                 alt={item.title}
//                                             />
//                                             <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300"></div>
//                                         </div>
//                                     </div>

//                                     <div className="order-1 md:order-2 flex flex-col justify-center">
//                                         <div className="text-center md:text-left px-4 md:px-0">
//                                             <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
//                                                 {item.title}
//                                             </h2>
//                                             <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6 max-w-md mx-auto md:mx-0">
//                                                 {item.description}
//                                             </p>

//                                             {item.disabled ? (
//                                                 <button
//                                                     disabled
//                                                     className="bg-violet-300 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-medium flex items-center gap-2 cursor-not-allowed mx-auto md:mx-0 text-sm md:text-base"
//                                                 >
//                                                     Demo
//                                                     <HiOutlineArrowSmRight className="text-lg md:text-xl" />
//                                                 </button>
//                                             ) : (
//                                                 <a
//                                                     href={item.link}
//                                                     target="_blank"
//                                                     rel="noopener noreferrer"
//                                                     className="bg-violet-700 hover:bg-violet-800 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-medium flex items-center gap-2 transition-colors duration-300 mx-auto md:mx-0 w-fit text-sm md:text-base group"
//                                                 >
//                                                     Demo
//                                                     <HiOutlineArrowSmRight className="text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-1" />
//                                                 </a>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}

//                         <div className="autoplay-progress" slot="container-end">
//                             <svg viewBox="0 0 48 48" ref={progressCircle}>
//                                 <circle cx="24" cy="24" r="20" fill="none" stroke="#8b5cf6" strokeWidth="2" />
//                             </svg>
//                             <span ref={progressContent} className="text-violet-700 font-medium"></span>
//                         </div>
//                     </Swiper>
//                 </div>
//             </div>

//             <style jsx>{`
//                 .portfolio-swiper {
//                     padding-bottom: 60px;
//                 }
                
//                 .autoplay-progress {
//                     position: absolute;
//                     right: 16px;
//                     bottom: 16px;
//                     z-index: 10;
//                     width: 48px;
//                     height: 48px;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     font-weight: bold;
//                     color: #8b5cf6;
//                 }
                
//                 .autoplay-progress svg {
//                     --progress: 0;
//                     position: absolute;
//                     left: 0;
//                     top: 0;
//                     z-index: 10;
//                     width: 100%;
//                     height: 100%;
//                     stroke-width: 2;
//                     stroke: #8b5cf6;
//                     fill: none;
//                     stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
//                     stroke-dasharray: 125.6;
//                     transform: rotate(-90deg);
//                 }
                
//                 @media (max-width: 768px) {
//                     .portfolio-swiper {
//                         padding-bottom: 50px;
//                     }
                    
//                     .autoplay-progress {
//                         right: 8px;
//                         bottom: 8px;
//                         width: 36px;
//                         height: 36px;
//                     }
                    
//                     .autoplay-progress span {
//                         font-size: 12px;
//                     }
//                 }
                
//                 @media (max-width: 640px) {
//                     .portfolio-swiper {
//                         padding-bottom: 45px;
//                     }
                    
//                     .autoplay-progress {
//                         width: 32px;
//                         height: 32px;
//                     }
                    
//                     .autoplay-progress span {
//                         font-size: 11px;
//                     }
//                 }
//             `}</style>
//         </div>
//     );
// }

// export default Portfolio;

// // NavBar.js - Complete with mobile responsiveness
// import React, {useState} from 'react';
// import {Link} from 'react-scroll';
// import {CgClose, CgMenu} from "react-icons/cg";
// import {FiHome} from "react-icons/fi";

// const NavBar = () => {
//     const [open, setOpen] = useState(false);

//     const navLinks = [
//         {
//             name: "About",
//             id: "about"
//         },
//         {
//             name: "Skills",
//             id: "skills"
//         },
//         {
//             name: "Qualification",
//             id: "qualification"
//         },
//         {
//             name: "Portfolio",
//             id: "portfolio"
//         },
//         {
//             name: "Contact",
//             id: "contact"
//         }
//     ];

//     const closeMenu = () => {
//         setOpen(false);
//     };

//     return (
//         <nav className="fixed w-full h-[70px] md:h-[80px] py-3 md:py-4 bg-zinc-50 z-50 shadow-sm">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-full">
//                     <div className="flex items-center">
//                         <div className="text-lg md:text-xl lg:text-2xl font-medium text-gray-700 tracking-wide cursor-pointer">
//                             <Link to="home" spy={true} smooth={true} offset={-40} duration={500}>
//                                 Portfolio
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex items-center space-x-1">
//                         <Link 
//                             to="home" 
//                             spy={true} 
//                             smooth={true} 
//                             offset={-40} 
//                             duration={500} 
//                             className="font-medium text-violet-700 text-base lg:text-lg px-3 py-2 cursor-pointer hover:text-violet-800 transition-colors"
//                         >
//                             Home
//                         </Link>
//                         {navLinks.map((link, index) => (
//                             <Link
//                                 key={index}
//                                 className="text-gray-700 hover:text-violet-700 px-3 py-2 text-base lg:text-lg font-medium cursor-pointer transition-colors duration-200"
//                                 to={link.id} 
//                                 spy={true} 
//                                 smooth={true} 
//                                 offset={-40} 
//                                 duration={500}
//                             >
//                                 {link.name}
//                             </Link>
//                         ))}
//                     </div>

//                     {/* Mobile menu button */}
//                     <div className="md:hidden">
//                         <button
//                             onClick={() => setOpen(!open)}
//                             className="text-2xl text-gray-700 hover:text-violet-700 transition-colors p-1"
//                         >
//                             {open ? <CgClose /> : <CgMenu />}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu */}
//                 {open && (
//                     <div className="md:hidden absolute top-[70px] left-0 w-full bg-zinc-50 shadow-lg border-t">
//                         <div className="flex flex-col py-2 space-y-1">
//                             <Link
//                                 onClick={closeMenu}
//                                 to="home"
//                                 spy={true} 
//                                 smooth={true} 
//                                 offset={-40} 
//                                 duration={500}
//                                 className="flex items-center justify-center py-3 text-violet-700 text-xl font-medium hover:bg-violet-50 transition-colors"
//                             >
//                                 <FiHome />
//                             </Link>
//                             {navLinks.map((link, index) => (
//                                 <Link
//                                     key={index}
//                                     onClick={closeMenu}
//                                     className="text-gray-700 hover:text-violet-700 hover:bg-violet-50 px-6 py-3 text-lg font-medium cursor-pointer transition-colors duration-200 text-center"
//                                     to={link.id} 
//                                     spy={true} 
//                                     smooth={true} 
//                                     offset={-40} 
//                                     duration={500}
//                                 >
//                                     {link.name}
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// }

// export default NavBar;

// // NavBar.js - Complete with mobile responsiveness
// import React, {useState} from 'react';
// import {Link} from 'react-scroll';
// import {CgClose, CgMenu} from "react-icons/cg";
// import {FiHome} from "react-icons/fi";

// const NavBar = () => {
//     const [open, setOpen] = useState(false);

//     const navLinks = [
//         {
//             name: "About",
//             id: "about"
//         },
//         {
//             name: "Skills",
//             id: "skills"
//         },
//         {
//             name: "Qualification",
//             id: "qualification"
//         },
//         {
//             name: "Portfolio",
//             id: "portfolio"
//         },
//         {
//             name: "Contact",
//             id: "contact"
//         }
//     ];

//     const closeMenu = () => {
//         setOpen(false);
//     };

//     return (
//         <nav className="fixed w-full h-[70px] md:h-[80px] py-3 md:py-4 bg-zinc-50 z-50 shadow-sm">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-full">
//                     <div className="flex items-center">
//                         <div className="text-lg md:text-xl lg:text-2xl font-medium text-gray-700 tracking-wide cursor-pointer">
//                             <Link to="home" spy={true} smooth={true} offset={-40} duration={500}>
//                                 Portfolio
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex items-center space-x-1">
//                         <Link 
//                             to="home" 
//                             spy={true} 
//                             smooth={true} 
//                             offset={-40} 
//                             duration={500} 
//                             className="font-medium text-violet-700 text-base lg:text-lg px-3 py-2 cursor-pointer hover:text-violet-800 transition-colors"
//                         >
//                             Home
//                         </Link>
//                         {navLinks.map((link, index) => (
//                             <Link
//                                 key={index}
//                                 className="text-gray-700 hover:text-violet-700 px-3 py-2 text-base lg:text-lg font-medium cursor-pointer transition-colors duration-200"
//                                 to={link.id} 
//                                 spy={true} 
//                                 smooth={true} 
//                                 offset={-40} 
//                                 duration={500}
//                             >
//                                 {link.name}
//                             </Link>
//                         ))}
//                     </div>

//                     {/* Mobile menu button */}
//                     <div className="md:hidden">
//                         <button
//                             onClick={() => setOpen(!open)}
//                             className="text-2xl text-gray-700 hover:text-violet-700 transition-colors p-1"
//                         >
//                             {open ? <CgClose /> : <CgMenu />}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu */}
//                 {open && (
//                     <div className="md:hidden absolute top-[70px] left-0 w-full bg-zinc-50 shadow-lg border-t">
//                         <div className="flex flex-col py-2 space-y-1">
//                             <Link
//                                 onClick={closeMenu}
//                                 to="home"
//                                 spy={true} 
//                                 smooth={true} 
//                                 offset={-40} 
//                                 duration={500}
//                                 className="flex items-center justify-center py-3 text-violet-700 text-xl font-medium hover:bg-violet-50 transition-colors"
//                             >
//                                 <FiHome />
//                             </Link>
//                             {navLinks.map((link, index) => (
//                                 <Link
//                                     key={index}
//                                     onClick={closeMenu}
//                                     className="text-gray-700 hover:text-violet-700 hover:bg-violet-50 px-6 py-3 text-lg font-medium cursor-pointer transition-colors duration-200 text-center"
//                                     to={link.id} 
//                                     spy={true} 
//                                     smooth={true} 
//                                     offset={-40} 
//                                     duration={500}
//                                 >
//                                     {link.name}
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// }

// export default NavBar;


// import React from 'react';
// import {DiDoctrine} from "react-icons/di";
// import {SlSocialLinkedin} from "react-icons/sl";
// import {SlSocialDribbble} from "react-icons/sl";
// import {FiGithub} from "react-icons/fi";
// import {CgMouse} from "react-icons/cg";
// import {HiOutlineArrowSmRight} from "react-icons/hi";
// import {Link} from 'react-scroll';
// import { motion } from "framer-motion"
// import CustomBg from "./CustomBg";

// const Home = () => {
//     return (
//         <div id="home" className="bg-zinc-50 pt-20 md:pt-28 lg:pt-52 px-4 md:px-6">
//             <div className="max-w-6xl mx-auto">
//                 <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center">
//                     {/* Social links and content */}
//                     <div className="w-full md:flex-1">
//                         <div className="flex flex-col md:grid md:grid-cols-4 gap-8 md:gap-0">
//                             {/* Social Links */}
//                             <div className="flex md:flex-col justify-center md:justify-start items-center md:items-start px-0 md:px-5 text-xl text-violet-900 gap-5 md:gap-5 order-2 md:order-1">
//                                 <a href="https://www.linkedin.com/in/hamza-mejdoubi-13474a14a/" target="_blank" className="hover:text-violet-600 hover:scale-110 transition-all duration-300" rel="noreferrer">
//                                     <SlSocialLinkedin />
//                                 </a>
//                                 <Link to="home" className="hover:text-violet-600 hover:scale-110 cursor-pointer transition-all duration-300">
//                                     <SlSocialDribbble />
//                                 </Link>
//                                 <a href="https://github.com/hamza-mej" target="_blank" className="hover:text-violet-600 hover:scale-110 transition-all duration-300" rel="noreferrer">
//                                     <FiGithub />
//                                 </a>
//                             </div>
                            
//                             {/* Main Content */}
//                             <div className="col-span-3 text-center md:text-left order-1 md:order-2">
//                                 <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//                                     Hi, I'm Hamza
//                                 </h1>
//                                 <h3 className="text-lg md:text-xl font-medium text-gray-500 mb-4">
//                                     Developer
//                                 </h3>
//                                 <p className="text-sm md:text-base font-normal text-gray-500 mb-6 max-w-md mx-auto md:mx-0">
//                                     High level experience in development, with a strong focus on producing quality work.
//                                 </p>
//                                 <div className="flex justify-center md:justify-start">
//                                     <Link 
//                                         to="contact" 
//                                         spy={true} 
//                                         smooth={true} 
//                                         offset={-40} 
//                                         duration={500}
//                                         className="bg-violet-700 hover:bg-violet-800 py-3 px-4 md:py-4 md:px-6 inline-flex text-slate-100 font-medium rounded-lg items-center gap-2 cursor-pointer transition-all duration-300"
//                                     >
//                                         Contact Me <DiDoctrine className="text-xl md:text-2xl" />
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Profile Image */}
//                     <motion.div
//                         animate={{ x: 0 }}
//                         transition={{ ease: "easeOut", duration: 2 }}
//                         className="flex justify-center md:justify-end flex-shrink-0"
//                     >
//                         <CustomBg />
//                     </motion.div>
//                 </div>
                
//                 {/* Scroll down */}
//                 <div className="max-w-6xl mx-auto py-8 md:py-16 flex justify-center md:justify-start md:px-44">
//                     <Link 
//                         to="footer" 
//                         spy={true} 
//                         smooth={true} 
//                         offset={-40} 
//                         duration={500}
//                         className="flex font-medium gap-1 items-center px-2 cursor-pointer text-sm md:text-base hover:text-violet-700 transition-colors"
//                     >
//                         <CgMouse className="text-xl md:text-2xl text-violet-900" />
//                         Scroll down
//                         <HiOutlineArrowSmRight className="text-xl md:text-2xl text-violet-900 hover:rotate-90 transition-all duration-500"/>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;

// // Footer.js - Complete with mobile responsiveness
// import React from 'react';
// import {Link} from 'react-scroll';
// import {BsInstagram} from "react-icons/bs";
// import {FaLinkedinIn} from "react-icons/fa";
// import {RxDiscordLogo} from "react-icons/rx";
// import {TbCopyright} from "react-icons/tb";
// import ScrollToTop from "react-scroll-to-top";

// const Footer = () => {
//     return (
//         <div id="footer" className="w-full bg-violet-700">
//             <div className="max-w-4xl mx-auto pb-8 md:pb-10 pt-8 md:pt-10 px-4 md:px-6">
//                 <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-0 lg:grid grid-cols-3 py-5">
//                     <div className="text-slate-200 hover:text-slate-100 text-center lg:text-left">
//                         <Link to="home" spy={true} smooth={true} offset={-40} duration={500} className="text-3xl md:text-4xl lg:text-5xl font-bold cursor-pointer">
//                             Hamza
//                         </Link>
//                         <span className="font-medium text-sm flex justify-center lg:justify-start mt-1">
//                             Developer
//                         </span>
//                     </div>
                    
//                     <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-sm md:text-base font-medium text-slate-200 cursor-pointer">
//                         <Link 
//                             to="skills" 
//                             spy={true} 
//                             smooth={true} 
//                             offset={-40} 
//                             duration={500} 
//                             className="hover:text-slate-100 transition-colors"
//                         >
//                             Skills
//                         </Link>
//                         <Link 
//                             to="portfolio" 
//                             spy={true} 
//                             smooth={true} 
//                             offset={-40} 
//                             duration={500} 
//                             className="hover:text-slate-100 transition-colors"
//                         >
//                             Portfolio
//                         </Link>
//                         <Link 
//                             to="contact" 
//                             spy={true} 
//                             smooth={true} 
//                             offset={-40} 
//                             duration={500} 
//                             className="hover:text-slate-100 transition-colors"
//                         >
//                             Contact Me
//                         </Link>
//                     </div>
                    
//                     <div className="flex justify-center lg:justify-end gap-4 md:gap-6 lg:gap-8 text-2xl md:text-3xl lg:text-xl font-bold text-slate-200 cursor-pointer">
//                         <a 
//                             href="https://www.linkedin.com/in/hamza-mejdoubi-13474a14a/" 
//                             target="_blank" 
//                             rel="noreferrer"
//                             className="hover:text-slate-100 transition-colors p-2"
//                         >
//                             <FaLinkedinIn />
//                         </a>
//                         <a 
//                             href="https://www.instagram.com/hamzamej_/" 
//                             target="_blank" 
//                             rel="noreferrer"
//                             className="hover:text-slate-100 transition-colors p-2"
//                         >
//                             <BsInstagram/>
//                         </a>
//                         <a 
//                             href="https://github.com/hamza-mej" 
//                             target="_blank" 
//                             rel="noreferrer"
//                             className="hover:text-slate-100 transition-colors p-2"
//                         >
//                             <RxDiscordLogo/>
//                         </a>
//                     </div>
//                 </div>
                
//                 <div className="max-w-4xl mx-auto text-xs md:text-sm text-slate-400 pt-8 md:pt-12 lg:pt-16 flex justify-center items-center gap-1">
//                     <TbCopyright/>
//                     <span>Hamzacode. All rights reserved</span>
//                 </div>
//             </div>
            
//             <ScrollToTop 
//                 smooth 
//                 color="white" 
//                 width="20" 
//                 height="20" 
//                 className="!bg-violet-700 !text-sm flex items-center justify-center !right-4 !bottom-4 md:!right-6 md:!bottom-6"
//             />
//         </div>
//     );
// }

// export default Footer;

// // CustomBg.js - Complete with mobile responsiveness
// import React from 'react';
// import nd from "../assets/nd.png";

// const CustomBg = () => {
//     return (
//         <div className="flex justify-center items-center">
//             <svg 
//                 className="fill-violet-700 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96" 
//                 viewBox="0 0 200 187" 
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <mask id="mask0" mask-type="alpha">
//                     <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
//                                 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
//                                 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
//                                 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
//                 </mask>
//                 <g mask="url(#mask0)">
//                     <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
//                                 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
//                                 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
//                                 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
//                     <image 
//                         className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48" 
//                         href={nd}
//                         x="26" 
//                         y="18"
//                     />
//                 </g>
//             </svg>
//         </div>
//     );
// }

// export default CustomBg;

// // Contact.js - Complete with mobile responsiveness
// import React from 'react';
// import { FiMail, FiPhoneCall } from "react-icons/fi";
// import { HiOutlineLocationMarker } from "react-icons/hi";
// import { AiOutlineSend } from "react-icons/ai";

// const Contact = () => {
//     return (
//         <div id="contact" className="w-full min-h-screen bg-zinc-50 md:bg-zinc-100 flex flex-col justify-center py-8 md:py-10 px-4 md:px-6">
//             <div className="max-w-4xl mx-auto w-full">
//                 <div className="flex flex-col items-center pb-6 md:pb-8 lg:pb-12">
//                     <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Me</h1>
//                     <span className="text-base md:text-lg font-medium text-gray-500 mt-2 md:mt-3">Get in touch</span>
//                 </div>
                
//                 <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 md:gap-8">
//                     {/* Contact Info */}
//                     <div className="lg:col-span-2 lg:pl-10">
//                         <div className="flex gap-4 md:gap-5 items-center py-3 md:py-2">
//                             <FiPhoneCall className="text-2xl md:text-3xl text-violet-700 flex-shrink-0" />
//                             <div>
//                                 <h1 className="text-lg md:text-xl font-medium text-gray-800">Call Me</h1>
//                                 <span className="text-xs md:text-sm font-medium text-gray-500">+212 (0) 648 297 486</span>
//                             </div>
//                         </div>
                        
//                         <div className="flex gap-4 md:gap-5 items-center py-3 md:py-2">
//                             <FiMail className="text-2xl md:text-3xl text-violet-700 flex-shrink-0" />
//                             <div className="flex flex-col gap-1 md:gap-1.5">
//                                 <a href="mailto:Mejdoubi.hamzaa@gmail.com" className="text-lg md:text-xl font-medium text-gray-800 hover:text-violet-700 transition-colors">
//                                     Email
//                                 </a>
//                                 <a href="mailto:Mejdoubi.hamzaa@gmail.com" className="text-xs md:text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors break-all">
//                                     Mejdoubi.hamzaa@gmail.com
//                                 </a>
//                             </div>
//                         </div>
                        
//                         <div className="flex gap-4 md:gap-5 items-center py-3 md:py-2">
//                             <HiOutlineLocationMarker className="text-2xl md:text-3xl text-violet-700 flex-shrink-0" />
//                             <div>
//                                 <h1 className="text-lg md:text-xl font-medium text-gray-800">Location</h1>
//                                 <span className="text-xs md:text-sm font-medium text-gray-500">Morocco</span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Contact Form */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-3 gap-3 md:gap-4 lg:gap-5 mt-4 lg:mt-0">
//                         <div className="md:col-span-1">
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="Name"
//                                 required
//                                 className="w-full bg-violet-100 pt-3 pb-3 md:pt-2.5 md:pb-9 px-3 md:px-4 rounded-lg focus:outline-0 focus:ring-2 focus:ring-violet-300 placeholder-gray-500 text-sm md:text-base"
//                             />
//                         </div>
                        
//                         <div className="md:col-span-1">
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Email"
//                                 required
//                                 className="w-full bg-violet-100 pt-3 pb-3 md:pt-2.5 md:pb-9 px-3 md:px-4 rounded-lg focus:outline-0 focus:ring-2 focus:ring-violet-300 placeholder-gray-500 text-sm md:text-base"
//                             />
//                         </div>
                        
//                         <div className="md:col-span-2">
//                             <input
//                                 type="text"
//                                 name="project"
//                                 placeholder="Project"
//                                 className="w-full bg-violet-100 pt-3 pb-3 md:pt-2.5 md:pb-9 px-3 md:px-4 rounded-lg focus:outline-0 focus:ring-2 focus:ring-violet-300 placeholder-gray-500 text-sm md:text-base"
//                             />
//                         </div>
                        
//                         <div className="md:col-span-2">
//                             <textarea
//                                 name="message"
//                                 placeholder="Message"
//                                 required
//                                 className="w-full bg-violet-100 pt-3 pb-8 md:pt-2.5 md:pb-20 px-3 md:px-4 rounded-lg focus:outline-0 focus:ring-2 focus:ring-violet-300 placeholder-gray-500 resize-none text-sm md:text-base"
//                                 rows={4}
//                             />
//                         </div>
                        
//                         <div className="md:col-span-2 flex justify-center md:justify-start">
//                             <button className="bg-violet-700 hover:bg-violet-800 py-3 md:py-4 px-6 md:px-8 text-white font-medium rounded-lg flex items-center gap-2 transition-all duration-200 text-sm md:text-base">
//                                 Send Message 
//                                 <AiOutlineSend className="text-lg md:text-xl" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Contact;

// // About.js - Complete with mobile responsiveness
// import React from 'react';
// import {BsDownload} from "react-icons/bs";
// import prog from "./../assets/prog.jpg";
// import CountUp from 'react-countup';
// import { useInView } from 'react-hook-inview';

// const About = () => {
//     const [ref, inView] = useInView();

//     return (
//         <div id="about" className="w-full min-h-screen bg-zinc-50 md:bg-zinc-100 flex items-center py-8 md:py-0 px-4 md:px-6">
//             <div className="max-w-6xl mx-auto flex flex-col justify-center w-full">
//                 <div className="flex flex-col items-center pt-4 md:pt-0">
//                     <h1 className="text-3xl md:text-4xl font-bold text-gray-800">About Me</h1>
//                     <span className="text-base md:text-lg font-medium text-gray-500 mt-2 md:mt-3">My introduction</span>
//                 </div>
                
//                 <div className="flex flex-col lg:grid lg:grid-cols-2 pt-8 md:pt-10 lg:pt-20 gap-8 md:gap-12 lg:gap-32 pb-4">
//                     <div className="relative w-full max-w-72 h-52 md:h-60 lg:h-auto mx-auto lg:mx-0">
//                         <img 
//                             className="w-full h-full object-cover rounded-xl shadow-lg" 
//                             src={prog} 
//                             alt="Hamza Mejdoubi - Developer"
//                         />
//                     </div>
                    
//                     <div className="flex flex-col px-4 md:px-8 lg:px-0 lg:w-[350px]">
//                         <p className="text-base md:text-lg font-medium text-gray-500 text-center lg:text-left leading-relaxed">
//                             Web developer, with extensive knowledge and years of experience, 
//                             working in web technologies, delivering quality work.
//                         </p>
                        
//                         <div className="grid grid-cols-3 gap-4 py-6 md:py-8" ref={ref}>
//                             <div className="flex flex-col items-center justify-center">
//                                 {inView ? (
//                                     <h1 className="text-xl md:text-2xl font-medium">
//                                         <CountUp start={-10} end={2} duration={4} />+
//                                     </h1>
//                                 ) : (
//                                     <h1 className="text-xl md:text-2xl font-medium">2+</h1>
//                                 )}
//                                 <span className="text-center text-gray-500 text-xs md:text-sm">
//                                     Years experience
//                                 </span>
//                             </div>
                            
//                             <div className="flex flex-col items-center justify-center">
//                                 {inView ? (
//                                     <h1 className="text-xl md:text-2xl font-medium">
//                                         <CountUp start={-10} end={10} duration={5} />+
//                                     </h1>
//                                 ) : (
//                                     <h1 className="text-xl md:text-2xl font-medium">10+</h1>
//                                 )}
//                                 <span className="text-center text-gray-500 text-xs md:text-sm">
//                                     Completed projects
//                                 </span>
//                             </div>
                            
//                             <div className="flex flex-col items-center justify-center">
//                                 {inView ? (
//                                     <h1 className="text-xl md:text-2xl font-medium">
//                                         <CountUp start={-10} end={4} duration={3} />+
//                                     </h1>
//                                 ) : (
//                                     <h1 className="text-xl md:text-2xl font-medium">4+</h1>
//                                 )}
//                                 <span className="text-center text-gray-500 text-xs md:text-sm">
//                                     Companies worked
//                                 </span>
//                             </div>
//                         </div>
                        
//                         <div className="flex justify-center lg:justify-start">
//                             <a
//                                 href="/CV_EN_Hamza_MEJDOUBI.pdf"
//                                 download="CV_EN_Hamza_MEJDOUBI.pdf"
//                                 className="bg-violet-700 hover:bg-violet-800 py-3 md:py-4 px-4 md:px-6 inline-flex text-slate-50 font-medium rounded-lg items-center gap-2 md:gap-4 transition-colors duration-200 text-sm md:text-base"
//                             >
//                                 Download CV 
//                                 <BsDownload className="text-lg md:text-xl" />
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default About;