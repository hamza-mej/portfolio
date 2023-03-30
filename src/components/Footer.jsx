import React from 'react';
import {BsInstagram} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";
import {RxDiscordLogo} from "react-icons/rx";
import {TbCopyright} from "react-icons/tb";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
    return (
        <div id="footer" className="w-full h-5/6 bg-violet-700">
            <div className="max-w-4xl mx-auto pb-10 pt-10">
                <div className="flex flex-col items-center gap-8 md:gap-0 md:grid grid-cols-3 py-5">
                    <div className="text-slate-200 hover:text-slate-100">
                        <h2 className="text-5xl font-bold">Hamza</h2>
                        <span className="font-medium text-sm flex justify-center md:justify-start">Frontend developer</span>
                    </div>
                    <div className="flex justify-around gap-8 md:gap-0 text-base font-medium text-slate-200 hover:text-slate-100">
                        <a href="/" className="">Services</a>
                        <a href="/" className="">Portfolio</a>
                        <a href="/" className="">Contactme</a>
                    </div>
                    <div className="flex justify-center gap-8 text-4xl md:text-xl font-bold text-slate-200 hover:text-slate-100">
                        <a href="https://www.linkedin.com/in/hamza-mejdoubi-13474a14a/" className=""><FaLinkedinIn /></a>
                        <a href="https://www.instagram.com/" className=""><BsInstagram/></a>
                        <a href="/" className=""><RxDiscordLogo/></a>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto text-sm text-slate-400 pt-16 flex justify-center items-center gap-1">
                    <TbCopyright/>
                    Hamzacode. All right reserved
                </div>
            </div>
            <ScrollToTop smooth color="white" width="22" height="22" className="!bg-violet-700 !text-sm flex items-center justify-center"/>
        </div>
    );
}

export default Footer;