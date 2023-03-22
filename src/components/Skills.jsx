import React, {useState} from 'react';
import {BsBraces} from "react-icons/bs";
import {FaChevronDown} from "react-icons/fa";
import {CiServer} from "react-icons/ci";
import {TbTools} from "react-icons/tb";
import Qualification from "./Qualification";

const Skills = () => {
    const [front, setFront] = useState(false);
    const [back, setBack] = useState(false);
    const [technical, setTechnical] = useState(false);


    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);

    // const handleClick = e => {
    // };

    return (
        <div className="skills w-full h-screen bg-zinc-50">
            <div className="max-w-2xl mx-auto ">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold">Skills</h1>
                    <span className="text-l font-medium text-gray-500 mt-3 ">My technical level</span>
                </div>
                <div className="flex grid grid-cols-2 gap-10 py-20">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-5 px-5 mb-8 cursor-pointer"
                             onClick={() =>
                             {
                                 setIsActive1(current => !current);
                                 setFront(prevState => !prevState )
                                 if (technical){
                                     setTechnical(!technical)}
                                 else if(back){
                                     setBack(!back)
                                 }}
                             }>
                            <BsBraces className="text-3xl text-violet-900"/>
                            <div className="grow">
                                <h1 className="text-xl font-semibold cursor-pointer">Frontend developer</h1>
                                <span className="text-m text-gray-500">More than 2 years</span>
                            </div>
                        <FaChevronDown className={isActive1 ? 'open transition-all ease-in-out duration-500'
                                : 'transition-all ease-in-out duration-500'}
                                />
                        </div>
                        { front && <div  className="flex flex-col gap-5 pl-[70px]">
                            <div className="">
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>HTML</h3>
                                    <span className="text-gray-500">90%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[90%]"/>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>CSS - Tailwind</h3>
                                    <span className="text-gray-500">90%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[90%]"/>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>JS</h3>
                                    <span className="text-gray-500">80%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[80%]"/>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>REACT JS</h3>
                                    <span className="text-gray-500">85%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[85%]"/>
                                </div>
                            </div>
                        </div> }
                    </div>

                    <div className="flex flex-col">
                        <div className="flex items-center gap-5 px-5 mb-8 cursor-pointer"
                             onClick={() =>
                             {
                                 setIsActive2(current => !current);
                                 setBack(prevState => !prevState )
                                 if (technical){
                                     setTechnical(!technical)}
                                 else if(front){
                                     setFront(!front)
                                 }}
                             }>
                            <CiServer className="text-3xl text-violet-900"/>
                            <div className="grow">
                                <h1 className="text-xl font-semibold cursor-pointer">Backend developer</h1>
                                <span className="text-m text-gray-500">More than 2 years</span>
                            </div>
                            <FaChevronDown className={isActive2 ? 'open transition-all ease-in-out duration-500'
                                : 'transition-all ease-in-out duration-500'}
                            />
                        </div>
                        { back && <div  className="flex flex-col gap-5 pl-[70px]">
                            <div className="">
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>POO - MVC </h3>
                                    <span className="text-gray-500">80%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[80%]"/>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>PHP</h3>
                                    <span className="text-gray-500">80%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[80%]"/>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>SYMFONY</h3>
                                    <span className="text-gray-500">85%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[85%]"/>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>API PLATFORM</h3>
                                    <span className="text-gray-500">80%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[80%]"/>
                                </div>
                            </div>
                        </div> }
                    </div>

                    <div className="flex flex-col">
                        <div className="flex items-center gap-5 px-5 mb-8 cursor-pointer"
                             onClick={() =>
                             {
                                 setIsActive3(current => !current);
                                 // handleClick();
                                 setTechnical(prevState => !prevState )
                                 if (front){
                                     setFront(!front)}
                                 else if(back){
                                     setBack(!back)
                                 }
                             }}>
                            <TbTools className="text-3xl text-violet-900"/>
                            <div className="grow">
                                <h1 className="text-xl font-semibold cursor-pointer">Technical competence</h1>
                                <span className="text-m text-gray-500">More than 4 years</span>
                            </div>
                            <FaChevronDown className={isActive3 ? 'open transition-all ease-in-out duration-500'
                                : 'transition-all ease-in-out duration-500'}
                            />
                        </div>
                        { technical  && <div  className="flex flex-col gap-5 pl-[70px]">
                            <div className="">
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>UML - SCRUM</h3>
                                    <span className="text-gray-500">85%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[85%]"/>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>GIT</h3>
                                    <span className="text-gray-500">90%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[90%]"/>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>DOCKER</h3>
                                    <span className="text-gray-500">60%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[60%]"/>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <h3>PHOTOSHOP - ILLUSTRATOR</h3>
                                    <span className="text-gray-500">65%   </span>
                                </div>
                                <div className="w-full bg-violet-300 rounded-full h-1 dark:violet-200">
                                    <div className="bg-violet-700 h-1 rounded-full w-[65%]"/>
                                </div>
                            </div>
                        </div> }
                    </div>
                </div>
            </div>
            <Qualification />
        </div>
    );
}

export default Skills;