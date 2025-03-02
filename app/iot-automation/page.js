'use client';

import Image from 'next/image';
import React from 'react';

export default function IotAutomation() {
    return (
        <section id="iot-automation" className="py-20 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                        Mudivili Automation for Smart Devices
                    </h1>
                    <p className="mt-4 text-xl text-gray-400">
                        Enhance your operations with seamless IoT automation solutions for smart devices.
                    </p>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                        What is Mudivili Automation?
                    </h2>
                    <p className="text-gray-300 text-lg">
                    Mudivili automation involves using interconnected devices to automate and optimize various processes. By leveraging IoT technology, businesses can achieve real-time monitoring, control, and automation of their operations.
                    </p>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                        Why Use Mudivili Automation?
                    </h2>
                    <p className="text-gray-300 text-lg">
                    Mudivili automation is essential for businesses aiming to improve efficiency and connectivity. Here’s why it's beneficial:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 mt-6 text-lg">
                        <li>Real-time monitoring and control of devices</li>
                        <li>Automated processes for increased efficiency</li>
                        <li>Enhanced connectivity and data exchange</li>
                        <li>Scalable and secure IoT solutions</li>
                    </ul>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                        <Image
                            src="images/iot-automation.avif"
                            alt="IoT Automation"
                            width={600}
                            height={400}
                            className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                            How Mudivili Automation Can Transform Your Business
                        </h2>
                        <p className="text-gray-300 mb-6">
                            With Mudivili automation, businesses can optimize real-time monitoring, improve operational efficiency, and enhance connectivity. Here’s how it works:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Real-time monitoring for immediate insights and actions</li>
                            <li>Automated processes for increased efficiency</li>
                            <li>Enhanced connectivity for seamless data exchange</li>
                            <li>Scalable and secure IoT solutions for growth</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}