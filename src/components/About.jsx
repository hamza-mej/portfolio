import React from 'react';
import { BsDownload, BsCode, BsLightbulb } from "react-icons/bs";
import { FaAward, FaProjectDiagram, FaBuilding } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import prog from "./../assets/prog.jpg";
import CountUp from 'react-countup';
import { useInView } from 'react-hook-inview';
import { motion } from "framer-motion";

const About = () => {
    const [ref, inView] = useInView();

    const stats = [
        {
            icon: <FaAward className="text-violet-600" />,
            value: 3,
            label: "Years experience",
        },
        {
            icon: <FaProjectDiagram className="text-blue-600" />,
            value: 20,
            label: "Completed projects",
        },
        {
            icon: <FaBuilding className="text-green-600" />,
            value: 3,
            label: "Companies worked",
        }
    ];

    const highlights = [
        {
            icon: <BsCode className="text-violet-600" />,
            title: "Clean Code",
            description: "Writing maintainable and scalable code"
        },
        {
            icon: <MdSpeed className="text-blue-600" />,
            title: "Performance",
            description: "Optimized and fast web applications"
        },
        {
            icon: <BsLightbulb className="text-green-600" />,
            title: "Innovation",
            description: "Modern solutions for complex problems"
        }
    ];

    return (
        <div id="about" className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 py-12 px-4">
            <div className="max-w-6xl mx-auto w-full">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                        About Me
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 font-medium">
                        My introduction
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="flex flex-col lg:grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-2 w-full max-w-sm mx-auto lg:mx-0"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 rounded-2xl blur-2xl opacity-20"></div>
                            <div className="relative bg-white rounded-2xl shadow-xl p-1 border border-gray-100">
                                <img
                                    className="w-full h-80 lg:h-96 object-cover rounded-xl"
                                    src={prog}
                                    alt="Hamza Mejdoubi - Developer"
                                />
                                <div className="absolute inset-1 bg-gradient-to-t from-violet-600/10 to-transparent rounded-xl pointer-events-none"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-3 space-y-8"
                    >
                        {/* Description */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    Full Stack Developer
                                </h3>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                                    I'm a passionate full-stack developer with extensive experience in modern web technologies, specializing in PHP development with Symfony, React, and Next.js. As a versatile and autonomous professional, I excel at all technical stages of web development—from analyzing requirements and backend architecture to frontend implementation, testing, and maintenance. My focus centers on creating innovative, user-friendly applications that deliver exceptional experiences while maintaining robust performance.                                </p>
                            </div>

                            {/* Highlights */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {highlights.map((highlight, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                        className="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                            {highlight.icon}
                                        </div>
                                        <h4 className="font-semibold text-gray-800 mb-2">{highlight.title}</h4>
                                        <p className="text-sm text-gray-600">{highlight.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Statistics - Clean style with counting animation */}
                        <div className="grid grid-cols-3 gap-4 md:gap-6" ref={ref}>
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-violet-600 mb-2">
                                        {inView ? (
                                            <CountUp start={-10} end={stat.value} duration={2.5} />
                                        ) : (
                                            stat.value
                                        )}
                                        <span className="text-violet-600">+</span>
                                    </div>

                                    <span className="text-sm md:text-base text-gray-500 font-medium">
                                        {stat.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button - Centered */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="pt-6 flex justify-center"
                        >
                            <a
                                href="/CV_Hamza_MEJDOUBI.pdf"
                                download="CV_Hamza_MEJDOUBI.pdf"
                                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 py-4 px-8 inline-flex text-white font-semibold rounded-xl items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
                            >
                                <BsDownload className="text-lg group-hover:animate-bounce" />
                                Download CV
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default About;