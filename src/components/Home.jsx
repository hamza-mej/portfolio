import React from 'react';
// import {BsFillMoonStarsFill} from "react-icons/bs";
import {DiDoctrine} from "react-icons/di";
import {SlSocialLinkedin} from "react-icons/sl";
import {SlSocialDribbble} from "react-icons/sl";
import {FiGithub} from "react-icons/fi";
import {CgMouse} from "react-icons/cg";
import {HiOutlineArrowSmRight} from "react-icons/hi";
import {Link} from 'react-scroll';
import { motion } from "framer-motion"

import CustomBg from "./CustomBg";


const Home = () => {
    return (
        <div className=" bg-zinc-50 pt-52 ">
            <div className="md:max-w-6xl mx-auto ">
                <div className="flex flex-col gap-16 md:gap-10  md:grid grid-cols-2">
                    <motion.div
                        animate={{ y: 10 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        className="-mt-28 mx-auto md:hidden ">
                        <CustomBg />
                    </motion.div>
                    <div className="flex  grid grid-cols-3 md:gap-10">
                        <div className="flex flex-col justify-center px-5 text-xl text-violet-900 gap-5 mr-25">
                            <a href="https://www.linkedin.com/in/hamza-mejdoubi-13474a14a/" className="hover:text-violet-600 hover:text-2xl">
                                <SlSocialLinkedin className="transition-all duration-300"/>
                            </a>
                            <a href="/" className="hover:text-violet-600 hover:text-2xl">
                                <SlSocialDribbble className="transition-all duration-300"/>
                            </a>
                            <a href="/" className="hover:text-violet-600 hover:text-2xl">
                                <FiGithub className="transition-all duration-300"/>
                            </a>
                        </div>
                        <div className="col-span-2">
                            <h1 className="text-5xl font-bold">Hi, I'm Hamza </h1>
                            <h3 className="text-xl font-medium text-gray-500 mt-4">Frontend Developer</h3>
                            <p className="text-l font-normal text-gray-500 mt-4 mb-6">High level experience in web development and knowledge, producing quality work.</p>
                            <Link to="contact" spy={true} smooth={true} offset={-40} duration={500}
                                  className="bg-violet-700 py-4 px-3 mt-4 flex inline-flex text-slate-100
                                         font-medium rounded-lg items-center gap-1 cursor-pointer hover:bg-violet-800">
                                Contact Me <DiDoctrine className="text-2xl" />
                            </Link>
                        </div>
                    </div>

                    <motion.div
                        animate={{ x: -20 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        className="hidden md:flex -mt-6 justify-center">
                        <CustomBg />
                    </motion.div>
                </div>
                <div className="max-w-6xl mx-auto md:px-44 py-16 flex justify-center md:justify-start">
                    <Link to="footer" spy={true} smooth={true} offset={-40} duration={500}
                          className="w-40 flex font-medium gap-1 items-center px-2 cursor-pointer"
                    >
                        <CgMouse className="text-2xl text-violet-900" />
                        Scroll down
                        <HiOutlineArrowSmRight className="text-2xl text-violet-900 hover:rotate-90 transition-all duration-500"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;