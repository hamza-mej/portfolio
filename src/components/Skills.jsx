import React, { useState, useEffect } from 'react';
import { BsBraces, BsCode } from "react-icons/bs";
import { FaChevronDown, FaReact, FaPhp, FaGitAlt, FaDocker, FaTasks } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import { TbTools, TbBrandTailwind } from "react-icons/tb";
import { SiJavascript, SiSymfony, SiAdobe, SiNestjs, SiMysql, SiSupabase, SiAdobeillustrator, SiNextdotjs } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";

const Skills = () => {
    const [activeDiv, setActiveDiv] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    useEffect(() => {
        if (isMobile) setActiveDiv(1);
    }, [isMobile]);

    const skillsData = [
        {
            id: 1,
            icon: <BsBraces />,
            title: "Frontend Developer",
            experience: "3+ years",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-50",
            hoverColor: "hover:bg-blue-100",
            skills: [
                { name: "HTML5", percentage: 90, icon: <AiOutlineHtml5 className="text-orange-500" /> },
                { name: "CSS / Tailwind / Bootstrap", percentage: 85, icon: <TbBrandTailwind className="text-blue-400" /> },
                { name: "JavaScript", percentage: 80, icon: <SiJavascript className="text-yellow-500" /> },
                {
                    name: "React JS / Redux / Next Js", percentage: 85, icon: (
                        <div className="flex items-center gap-1">
                            <FaReact className="text-blue-600" />
                            <SiNextdotjs className="text-black dark:text-white" />
                        </div>
                    )
                }
            ]
        },
        {
            id: 2,
            icon: <CiServer />,
            title: "Backend Developer",
            experience: "3+ years",
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-green-50",
            hoverColor: "hover:bg-green-100",
            skills: [
                { name: "OOP / MVC", percentage: 80, icon: <BsCode className="text-gray-600" /> },
                {
                    name: "Node Js / Nest Js", percentage: 70, icon: (
                        <div className="flex items-center gap-1">
                            <FaNodeJs className="text-green-600" />
                            <SiNestjs className="text-red-500" />
                        </div>
                    )
                },
                {
                    name: "PHP / Symfony", percentage: 90, icon: (
                        <div className="flex items-center gap-1">
                            <FaPhp className="text-indigo-600" />
                            <SiSymfony className="text-black" />
                        </div>
                    )
                },
                {
                    name: "API / MySQL / Supabase",
                    percentage: 80,
                    icon: (
                        <div className="flex items-center gap-1">
                            <CiServer className="text-green-600" />
                            <SiMysql className="text-blue-600" />
                            <SiSupabase className="text-emerald-500" />
                        </div>
                    )
                }
            ]
        },
        {
            id: 3,
            icon: <TbTools />,
            title: "Technical Skills",
            experience: "4+ years",
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-purple-50",
            hoverColor: "hover:bg-purple-100",
            skills: [
                { name: "UML / SCRUM", percentage: 85, icon: <FaTasks className="text-blue-500" /> },
                { name: "Git, GitHub", percentage: 90, icon: <FaGitAlt className="text-orange-600" /> },
                { name: "Docker", percentage: 75, icon: <FaDocker className="text-blue-500" /> },
                {
                    name: "Adobe Suite", percentage: 70, icon: (
                        <div className="flex items-center gap-1">
                            <SiAdobe className="text-red-600" />
                            <SiAdobeillustrator className="text-orange-600" />
                        </div>
                    )
                }
            ]
        }
    ];

    const handleDivClick = (divNumber) => {
        if (activeDiv === divNumber) {
            const nextId = divNumber % skillsData.length + 1;
            setActiveDiv(nextId);
        } else {
            setActiveDiv(divNumber);
        }
    };

    const SkillBar = ({ skill, isActive, index }) => (
        <div className="skill-item bg-white rounded-lg p-3 md:p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="text-lg md:text-xl">{skill.icon}</div>
                    <h3 className="text-sm md:text-base font-semibold text-gray-800">{skill.name}</h3>
                </div>
                <span className="text-xs md:text-sm font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-full">{skill.percentage}%</span>
            </div>
            <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-2 md:h-3 overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${skill.percentage >= 80 ? 'bg-gradient-to-r from-green-400 to-green-500' :
                            skill.percentage >= 70 ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
                                'bg-gradient-to-r from-orange-400 to-orange-500'
                            }`}
                        style={{ width: isActive ? `${skill.percentage}%` : '0%' }}
                    />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Beginner</span><span>Intermediate</span><span>Advanced</span>
                </div>
            </div>
        </div>
    );

    return (
        <div id="skills" className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 md:py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                        Skills & Expertise
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 font-medium mb-2">My technical competencies</p>
                    <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className={`transition-all duration-700 ease-in-out ${!isMobile && activeDiv === null ? 'flex items-center justify-center min-h-[40vh] md:min-h-[50vh]' : ''
                    }`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full transition-all duration-700 ease-in-out">
                        {skillsData.map((category) => (
                            <div key={category.id} className="w-full">
                                <div
                                    className={`${category.bgColor} ${category.hoverColor} rounded-xl md:rounded-2xl p-4 md:p-6 mb-3 md:mb-4 cursor-pointer transition-all duration-500 border border-gray-100 shadow-sm hover:shadow-lg md:hover:scale-105 transform`}
                                    onClick={() => handleDivClick(category.id)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 md:gap-4">
                                            <div className={`p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                                                <div className="text-xl md:text-3xl">{category.icon}</div>
                                            </div>
                                            <div>
                                                <h2 className="text-lg md:text-xl font-bold text-gray-800">{category.title}</h2>
                                                <p className="text-xs md:text-sm text-gray-600 font-medium">Experience: {category.experience}</p>
                                            </div>
                                        </div>
                                        <FaChevronDown className={`text-gray-600 transition-transform duration-500 text-sm md:text-base ${activeDiv === category.id ? 'rotate-180' : ''}`} />
                                    </div>
                                </div>

                                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${activeDiv === category.id ? 'max-h-[1000px] opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-4'}`}>
                                    <div className="space-y-4 pb-4">
                                        {category.skills.map((skill, index) => (
                                            <SkillBar key={index} skill={skill} isActive={activeDiv === category.id} index={index} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
