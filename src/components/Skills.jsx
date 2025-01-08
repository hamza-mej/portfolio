import React, {useState} from 'react';
import {BsBraces} from "react-icons/bs";
import {FaChevronDown} from "react-icons/fa";
import {CiServer} from "react-icons/ci";
import {TbTools} from "react-icons/tb";

const Skills = () => {
    const [activeDiv, setActiveDiv] = useState(1);

    const handleDivClick = (divNumber) => {
        if (activeDiv === divNumber) {
            setActiveDiv(0);
        } else {
            setActiveDiv(divNumber);
        }
    };

    return (
        <div id="skills" className="skills w-full h-screen bg-zinc-50 flex items-center">
            <div className="max-w-2xl mx-auto">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold">Skills</h1>
                    <span className="text-l font-medium text-gray-500 mt-3 ">My technical level</span>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-10 pt-20">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-5 px-5 mb-8 cursor-pointer"
                             onClick={() =>handleDivClick(1)}>
                            <BsBraces className="text-3xl text-violet-900"/>
                            <div className="grow">
                                <h1 className="text-xl font-semibold cursor-pointer">Frontend developer</h1>
                                <span className="text-m text-gray-500">More than 2 years</span>
                            </div>
                        <FaChevronDown className={activeDiv === 1 ? 'open': ''}
                                />
                        </div>
                        <div style={{ display: activeDiv === 1 ? "block" : "none" }}  className="flex flex-col gap-5 pl-[70px]">
                            <div className="mb-3">
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>HTML</h3>
                                    <span className="text-gray-500">80%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[80%]"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>CSS - Bootstrap - Tailwind</h3>
                                    <span className="text-gray-500">80%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[80%]"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>JS</h3>
                                    <span className="text-gray-500">70%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[70%]"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>REACT JS - Redux Toolkit</h3>
                                    <span className="text-gray-500">75%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[75%]"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex items-center gap-5 px-5 mb-8 cursor-pointer"
                             onClick={() =>handleDivClick(2)}>
                            <CiServer className="text-3xl text-violet-900"/>
                            <div className="grow">
                                <h1 className="text-xl font-semibold cursor-pointer">Backend developer</h1>
                                <span className="text-m text-gray-500">More than 2 years</span>
                            </div>
                            <FaChevronDown className={activeDiv === 2 ? 'open': ''}
                            />
                        </div>
                        <div style={{ display: activeDiv === 2 ? "block" : "none" }} className="flex flex-col gap-5 pl-[70px]">
                            <div className="mb-3">
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>POO - MVC </h3>
                                    <span className="text-gray-500">70%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[70%]"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>PHP</h3>
                                    <span className="text-gray-500">70%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[70%]"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>SYMFONY</h3>
                                    <span className="text-gray-500">75%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[75%]"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>API PLATFORM</h3>
                                    <span className="text-gray-500">70%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[70%]"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex items-center gap-5 px-5 mb-8 cursor-pointer"
                             onClick={() =>handleDivClick(3)}>
                            <TbTools className="text-3xl text-violet-900"/>
                            <div className="grow">
                                <h1 className="text-xl font-semibold cursor-pointer">Technical competence</h1>
                                <span className="text-m text-gray-500">More than 4 years</span>
                            </div>
                            <FaChevronDown className={activeDiv === 3 ? 'open': ''}
                            />
                        </div>
                        <div style={{ display: activeDiv === 3 ? "inline-block" : "none" }} className="flex flex-col pl-[70px]">
                            <div className="mb-3">
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>UML - SCRUM</h3>
                                    <span className="text-gray-500">75%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[75%]"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>GIT</h3>
                                    <span className="text-gray-500">80%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[80%]"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>DOCKER</h3>
                                    <span className="text-gray-500">60%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[60%]"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>PHOTOSHOP - ILLUSTRATOR</h3>
                                    <span className="text-gray-500">65%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[65%]"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;