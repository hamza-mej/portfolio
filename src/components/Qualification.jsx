import React, {useState} from 'react';
import {SlGraduation} from "react-icons/sl";
import {MdOutlineDateRange, MdWorkOutline} from "react-icons/md";

const Qualification = () => {
    const [education, setEducation] = useState(true);
    const [work, setWork] = useState(false);

    return (
        <div id="qualification" className="w-full h-screen bg-zinc-100 flex flex-col justify-center">
            <div className="max-w-[345px] mx-auto ">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold">Qualification</h1>
                    <span className="text-l font-medium text-gray-500 mt-3 ">My Personal journey</span>
                </div>
                <div className="flex justify-center gap-5 mt-12 text-xl font-medium text-gray-500">
                    <btn className={ education ? "btn flex items-center gap-2 cursor-pointer font-bold shadow rounded-full py-2 px-3" :
                        "flex items-center gap-2 cursor-pointer" }
                        onClick={()=> {
                            setEducation(true)
                            setWork(false)
                        }}>
                        <SlGraduation className="text-2xl"/>
                        Education
                    </btn>
                    <btn className={ work ? "flex items-center gap-2 cursor-pointer font-bold shadow rounded-full py-2 px-3" :
                        "flex items-center gap-2 cursor-pointer" }
                         onClick={()=> {
                             setWork(true)
                             setEducation(false)
                         }}>
                        <MdWorkOutline className="text-2xl"/>
                        Work
                    </btn>
                </div>
                { education && <div className="grid grid-cols-1 pt-10">
                    <div className="flex">
                        <div className="w-full">
                            <h2 className="text-base font-bold">Engineering cycle Computer Engineering</h2>
                            <h3 className="text-gray-600 font-medium text-sm mt-0.5">School - EHEI OUJDA</h3>
                            <span className="flex items-center gap-1.5 text-gray-400 font-medium text-xs py-3">
                                <MdOutlineDateRange/>
                                <h4 className="">2018 - 2021</h4>
                            </span>
                        </div>
                        <div className="w-0.5 bg-violet-300 h-full ">
                            <div className="bg-violet-700 h-3 rounded-full w-3 -ml-[5px]"/>
                        </div>
                        <div className="w-full px-5"/>
                    </div>

                    <div className="flex">
                        <div className="w-full "/>
                        <div className="w-0.5 bg-violet-300  h-full ">
                            <div className="bg-violet-700 h-3 rounded-full w-3 -ml-[5px]"/>
                        </div>
                        <div className="w-full px-5">
                            <h2 className="text-base font-bold">DUT - Computer applications developer</h2>
                            <h3 className="text-gray-600 font-medium text-sm mt-0.5">School - ESTO</h3>
                            <span className="flex items-center gap-1.5 text-gray-400 font-medium text-xs py-3">
                                <MdOutlineDateRange/>
                                <h4 className="">2015 - 2018</h4>
                            </span>
                        </div>
                    </div>

                    <div className="flex ">
                        <div className="w-full">
                                <h2 className="text-base font-bold">Bachelor degree SVT</h2>
                            <h3 className="text-gray-600 font-medium text-sm mt-0.5">School</h3>
                            <span className="flex items-center gap-1.5 text-gray-400 font-medium text-xs py-3">
                                <MdOutlineDateRange/>
                                <h4 className="">2014 - 2015</h4>
                            </span>
                        </div>
                        <div className="">
                            <div className="bg-violet-700 h-3 rounded-full w-3"/>
                        </div>
                        <div className="w-full px-5"/>
                    </div>
                </div>}
                { work && <div className="grid grid-cols-1 pt-6">
                    <div className="flex">
                        <div className="w-full">
                            <h2 className="text-base font-bold">Share Conseil |<br/>
                                (Leadz) </h2>
                            <h3 className="text-gray-600 font-medium text-sm mt-0.5">Agence
                                web digitale à rabat
                            </h3>
                            <span className="flex items-center gap-1.5 text-gray-400 font-medium text-xs py-3">
                                <MdOutlineDateRange/>
                                <h4 className="">2022 - 2023</h4>
                            </span>
                        </div>
                        <div className="w-0.5 bg-violet-300  h-full ">
                            <div className="bg-violet-700 h-3 rounded-full w-3 -ml-[5px]"/>
                        </div>
                        <div className="w-full px-5"/>
                    </div>

                    <div className="flex">
                        <div className="w-full "/>
                        <div className="w-0.5 bg-violet-300  h-full ">
                            <div className="bg-violet-700 h-3 rounded-full w-3 -ml-[5px]"/>
                        </div>
                        <div className="w-full px-5">
                            <h2 className="text-base font-bold">Ahla Media</h2>
                            <h3 className="text-gray-600 font-medium text-sm mt-0.5">Agence de marketing digital à oujda</h3>
                            <span className="flex items-center gap-1.5 text-gray-400 font-medium text-xs py-3">
                                <MdOutlineDateRange/>
                                <h4 className="">2022</h4>
                            </span>
                        </div>
                    </div>

                    <div className="flex ">
                        <div className="w-full">
                            <h2 className="text-base font-bold">Stage PFE | FCPO</h2>
                            <h3 className="text-gray-600 font-medium text-sm mt-0.5">agence web experte en développement des sites web à oujda</h3>
                            <span className="flex items-center gap-1.5 text-gray-400 font-medium text-xs py-3">
                                <MdOutlineDateRange/>
                                <h4 className="">2021</h4>
                            </span>
                        </div>
                        <div className="w-0.5 bg-violet-300  h-full ">
                            <div className="bg-violet-700 h-3 rounded-full w-3 -ml-[5px]"/>
                        </div>
                        <div className="w-full px-5"/>
                    </div>

                    <div className="flex">
                        <div className="w-full "/>
                        <div className="">
                            <div className="bg-violet-700 h-3 rounded-full w-3 "/>
                        </div>
                        <div className="w-full px-5">
                            <h2 className="text-base font-bold">Stage PFA | NB Car</h2>
                            <h3 className="text-gray-600 font-medium text-sm mt-0.5">Agence location de voiture à oujda</h3>
                            <span className="flex items-center gap-1.5 text-gray-400 font-medium text-xs py-3">
                                <MdOutlineDateRange/>
                                <h4 className="">2018</h4>
                            </span>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default Qualification;