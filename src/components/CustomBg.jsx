import React from 'react';

// Simple User SVG Icon component to replace lucide-react
const UserIcon = ({ size = 48, className = "", strokeWidth = 1.5 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const CustomBg = () => {
    return (
        <div className="flex justify-center items-center p-6 min-h-[32vh] sm:min-h-[39vh] md:min-h-[46vh] lg:min-h-[56vh]">
            <div className="relative group">
                {/* Main container with gradient background */}
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]">
                    {/* Animated gradient background */}
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
                                    transform="scale(2) translate(44, 52)"
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
                        <rect width="100%" height="100%" fill="url(#bgGradient1)" mask="url(#blobMask1)" className="animate-pulse opacity-80" style={{ animationDelay: '1s' }} />
                        <rect width="100%" height="100%" fill="url(#bgGradient2)" mask="url(#blobMask2)" className="animate-pulse opacity-50" style={{ animationDelay: '1s' }} />
                        <rect width="100%" height="100%" fill="url(#bgGradient3)" mask="url(#blobMask3)" className="animate-pulse opacity-30" style={{ animationDelay: '2s' }} />
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center mb-4">
                        <div className="text-center">
                            {/* Person Icon */}
                            <div className="flex justify-center mb-4">
                                <UserIcon 
                                    size={70} 
                                    className="text-[#d2bcff] drop-shadow-lg" 
                                    strokeWidth={1.5}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Main SVG shape - centered within the container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                            className="relative fill-gradient w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 drop-shadow-2xl transform transition-transform duration-300 hover:scale-105"
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

                                {/* Background blur for icons */}
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
                                    <feColorMatrix in="noise" type="saturate" values="0" />
                                    <feBlend in="SourceGraphic" in2="noise" mode="multiply" opacity="0.05" />
                                </filter>

                                {/* Mask for the blob shape */}
                                <mask id="mask0" maskType="alpha">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                </mask>

                                {/* Mask for content - same blob shape */}
                                <mask id="contentMask">
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

                                {/* Background blur effect */}
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

                                {/* Overlay gradient for depth */}
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
                        </svg>
                    </div>

                    {/* Decorative elements - minimal and professional */}
                    <div className="absolute top-6 left-6 w-4 h-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-60"></div>
                    <div className="absolute bottom-6 right-6 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-60"></div>
                    <div className="absolute top-1/3 right-3 w-2 h-2 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full opacity-60"></div>
                    <div className="absolute bottom-1/3 left-3 w-2.5 h-2.5 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-60"></div>

                    {/* Floating particles effect - subtle and professional */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-8 left-11 w-1 h-1 bg-white rounded-full opacity-40"></div>
                        <div className="absolute bottom-11 right-8 w-0.5 h-0.5 bg-white rounded-full opacity-40"></div>
                        <div className="absolute top-17 right-14 w-1 h-1 bg-white rounded-full opacity-40"></div>
                        <div className="absolute bottom-17 left-14 w-0.5 h-0.5 bg-white rounded-full opacity-40"></div>
                        <div className="absolute top-1/2 left-6 w-0.5 h-0.5 bg-white rounded-full opacity-40"></div>
                        <div className="absolute top-1/2 right-6 w-0.5 h-0.5 bg-white rounded-full opacity-40"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomBg;