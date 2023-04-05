import React, {useState} from 'react';
import {Link} from 'react-scroll';
import {CgClose, CgMenu} from "react-icons/cg";
import {FiHome} from "react-icons/fi";

const NavBar = () => {
    const [ open, setOpen] = useState(false);

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
    return (
        <nav className="fixed w-screen h-[80px] py-7 bg-zinc-50 z-50" >
            <div className="md:max-w-6xl mx-auto">
                <div className="md:flex items-center justify-between  ">
                    <div className="flex items-center justify-between px-6 md:px-0">
                        <div className="first-letter:text-2xl md:first-letter:text-xl font-medium text-gray-500 text-xl md:text-lg
                                        tracking-widers cursor-pointer">
                            <Link to="home" spy={true} smooth={true} offset={-40} duration={500}>Portfolio</Link>
                        </div>
                        <div className="md:hidden text-2xl" onClick={()=> {
                            setOpen(prevState => !prevState)
                        }}>
                            {open ? <CgClose/> : <CgMenu/> }
                        </div>
                    </div>
                    <div className="hidden md:flex">
                        <div className="">
                            <Link to="home" spy={true} smooth={true} offset={-40} duration={500} className="font-medium text-violet-700  text-xl mr-3 cursor-pointer">Home</Link>
                            {
                                navLinks.map((link,index)=>(
                                    <Link

                                        key={index}
                                        className="text-gray-900 transition duration-800 drop-shadow-lg shadow-black hover:text-violet-700
                                             hover:drop-shadow-lg px-3 text-lg font-medium cursor-pointer"
                                        to={link.id} spy={true} smooth={true} offset={-40} duration={500}
                                    >
                                        {link.name}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    {open &&
                        <div className="flex flex-col items-center justify-center h-screen gap-10 pb-36 mt-5 md:hidden
                          bg-slate-50">
                            <Link
                                onClick={()=>{
                                setOpen(prevState => !prevState)
                                }}
                                to="home"
                                spy={true} smooth={true} offset={-40} duration={500}
                                className="text-violet-700 text-5xl font-medium"><FiHome/>
                            </Link>
                            {
                                navLinks.map((link,index)=>(
                                    <Link

                                        key={index}
                                        onClick={()=>{
                                            setOpen(prevState => !prevState)
                                        }}
                                        className="text-gray-900 transition duration-800 drop-shadow-lg shadow-black hover:text-violet-700
                                             hover:drop-shadow-lg px-3 text-3xl font-medium cursor-pointer"
                                        to={link.id} spy={true} smooth={true} offset={-40} duration={500}
                                    >
                                        {link.name}
                                    </Link>
                                ))
                            }
                        </div>
                    }
                </div>

            </div>
        </nav>
    );
}

export default NavBar;