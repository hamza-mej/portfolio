// NavBar.js - Updated professional design to match portfolio style
import React, {useState} from 'react';
import {Link} from 'react-scroll';
import {CgClose, CgMenu} from "react-icons/cg";
import {FiHome} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        {
            name: "About",
            id: "about"
        },
        {
            name: "Skills",
            id: "skills"
        },
        {
            name: "Qualification",
            id: "qualification"
        },
        {
            name: "Portfolio",
            id: "portfolio"
        },
        {
            name: "Contact",
            id: "contact"
        }
    ];

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed w-full h-[70px] md:h-[80px] py-3 md:py-4 bg-white/80 backdrop-blur-md z-50 shadow-lg border-b border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-full">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center"
                    >
                        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 tracking-wide cursor-pointer">
                            <Link to="home" spy={true} smooth={true} offset={-40} duration={500}>
                                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                                    Portfolio
                                </span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Desktop Menu */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden md:flex items-center space-x-1"
                    >
                        <Link 
                            to="home" 
                            spy={true} 
                            smooth={true} 
                            offset={-40} 
                            duration={500} 
                            className="font-semibold text-violet-700 text-base lg:text-lg px-4 py-2 cursor-pointer hover:text-violet-800 transition-all duration-300 rounded-lg hover:bg-violet-50"
                        >
                            Home
                        </Link>
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                className="text-gray-700 hover:text-violet-700 px-4 py-2 text-base lg:text-lg font-medium cursor-pointer transition-all duration-300 rounded-lg hover:bg-violet-50 relative group"
                                to={link.id} 
                                spy={true} 
                                smooth={true} 
                                offset={-40} 
                                duration={500}
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                            </Link>
                        ))}
                    </motion.div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setOpen(!open)}
                            className="text-2xl text-gray-700 hover:text-violet-700 transition-colors p-2 rounded-lg hover:bg-violet-50"
                        >
                            {open ? <CgClose /> : <CgMenu />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden absolute top-[70px] left-0 w-full bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100 overflow-hidden"
                        >
                            <div className="flex flex-col py-4 space-y-2">
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                    <Link
                                        onClick={closeMenu}
                                        to="home"
                                        spy={true} 
                                        smooth={true} 
                                        offset={-40} 
                                        duration={500}
                                        className="flex items-center justify-center py-3 text-violet-700 text-xl font-semibold hover:bg-violet-50 transition-colors mx-4 rounded-lg"
                                    >
                                        <FiHome className="mr-2" />
                                        Home
                                    </Link>
                                </motion.div>
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                                    >
                                        <Link
                                            onClick={closeMenu}
                                            className="text-gray-700 hover:text-violet-700 hover:bg-violet-50 px-6 py-3 text-lg font-medium cursor-pointer transition-all duration-300 text-center block mx-4 rounded-lg"
                                            to={link.id} 
                                            spy={true} 
                                            smooth={true} 
                                            offset={-40} 
                                            duration={500}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}

export default NavBar;