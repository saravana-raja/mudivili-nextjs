import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export default function Careers() {
    return (
        <section id="careers" className="py-20 text-white bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Join Mudivili Technologies
                    </h1>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                        Innovate with us in IoT, edge computing, and embedded systems.
                    </p>
                </div>

                {/* Role Description */}
                <div className="p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
                    <h2 className="text-2xl font-semibold text-blue-400 mb-3">Firmware Scientist</h2>
                    <p className="text-gray-300">
                        This is a full-time on-site role in Chennai. The Firmware Scientist will be responsible for developing and testing firmware for embedded systems, analyzing system requirements, and implementing firmware solutions to meet project needs.
                    </p>
                </div>

                {/* Qualifications */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500 mb-4 text-center">
                        Qualifications & Skills
                    </h2>
                    <ul className="list-disc list-inside text-gray-400 space-y-3 max-w-3xl mx-auto">
                        <li><span className="text-white font-semibold">Firmware Development:</span> Experience in firmware development and testing.</li>
                        <li><span className="text-white font-semibold">Embedded Systems:</span> Strong knowledge of embedded systems and real-time computing.</li>
                        <li><span className="text-white font-semibold">System Analysis:</span> Ability to analyze and define system requirements.</li>
                        <li><span className="text-white font-semibold">Problem-Solving:</span> Excellent debugging and troubleshooting skills.</li>
                        <li><span className="text-white font-semibold">Programming:</span> Proficiency in C and C++ for embedded software.</li>
                        <li><span className="text-white font-semibold">Version Control:</span> Experience using Git for version control.</li>
                        <li><span className="text-white font-semibold">Education:</span> Bachelor's degree in Computer Science, Electrical Engineering, or a related field.</li>
                    </ul>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
                        Ready to Build the Future?
                    </h2>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                        If you are passionate about embedded systems and firmware development, apply now and become a part of Mudivili Technologies.
                    </p>

                    <div className="mt-6 flex justify-center space-x-6">
                        <a
                            href="mailto:careers@mudivilitec.com"
                            className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            <Mail className="w-5 h-5 mr-2" /> Apply via Email
                        </a>
                        <a
                            href="https://wa.me/917305087414"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" /> Contact via WhatsApp
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
