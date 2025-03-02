'use client';

import Image from 'next/image';

export default function EdgeProcessing() {
    return (
        <section id="edge-processing" className="py-20 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 leading-none pb-2">
                        Edge Processing
                    </h1>
                    <p className="mt-4 text-xl text-gray-400">
                        Bring data processing closer to the source with edge computing for faster, more efficient operations.
                    </p>
                </div>

                {/* What is Edge Processing */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                        What is Edge Processing?
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Edge processing involves performing computations and data analysis closer to where the data is generated, instead of relying solely on centralized cloud servers. By processing data locally on devices or nearby edge servers, businesses can achieve faster insights and reduce dependence on network bandwidth.
                    </p>
                </div>

                {/* Why Edge Processing */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                        Why Use Edge Processing?
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Edge processing is becoming essential for businesses aiming to improve performance and reduce latency. Here’s why it's beneficial:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 mt-6 text-lg">
                        <li>Faster decision-making by processing data in real-time</li>
                        <li>Enhanced security and privacy by keeping sensitive data local</li>
                        <li>Efficient bandwidth usage by reducing data transfers to the cloud</li>
                        <li>Enabling operations in remote areas with limited internet access</li>
                    </ul>
                </div>

                {/* Advantages of Edge Processing */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                        Advantages of Edge Processing
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Edge processing offers a range of benefits that can enhance business operations across various industries:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
                            <h3 className="text-2xl font-semibold text-green-400 mb-3">Reduced Latency</h3>
                            <p className="text-gray-300">
                                Local processing eliminates the need to send data over long distances, ensuring faster responses and reduced delays.
                            </p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
                            <h3 className="text-2xl font-semibold text-blue-400 mb-3">Data Security</h3>
                            <p className="text-gray-300">
                                Edge processing allows sensitive information to be processed on-site, reducing the risk of data breaches or leaks.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
                            <h3 className="text-2xl font-semibold text-purple-400 mb-3">Cost Efficiency</h3>
                            <p className="text-gray-300">
                                By reducing the need for constant data transfers, edge processing lowers cloud storage and network costs.
                            </p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
                            <h3 className="text-2xl font-semibold text-yellow-400 mb-3">Scalability</h3>
                            <p className="text-gray-300">
                                Edge computing systems can scale locally to accommodate growth, without relying solely on centralized cloud infrastructure.
                            </p>
                        </div>
                    </div>
                </div>

                {/* How Edge Processing Works */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                        <Image
                            src="/images/edge-processing.avif"
                            alt="Edge Processing"
                            width={800}
                            height={600}
                            className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                            How Edge Processing Can Transform Your Business
                        </h2>
                        <p className="text-gray-300 mb-6">
                            With edge processing, businesses can optimize real-time decision-making, improve operational efficiency, and reduce the burden on centralized cloud infrastructure. Here’s how it works:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Local data processing for immediate insights and actions</li>
                            <li>Real-time data analytics for faster decision-making</li>
                            <li>Enhanced security by keeping sensitive data on-site</li>
                            <li>Reduced network congestion by minimizing data transfers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
