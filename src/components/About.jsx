import React from 'react';
import {BsDownload} from "react-icons/bs";
import prog from "./../assets/prog.jpg";
import CountUp from 'react-countup';
import { useInView } from 'react-hook-inview'

const About = () => {

    const [ref, inView] = useInView()

    return (
        <div id="about" className="w-full h-screen bg-zinc-50 md:bg-zinc-100 flex items-center">
            <div className="max-w-6xl mx-auto  flex flex-col justify-center">
                <div className="flex flex-col items-center pt-4">
                    <h1 className="text-4xl font-bold">About Me</h1>
                    <span className="text-l font-medium text-gray-500 mt-3 ">My introduction</span>
                </div>
                <div className="flex flex-col md:grid grid-cols-2 pt-10 gap-10 md:gap-32 md:pt-20 pb-4">
                    <div className="relative w-72 h-52 md:w-none md:h-none mx-auto mx-none">
                        <img className="absolute w-full h-full rounded-xl shadow-lg" src={prog} alt="me"/>
                    </div>
                    <div className="flex flex-col px-14 md:px-0 md:w-[350px]">
                        <p className="text-lg md:text-l font-medium text-gray-500">Web developer, with extensive knowledge and years of experience,
                            working in web technologies, delivering quality work.</p>
                        <div className="flex grid grid-cols-3  py-8">
                            <div className="flex flex-col items-center justify-center" ref={ref}>
                                { inView ? <h1 className="text-2xl font-medium"><CountUp start={-10} end={2} duration={4} />+</h1> : null}
                                <span className="text-center text-gray-500">Years experience</span>
                            </div>
                            <div className="flex flex-col items-center justify-center" ref={ref}>
                                { inView ? <h1 className="text-2xl font-medium"><CountUp start={-10} end={5} duration={5} />+</h1> : null}
                                <span className="text-center text-gray-500">Completed projects</span>
                            </div>
                            <div className="flex flex-col items-center justify-center" ref={ref}>
                                { inView ? <h1 className="text-2xl font-medium"><CountUp start={-10} end={4} duration={3} />+</h1> : null}
                                <span className="text-center text-gray-500">Companies worked</span>
                            </div>
                        </div>
                        <div className="flex justify-center md:flex-none md:justify-start">
                            <a
                                href="/public/CV-MEJDOUBI-Hamza.pdf"
                                download="CV-MEJDOUBI-Hamza.pdf"
                                className="bg-violet-700 hover:bg-violet-800 py-4 px-3 md:mt-4 inline-flex text-slate-50
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