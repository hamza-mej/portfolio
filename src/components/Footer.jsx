import React from 'react';
import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import ScrollToTop from "react-scroll-to-top";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
    const socialLinks = [
        {
            icon: <FaLinkedinIn />,
            href: "https://www.linkedin.com/in/hamza-m-13474a14a/",
            label: "LinkedIn"
        },
        {
            icon: <FaGithub />,
            href: "https://github.com/hamza-mej",
            label: "GitHub"
        },
        {
            icon: <HiOutlineMail />,
            href: "mailto:Mejdoubi.hamzaa@gmail.com",
            label: "Email"
        }
    ];

    const navLinks = [
        { name: "Home", to: "home" },
        { name: "Skills", to: "skills" },
        { name: "Projects", to: "portfolio" },
        { name: "Contact", to: "contact" }
    ];

    return (
        <footer id="footer" className="w-full bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 lg:gap-0">
                    {/* Brand Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/3"
                    >
                        <Link 
                            to="home" 
                            spy={true} 
                            smooth={true} 
                            offset={-40} 
                            duration={500} 
                            className="text-3xl md:text-4xl font-bold cursor-pointer inline-block mb-4"
                        >
                            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                                Hamza
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-xs">
                            Full Stack Developer creating modern web applications with cutting-edge technologies.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-300 hover:text-white transition-all duration-300"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={link.label}
                                >
                                    <div className="text-xl">
                                        {link.icon}
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation Links */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="w-full md:w-1/3"
                    >
                        <h3 className="text-lg font-semibold text-white mb-4 md:mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {navLinks.map((link, index) => (
                                <motion.li 
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Link 
                                        to={link.to} 
                                        spy={true} 
                                        smooth={true} 
                                        offset={-40} 
                                        duration={500} 
                                        className="text-gray-400 hover:text-violet-300 transition-colors duration-300 cursor-pointer flex items-center gap-2"
                                    >
                                        <span className="w-2 h-2 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full md:w-1/3"
                    >
                        <h3 className="text-lg font-semibold text-white mb-4 md:mb-6">Contact Info</h3>
                        <address className="not-italic text-gray-400 space-y-3">
                            <p className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <a href="tel:+212648297486" className="hover:text-violet-300 transition-colors">
                                    +212 (0) 648 297 486
                                </a>
                            </p>
                            <p className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <a href="mailto:Mejdoubi.hamzaa@gmail.com" className="hover:text-violet-300 transition-colors">
                                    Mejdoubi.hamzaa@gmail.com
                                </a>
                            </p>
                            <p className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span>Morocco, Casablanca</span>
                            </p>
                        </address>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="border-t border-gray-800 mt-12 md:mt-16 pt-8 text-center text-gray-500 text-sm"
                >
                    <p>
                        &copy; {new Date().getFullYear()} Hamza Mejdoubi. All rights reserved.
                    </p>
                </motion.div>
            </div>

            <ScrollToTop 
                smooth 
                component={<FiArrowUp className="mx-auto text-lg" />}
                className="!bg-violet-600 !text-white !rounded-lg !flex !items-center !justify-center !right-6 !bottom-6 !shadow-lg hover:!bg-violet-700 transition-colors"
                width="40"
                height="40"
            />
        </footer>
    );
}

export default Footer;