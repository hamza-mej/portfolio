import React from 'react';
import {FiMail, FiPhoneCall} from "react-icons/fi";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {AiOutlineSend} from "react-icons/ai";

const Contact = () => {
    return (
        <div id="contact" className="w-full h-screen bg-zinc-100 flex flex-col justify-center">
            <div className="max-w-4xl mx-auto pb-10 pt-10">
                <div className="flex flex-col items-center pb-8 md:pb-12">
                    <h1 className="text-4xl font-bold">Contact Me</h1>
                    <span className="text-l font-medium text-gray-500 mt-3 ">Get in touch</span>
                </div>
                <div className="flex flex-col md:grid grid-cols-5 gap-5 md:-gap-40 px-5 md:p-5">
                    <div className="pl-6 md:pl-10 md:col-span-2">
                        <div className="flex gap-5 items-center py-2">
                            <FiPhoneCall className="text-3xl text-violet-700"/>
                            <div className="">
                                <h1 className="text-xl font-medium">Call Me</h1>
                                <span className="text-xs font-medium text-gray-400">+212 (0) 648 297 486</span>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center py-2">
                            <FiMail className="text-3xl text-violet-700"/>
                            <div className="">
                                <h1 className="text-xl font-medium">Email</h1>
                                <span className="text-xs font-medium text-gray-400">Mejdoubi.hamzaa@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center py-2">
                            <HiOutlineLocationMarker className="text-3xl text-violet-700"/>
                            <div className="">
                                <h1 className="text-xl font-medium">Location</h1>
                                <span className="text-xs font-medium text-gray-400">Maroc - rabat</span>
                            </div>
                        </div>
                    </div>
                    <form method="POST" action="https://getform.io/f/ff0b8d6b-3e8c-46c8-afea-bf17edc13e8a"
                          className="grid grid-cols-2 col-span-3 gap-3 md:gap-5" >
                        <div className="">
                            <input type="text" name="name" placeholder="Name" required className="w-full bg-violet-100 pt-2.5 pb-9 px-3 rounded-lg focus:outline-0
                        placeholder-gray-500"/>
                        </div>
                        <div className="">
                            <input type="email" name="email" placeholder="Email" required className="w-full bg-violet-100 pt-2.5 pb-9 px-3 rounded-lg focus:outline-0
                        placeholder-gray-500"/>
                        </div>
                        <div className="col-span-2">
                            <input type="text" name="project" placeholder="Project" className="w-full bg-violet-100 pt-2.5 pb-9 px-3 rounded-lg focus:outline-0
                        placeholder-gray-500"/>
                        </div>
                        <div className="col-span-2">
                            <input type="text" name="message" placeholder="Message" required className="w-full bg-violet-100 pt-2.5 pb-20 px-3 rounded-lg focus:outline-0
                        placeholder-gray-500"/>
                        </div>
                        <button className="mx-20 md:mx-0 col-span-2 md:col-span-1 bg-violet-700 hover:bg-violet-800 py-4 md:px-3 md:mt-4 flex inline-flex text-slate-100
                                            font-medium rounded-lg items-center gap-2 md:mr-20 justify-center">
                            Send Message <AiOutlineSend className="mt-1 text-xl"/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;