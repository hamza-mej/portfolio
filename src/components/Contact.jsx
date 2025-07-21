import React, { useState } from 'react';
import { FiMail, FiPhoneCall, FiMapPin } from "react-icons/fi";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { motion } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                project: '',
                message: ''
            });
            
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        }, 2000);
    };

    const contactItems = [
        {
            icon: <FiPhoneCall className="text-2xl" />,
            title: "Call Me",
            value: "+212 (0) 648 297 486",
            href: "tel:+212648297486"
        },
        {
            icon: <FiMail className="text-2xl" />,
            title: "Email",
            value: "Mejdoubi.hamzaa@gmail.com",
            href: "mailto:Mejdoubi.hamzaa@gmail.com"
        },
        {
            icon: <FiMapPin className="text-2xl" />,
            title: "Location",
            value: "Morocco, Casablanca",
            href: "https://www.google.com/maps/place/Morocco"
        }
    ];

    return (
        <div id="contact" className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 py-12 md:py-20 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 md:mb-4">
                        Get In <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
                    </h1>
                    <p className="text-base md:text-lg font-medium text-gray-500 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-2/5"
                    >
                        <div className=" rounded-2xl  p-6 md:p-8 border border-gray-100">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8">
                                Contact Information
                            </h2>
                            
                            <div className="space-y-6 md:space-y-8">
                                {contactItems.map((item, index) => (
                                    <div key={index} className="flex gap-4 md:gap-5 items-start">
                                        <div className="p-3 rounded-xl bg-violet-100 text-violet-700 flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                                                {item.title}
                                            </h3>
                                            {item.href ? (
                                                <a 
                                                    href={item.href} 
                                                    className="text-sm md:text-base text-gray-600 hover:text-violet-700 transition-colors"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-sm md:text-base text-gray-600">
                                                    {item.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="w-full lg:w-3/5"
                    >
                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8">
                                Send Me a Message
                            </h2>
                            
                            {submitSuccess && (
                                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                                </div>
                            )}
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                                <div className="relative">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange} 
                                        placeholder="Name"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition-all"
                                    />
                                </div>
                                
                                <div className="relative">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email@example.com"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>
                            
                            <div className="mb-4 md:mb-6">
                                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">
                                    Project (Optional)
                                </label>
                                <input
                                    type="text"
                                    id="project"
                                    name="project"
                                    value={formData.project}
                                    onChange={handleChange}
                                    placeholder="Website Development"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition-all"
                                />
                            </div>
                            
                            <div className="mb-6 md:mb-8">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message..."
                                    required
                                    rows={5}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition-all resize-none"
                                />
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full md:w-auto bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white py-3 px-8 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl ${
                                    isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                                }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <HiOutlinePaperAirplane className="text-xl group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Contact;