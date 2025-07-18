import React, { useState } from 'react';
import { SlGraduation } from "react-icons/sl";
import { MdOutlineDateRange, MdWorkOutline } from "react-icons/md";

const Qualification = () => {
    const [activeTab, setActiveTab] = useState('education');

    const educationData = [
        {
            title: "Engineering cycle Computer Engineering",
            institution: "EHEI OUJDA",
            period: "2018 - 2021",
            description: "Specialized in software development and system engineering"
        },
        {
            title: "DUT - Computer applications developer",
            institution: "ESTO",
            period: "2015 - 2018",
            description: "Focused on application development and programming"
        },
        {
            title: "Bachelor degree SVT",
            institution: "School",
            period: "2014 - 2015",
            description: "Science and Life Sciences foundation"
        }
    ];

    const workData = [
        {
            title: "ECODEXIA",
            institution: "Entreprise de logiciels à Casablanca",
            period: "Feb 2025 - Present",
            duration: "Present (since Feb 2025)",
            type: "On-site",
            description: "Ecodexia provides AI based solutions to help companies of all sizes"
        },
        {
            title: "TOMOES",
            institution: "Agence de développement - MARRAKESH",
            period: "July 2023 - Jan 2025",
            duration: "1 year 4 months",
            type: "Remote",
            description: "Development agency specializing in web solutions"
        },
        {
            title: "Share Conseil",
            institution: "Agence web digitale - RABAT",
            period: "Jan 2022 - Sep 2023",
            duration: "1 year 1 month",
            type: "On-site",
            description: "Digital web agency focused on modern solutions"
        },
        {
            title: "Stage PFE | FCPO",
            institution: "Web development agency - OUJDA",
            period: "2021",
            duration: "6 months",
            type: "Internship",
            description: "Final year internship in web development"
        }
    ];

    const TimelineItem = ({ item, index, isLast }) => (
    <div className="relative mb-12 last:mb-0">
        <div className="flex items-start">
            {/* Timeline connector */}
            <div className="flex flex-col items-center mr-5 mt-5">
                {/* The Dot */}
                <div className="w-4 h-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full shadow-md z-10 border-2 border-white"></div>

                {/* Bottom line */}
                {!isLast && (
                    <div className="w-0.5 bg-gradient-to-b from-violet-300 to-purple-300 h-28 mt-2"></div>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100">
                <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                        {item.title}
                    </h3>
                    <p className="text-base text-gray-600 font-medium mb-1">
                        {item.institution}
                    </p>
                    {item.description && (
                        <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                            {item.description}
                        </p>
                    )}
                </div>

                <div className="flex flex-wrap gap-2 items-center text-sm">
                    <span className="flex items-center gap-1.5 text-violet-600 font-medium bg-violet-50 px-3 py-1 rounded-full">
                        <MdOutlineDateRange className="text-base" />
                        {item.period}
                    </span>

                    {item.duration && (
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">
                            {item.duration}
                        </span>
                    )}

                    {item.type && (
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.type === 'Remote'
                                ? 'bg-green-100 text-green-700'
                                : item.type === 'Internship'
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'bg-orange-100 text-orange-700'
                        }`}>
                            {item.type}
                        </span>
                    )}
                </div>
            </div>
        </div>
    </div>
);



    return (
        <div id="qualification" className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                        Qualification
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 font-medium">
                        My Personal Journey
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white rounded-full shadow-lg p-2 border border-gray-200">
                        <div className="flex gap-2">
                            <button
                                className={`flex items-center gap-3 px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${activeTab === 'education'
                                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md'
                                        : 'text-gray-600 hover:text-violet-600 hover:bg-gray-50'
                                    }`}
                                onClick={() => setActiveTab('education')}
                            >
                                <SlGraduation className="text-xl" />
                                <span>Education</span>
                            </button>
                            <button
                                className={`flex items-center gap-3 px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${activeTab === 'work'
                                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md'
                                        : 'text-gray-600 hover:text-violet-600 hover:bg-gray-50'
                                    }`}
                                onClick={() => setActiveTab('work')}
                            >
                                <MdWorkOutline className="text-xl" />
                                <span>Experience</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Timeline Content */}
                <div className="max-w-2xl mx-auto">
                    {activeTab === 'education' && (
                        <div className="animate-fadeIn">
                            <div className="mb-6">
                                <h2 className="text-xl font-bold text-gray-700 mb-2 flex items-center gap-2">
                                    <SlGraduation className="text-violet-600" />
                                    Educational Background
                                </h2>
                                <p className="text-gray-600">My academic journey and qualifications</p>
                            </div>

                            {educationData.map((item, index) => (
                                <TimelineItem
                                    key={index}
                                    item={item}
                                    index={index}
                                    isLast={index === educationData.length - 1}
                                    isEducation={true}
                                />
                            ))}
                        </div>
                    )}

                    {activeTab === 'work' && (
                        <div className="animate-fadeIn">
                            <div className="mb-6">
                                <h2 className="text-xl font-bold text-gray-700 mb-2 flex items-center gap-2">
                                    <MdWorkOutline className="text-violet-600" />
                                    Professional Experience
                                </h2>
                                <p className="text-gray-600">My career progression and achievements</p>
                            </div>

                            {workData.map((item, index) => (
                                <TimelineItem
                                    key={index}
                                    item={item}
                                    index={index}
                                    isLast={index === workData.length - 1}
                                    isEducation={false}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.6s ease-out;
                }
                
                @media (max-width: 768px) {
                    .timeline-item:hover {
                        transform: translateY(-2px);
                    }
                }
            `}</style>
        </div>
    );
}

export default Qualification;