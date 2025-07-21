import React from 'react';
import { DiDoctrine } from "react-icons/di";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialDribbble } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { CgMouse } from "react-icons/cg";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Link } from 'react-scroll';
import { motion } from "framer-motion"
import social from "./../assets/social.png";

import CustomBg from "./CustomBg";

const Home = () => {
    return (
        <div id="home" className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 flex items-center py-12 px-4 pt-24">
            <div className="max-w-6xl mx-auto w-full">
                <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Social links and content */}
                    <div className="w-full lg:flex-1">
                        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8 lg:gap-0">
                            {/* Social Links */}
                            <div className="flex lg:flex-col justify-center lg:justify-start items-center lg:items-start px-0 lg:px-5 text-2xl text-violet-900 gap-6 lg:gap-8 order-2 lg:order-1 mt-0 md:mt-20">
                                <motion.a
                                    href="https://www.linkedin.com/in/hamza-mejdoubi-13474a14a/"
                                    target="_blank"
                                    className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-violet-50 hover:text-violet-600 hover:scale-110 transition-all duration-300 border border-gray-100"
                                    rel="noreferrer"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <SlSocialLinkedin />
                                </motion.a>
                                <motion.div
                                    className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-violet-50 hover:text-violet-600 hover:scale-110 cursor-pointer transition-all duration-300 border border-gray-100"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link to="home" className="block">
                                        <SlSocialDribbble />
                                    </Link>
                                </motion.div>
                                <motion.a
                                    href="https://github.com/hamza-mej"
                                    target="_blank"
                                    className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-violet-50 hover:text-violet-600 hover:scale-110 transition-all duration-300 border border-gray-100"
                                    rel="noreferrer"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FiGithub />
                                </motion.a>
                            </div>

                            {/* Main Content */}
                            <div className="col-span-3 text-center lg:text-left order-1 lg:order-2">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <div className="mb-6">
                                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full text-sm font-medium mb-4">
                                            Welcome to my portfolio
                                        </span>
                                    </div>

                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                                        Hi, I'm <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Hamza</span>
                                    </h1>

                                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                                        <div className="w-12 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"></div>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-600">
                                            Full Stack Developer
                                        </h3>
                                        <div className="w-12 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"></div>
                                    </div>

                                    <p className="text-base lg:text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                        Passionate about creating innovative web solutions with
                                        <span className="font-semibold text-violet-600"> modern technologies</span> and
                                        <span className="font-semibold text-violet-600"> clean code</span>.
                                    </p>

                                    <div className="flex justify-center lg:justify-start">
                                        <Link
                                            to="contact"
                                            spy={true}
                                            smooth={true}
                                            offset={-40}
                                            duration={500}
                                            className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 py-4 px-8 inline-flex text-white font-semibold rounded-xl items-center gap-3 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
                                        >
                                            Contact Me
                                            <DiDoctrine className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeOut", duration: 1 }}
                        className="flex justify-center items-center flex-shrink-0 w-full md:w-[40%]"
                    >
                        <div className="relative align-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                            <div className="relative z-10">
                                <img
                                    src={social}
                                    alt="Profile"
                                    className="w-72 h-72 object-cover opacity-75 mx-auto mt-20"
                                    style={{
                                        filter: 'brightness(1.15) contrast(1.2) saturate(1.1) drop-shadow(0 8px 16px rgba(0,0,0,0.4))',
                                        transform: 'scale(1.1)'
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll down */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="flex justify-center lg:justify-start lg:px-44 mt-16"
                >
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-40}
                        duration={500}
                        className="flex font-medium gap-2 items-center px-4 py-3 cursor-pointer text-sm lg:text-base hover:text-violet-700 transition-all duration-300 rounded-full bg-white shadow-md hover:shadow-lg group"
                    >
                        <CgMouse className="text-2xl text-violet-900 group-hover:text-violet-600 transition-colors" />
                        Scroll down
                        <HiOutlineArrowSmRight className="text-2xl text-violet-900 group-hover:text-violet-600 hover:rotate-90 transition-all duration-500" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

export default Home;