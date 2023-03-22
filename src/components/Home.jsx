import React from 'react';
// import {BsFillMoonStarsFill} from "react-icons/bs";
import {DiDoctrine} from "react-icons/di";
import {SlSocialLinkedin} from "react-icons/sl";
import {SlSocialDribbble} from "react-icons/sl";
import {FiGithub} from "react-icons/fi";
import {CgMouse} from "react-icons/cg";
import {HiOutlineArrowSmRight} from "react-icons/hi";

import CustomBg from "./CustomBg";


const Home = () => {
    return (
        <section className="w-full h-screen bg-zinc-50 py-40">
            <div className="flex gap-10 max-w-6xl mx-auto grid grid-cols-2">
                <div className="flex  grid grid-cols-3">
                    <div className="flex flex-col justify-center px-5 text-xl text-violet-900 gap-5 mr-25">
                        <a href="/"><SlSocialLinkedin/></a>
                        <a href="/"><SlSocialDribbble/></a>
                        <a href="/"><FiGithub/></a>
                    </div>
                    <div className="col-span-2">
                        <h1 className="text-5xl font-bold">Hi, I'am Hamza </h1>
                        <h3 className="text-xl font-medium text-gray-500 mt-4">Frontend Developer</h3>
                        <p className="text-l font-normal text-gray-500 mt-4 mb-6">High level experiencein web design and knowledge, producing quality work.</p>
                        <a href="/" className="bg-violet-700 py-4 px-3 mt-4 flex inline-flex text-slate-200
                                                font-medium rounded-lg items-center gap-1">
                            Contact Me <DiDoctrine />
                        </a>
                    </div>
                </div>
                <div className="-mt-6">
                    <CustomBg />
                </div>
            </div>
            <div className=" max-w-6xl mx-auto px-44 py-16">
                <a href="/" className="w-40 flex font-medium gap-1 items-center px-2">
                    <CgMouse className="text-2xl text-violet-900" />
                    <span>Scroll down</span>
                    <HiOutlineArrowSmRight className="text-2xl text-violet-900 hover:rotate-90 transition-all duration-500"/>
                </a>
            </div>
        </section>
    );
}

export default Home;