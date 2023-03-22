import React from 'react';
import {BsDownload} from "react-icons/bs";
import nd from "./../assets/nd.png";

const About = () => {
    return (
        <div className="w-full h-screen bg-zinc-50">
            <div className="max-w-6xl mx-auto py-20">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold">About Me</h1>
                    <span className="text-l font-medium text-gray-500 mt-3 ">My introduction</span>
                </div>
                <div className="flex grid grid-cols-2 gap-10 py-20">
                    <div className="h-60 w-60 w-full mx-auto">
                        {/*<img className="" src={nd} alt="me"/>*/}
                    </div>
                    <div className="flex flex-col w-[350px]">
                        <p className="text-l font-medium text-gray-500">Web developer, with extensive knowledge and years of experience, working in web technologies
                        and Ui / Ux design, delivering quality work.</p>
                        <div className="flex grid grid-cols-3 py-8">
                            <div className="flex flex-col items-center justify-center">
                                <h1 className="text-2xl font-medium">08+</h1>
                                <span className="text-center text-gray-500">Years experience</span>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h1 className="text-2xl font-medium">20+</h1>
                                <span className="text-center text-gray-500">Completed projects</span>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h1 className="text-2xl font-medium">05+</h1>
                                <span className="text-center text-gray-500">Companies worked</span>
                            </div>
                        </div>
                        <div>
                            <a href="/" className="bg-violet-700 py-4 px-3 mt-4 inline-flex text-slate-50
                                                font-medium rounded-lg items-center gap-4">
                                Download CV <BsDownload className="text-xl" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;