import React from 'react';
// import {BsFillMoonStarsFill} from "react-icons/bs";

const NavBar = () => {
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
            name: "Services",
            id: "services"
        },
        {
            name: "Portfolio",
            id: "portfolio"
        },
        {
            name: "Contact Me",
            id: "contact me"
        },
        // {
        //     name: <BsFillMoonStarsFill/>,
        //     id: "contact me"
        // },
    ];
    return (
        <nav className="fixed w-full h-[80px] py-7 bg-zinc-50 ">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="font-medium text-gray-500 text-lg px-5">
                            <a href="/">Portfolio</a>
                        </div>
                    </div>
                    <div className="">
                        <a href="/" className="text-violet-700 text-lg font-medium mr-3">Home</a>
                        {
                            navLinks.map((link,index)=>(
                                <a
                                  href={link}
                                  key={index}
                                  className="text-gray-900 transition duration-500 hover:text-gray-500
                                             px-3 text-lg font-medium"
                                >
                                    {link.name}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;