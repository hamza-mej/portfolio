import React from 'react';
import selfie from "../assets/me.jpg";

const CustomBg = () => {
    
    return (
<div className="flex justify-center items-center p-8 min-h-[45vh] sm:min-h-[55vh] md:min-h-[65vh] lg:min-h-[80vh]">            <div className="relative group">
                {/* Main container with gradient background */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem]">
                    {/* Animated gradient background - using blob shape with percentage-based transforms */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 576 576">
                        <defs>
                            <mask id="blobMask1">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" 
                                    fill="white" 
                                    transform="scale(2.2) translate(30, 40)"
                                />
                            </mask>
                            <mask id="blobMask2">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" 
                                    fill="white" 
                                    transform="scale(1.9) translate(50, 60)"
                                />
                            </mask>
                            <mask id="blobMask3">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" 
                                    fill="white" 
                                    transform="scale(1.4) translate(100, 100)"
                                />
                            </mask>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#bgGradient1)" mask="url(#blobMask1)" className="animate-pulse opacity-80" style={{animationDelay: '1s'}}/>
                        <rect width="100%" height="100%" fill="url(#bgGradient2)" mask="url(#blobMask2)" className="animate-pulse opacity-50" style={{animationDelay: '1s'}} />
                        <rect width="100%" height="100%" fill="url(#bgGradient3)" mask="url(#blobMask3)" className="animate-pulse opacity-30" style={{animationDelay: '2s'}} />
                    </svg>
                    
                    {/* Main SVG shape - centered within the container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg 
                            className="relative fill-gradient w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-88 xl:h-88 drop-shadow-2xl transform transition-transform duration-300 hover:scale-105" 
                            viewBox="0 0 200 187" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                {/* Background gradients for blob shapes */}
                                <linearGradient id="bgGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#7c3aed" />
                                    <stop offset="50%" stopColor="#8b5cf6" />
                                    <stop offset="100%" stopColor="#4338ca" />
                                </linearGradient>
                                
                                <linearGradient id="bgGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#3b82f6" />
                                    <stop offset="50%" stopColor="#8b5cf6" />
                                    <stop offset="100%" stopColor="#7c3aed" />
                                </linearGradient>
                                
                                <linearGradient id="bgGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#6366f1" />
                                    <stop offset="50%" stopColor="#7c3aed" />
                                    <stop offset="100%" stopColor="#3b82f6" />
                                </linearGradient>
                                
                                {/* Gradient definitions */}
                                <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#6366f1" />
                                    <stop offset="50%" stopColor="#8b5cf6" />
                                    <stop offset="100%" stopColor="#3b82f6" />
                                </linearGradient>
                                
                                {/* Background blur for image */}
                                <radialGradient id="backgroundBlur" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#1e1b4b" />
                                    <stop offset="50%" stopColor="#312e81" />
                                    <stop offset="100%" stopColor="#4c1d95" />
                                </radialGradient>
                                
                                {/* Overlay gradient for depth */}
                                <radialGradient id="overlayGradient" cx="30%" cy="30%" r="70%">
                                    <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                                </radialGradient>
                                
                                {/* Subtle pattern overlay */}
                                <pattern id="pattern" patternUnits="userSpaceOnUse" width="20" height="20">
                                    <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)" />
                                </pattern>
                                
                                {/* Noise texture */}
                                <filter id="noiseFilter">
                                    <feTurbulence baseFrequency="0.9" numOctaves="3" result="noise" />
                                    <feColorMatrix in="noise" type="saturate" values="0"/>
                                    <feBlend in="SourceGraphic" in2="noise" mode="multiply" opacity="0.05"/>
                                </filter>
                                
                                {/* Mask for the blob shape */}
                                <mask id="mask0" maskType="alpha">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                </mask>

                                {/* Mask for profile image - same blob shape */}
                                <mask id="imageMask">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" 
                                        fill="white"
                                    />
                                </mask>
                            </defs>
                            
                            <g mask="url(#mask0)">
                                {/* Main shape with gradient */}
                                <path 
                                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
                                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
                                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
                                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                                    fill="url(#shapeGradient)"
                                    filter="url(#noiseFilter)"
                                />
                                
                                {/* Pattern overlay */}
                                <path 
                                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
                                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
                                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
                                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                                    fill="url(#pattern)"
                                />
                                
                                {/* Background blur effect behind image - unified scaling */}
                                <path 
                                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" 
                                    fill="url(#backgroundBlur)" 
                                    opacity="0.4"
                                    transform="scale(1.08)"
                                    transform-origin="100 93"
                                />
                                
                                {/* Overlay gradient for depth - unified scaling */}
                                <path 
                                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" 
                                    fill="url(#overlayGradient)" 
                                    opacity="0.2"
                                    transform="scale(1.04)"
                                    transform-origin="100 93"
                                />
                            </g>

                            {/* Profile Image with blob mask */}
                            <foreignObject x="0" y="0" width="200" height="187" mask="url(#imageMask)">
                                <div className="w-full h-full flex items-center justify-center p-4">
                                    <img 
                                        src={selfie}
                                        alt="Profile"
                                        className="w-full h-full object-cover opacity-75"
                                        style={{
                                            filter: 'brightness(1.15) contrast(1.2) saturate(1.1) drop-shadow(0 8px 16px rgba(0,0,0,0.4))',
                                            transform: 'scale(1.1)'
                                        }}
                                    />
                                </div>
                            </foreignObject>
                        </svg>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-8 left-8 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-70 animate-bounce delay-300"></div>
                    <div className="absolute bottom-8 right-8 w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-70 animate-bounce delay-700"></div>
                    <div className="absolute top-1/3 right-4 w-4 h-4 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-70 animate-bounce delay-1000"></div>
                    <div className="absolute bottom-1/3 left-4 w-5 h-5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-70 animate-bounce delay-1300"></div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-12 left-16 w-2 h-2 bg-white rounded-full opacity-60 animate-ping delay-200"></div>
                        <div className="absolute bottom-16 right-12 w-1 h-1 bg-white rounded-full opacity-60 animate-ping delay-500"></div>
                        <div className="absolute top-24 right-20 w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-ping delay-800"></div>
                        <div className="absolute bottom-24 left-20 w-1 h-1 bg-white rounded-full opacity-60 animate-ping delay-1100"></div>
                        <div className="absolute top-1/2 left-8 w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-ping delay-1400"></div>
                        <div className="absolute top-1/2 right-8 w-1 h-1 bg-white rounded-full opacity-60 animate-ping delay-1700"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomBg;