// NavBar.js - Complete with mobile responsiveness
import React, {useState} from 'react';
import {Link} from 'react-scroll';
import {CgClose, CgMenu} from "react-icons/cg";
import {FiHome} from "react-icons/fi";

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
        <nav className="fixed w-full h-[70px] md:h-[80px] py-3 md:py-4 bg-zinc-50 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center">
                        <div className="text-lg md:text-xl lg:text-2xl font-medium text-gray-700 tracking-wide cursor-pointer">
                            <Link to="home" spy={true} smooth={true} offset={-40} duration={500}>
                                Portfolio
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link 
                            to="home" 
                            spy={true} 
                            smooth={true} 
                            offset={-40} 
                            duration={500} 
                            className="font-medium text-violet-700 text-base lg:text-lg px-3 py-2 cursor-pointer hover:text-violet-800 transition-colors"
                        >
                            Home
                        </Link>
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                className="text-gray-700 hover:text-violet-700 px-3 py-2 text-base lg:text-lg font-medium cursor-pointer transition-colors duration-200"
                                to={link.id} 
                                spy={true} 
                                smooth={true} 
                                offset={-40} 
                                duration={500}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-2xl text-gray-700 hover:text-violet-700 transition-colors p-1"
                        >
                            {open ? <CgClose /> : <CgMenu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden absolute top-[70px] left-0 w-full bg-zinc-50 shadow-lg border-t">
                        <div className="flex flex-col py-2 space-y-1">
                            <Link
                                onClick={closeMenu}
                                to="home"
                                spy={true} 
                                smooth={true} 
                                offset={-40} 
                                duration={500}
                                className="flex items-center justify-center py-3 text-violet-700 text-xl font-medium hover:bg-violet-50 transition-colors"
                            >
                                <FiHome />
                            </Link>
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    onClick={closeMenu}
                                    className="text-gray-700 hover:text-violet-700 hover:bg-violet-50 px-6 py-3 text-lg font-medium cursor-pointer transition-colors duration-200 text-center"
                                    to={link.id} 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-40} 
                                    duration={500}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;