'use client';

import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export default function SmartHomes() {
    return (
        <section id="smart-homes" className="py-20 text-white bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 leading-none pb-2">
                        Smart Homes Solutions: The Future of Living
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                        Step into the future with a smart home that adapts to your needs. From enhanced security to effortless convenience, our solutions transform your living experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                        <img
                            src="/images/smart-home.avif"
                            alt="Smart Home"
                            className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500 mb-4">
                            Your Home, Smarter and Safer
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Imagine a home that works for you. Whether it's securing your family, automating your daily routines, or reducing your energy bills, our smart home solutions offer a seamless experience.
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-3">
                            <li><span className="text-white font-semibold">Smart Security:</span> Facial recognition, motion sensors, and instant alerts for peace of mind.</li>
                            <li><span className="text-white font-semibold">Energy Efficiency:</span> Thermostats and lighting that adjust to your lifestyle, saving you money and the planet.</li>
                            <li><span className="text-white font-semibold">Effortless Control:</span> Manage everything with your voice or mobile app – it’s that easy.</li>
                            <li><span className="text-white font-semibold">Remote Access:</span> Check in anytime, anywhere, to see live feeds or control your home appliances remotely.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
                        <h3 className="text-2xl font-semibold text-blue-400 mb-3">Top-notch Security</h3>
                        <p className="text-gray-300">Keep an eye on your home 24/7 with smart surveillance and real-time updates.</p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
                        <h3 className="text-2xl font-semibold text-green-400 mb-3">Automated Comfort</h3>
                        <p className="text-gray-300">Make your home work for you with automation that adjusts your lights, temperature, and appliances without lifting a finger.</p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
                        <h3 className="text-2xl font-semibold text-purple-400 mb-3">Seamless Connectivity</h3>
                        <p className="text-gray-300">Control your smart devices from anywhere in the world with integrated systems that keep everything in sync.</p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-gradient">Ready to Make Your Home Smarter?</h2>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                        Our IoT solutions can elevate your living experience. Contact us today to learn how we can make your home smarter, safer, and more efficient.
                    </p>
                </div>

                <div className="mt-16 text-center">
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
