import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export default function AboutUs() {
    return (
        <section id="about-us" className="py-20 text-white bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        About Mudivili Technologies
                    </h1>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                        Transforming industries with innovative IoT and edge computing solutions.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
                        <h2 className="text-2xl font-semibold text-blue-400 mb-3">Our Mission</h2>
                        <p className="text-gray-300">
                            Building secure, scalable, and intelligent systems that bridge technology with real-world applications.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
                        <h2 className="text-2xl font-semibold text-purple-400 mb-3">Our Vision</h2>
                        <p className="text-gray-300">
                            Leading the future of industries through cutting-edge IoT and edge computing platforms.
                        </p>
                    </div>
                </div>

                {/* Core Innovation Section */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500 mb-4">
                        Driving Innovation Through IoT & Edge Computing
                    </h2>
                    <p className="text-gray-300 max-w-3xl mx-auto">
                        We specialize in custom IoT solutions that seamlessly integrate with your infrastructure. Our edge computing platforms process data locally, ensuring low latency and real-time decision-making.
                    </p>
                </div>

                {/* Industry Impact Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col justify-center items-center text-center">
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Innovating Across Industries
                        </h2>
                        <i className="fas fa-cogs text-6xl text-gray-500 mb-4"></i>
                        <p className="text-gray-300 text-lg max-w-md mx-auto">
                            From healthcare to industrial automation, our solutions drive efficiency and scalability. We are committed to delivering secure, high-performance IoT and edge computing systems.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center">
                        <ul className="list-disc list-inside text-gray-400 space-y-3">
                            <li><span className="text-white font-semibold">IoT Systems:</span> Reliable and optimized for seamless device integration.</li>
                            <li><span className="text-white font-semibold">Edge Computing:</span> Low-latency solutions for real-time decision-making.</li>
                            <li><span className="text-white font-semibold">R&D Excellence:</span> Continuous innovation to stay ahead in technology.</li>
                        </ul>
                    </div>
                </div>

                {/* Final CTA with Email and WhatsApp */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
                        Shaping the Future with Technology
                    </h2>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                        At Mudivili Technologies, we push the boundaries of innovation. Whether it's IoT, edge computing, or R&D, we’re committed to creating a more connected and intelligent future.
                    </p>

                    <div className="mt-6 flex justify-center space-x-6">
                        <a
                            href="mailto:info@mudivilitec.com"
                            className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            <Mail className="w-5 h-5 mr-2" /> Email Us
                        </a>
                        <a
                            href="https://wa.me/917305087414"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
