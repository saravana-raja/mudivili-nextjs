import Image from "next/image";
import { Metadata } from "next";



export default function EnhancedSecurity() {
    return (
        <section id="enhanced-security" className="py-20 text-white bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                        Enhanced Security with Edge Computing
                    </h1>
                    <p className="mt-4 text-xl text-gray-300">
                        Protect your data by processing it closer to the source. Edge computing ensures greater security and privacy by minimizing risks and vulnerabilities.
                    </p>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                        What is Enhanced Security in Edge Computing?
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Edge computing enhances data security by processing sensitive information locally, reducing the need for data transfers over the internet. Keeping data closer to its source limits exposure to security breaches and unauthorized access.
                    </p>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                        Why Edge Computing Offers Better Security
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Edge computing eliminates many of the risks associated with traditional cloud-based infrastructures. Here's why it's more secure:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-3 mt-6 text-lg">
                        <li><span className="text-white font-semibold">Localized Data Processing:</span> Sensitive information doesn’t travel through external networks, minimizing exposure.</li>
                        <li><span className="text-white font-semibold">Reduced Attack Surface:</span> Fewer data transfers mean fewer opportunities for cybercriminals to intercept or manipulate data.</li>
                        <li><span className="text-white font-semibold">Improved Access Control:</span> Edge devices can be secured with more stringent, localized authentication protocols.</li>
                        <li><span className="text-white font-semibold">Real-Time Threat Monitoring:</span> Edge devices can detect threats instantly, without relying on external servers.</li>
                    </ul>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                        Key Security Features of Edge Computing
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                        {[{
                            title: "Encryption at the Edge",
                            description: "Real-time encryption ensures that sensitive data remains protected even when stored locally.",
                            color: "text-green-400"
                        }, {
                            title: "Decentralized Threat Detection",
                            description: "Threat detection is localized, allowing businesses to respond faster to cyber threats.",
                            color: "text-blue-400"
                        }, {
                            title: "Multi-Layered Security Protocols",
                            description: "Edge devices use firewalls, VPNs, and secure boot mechanisms to enhance security.",
                            color: "text-green-400"
                        }, {
                            title: "Access Control & Authentication",
                            description: "Robust authentication ensures only authorized users access sensitive data.",
                            color: "text-blue-400"
                        }].map((feature, index) => (
                            <div key={index} className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
                                <h3 className={`text-2xl font-semibold ${feature.color} mb-3`}>{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Edge Security"
                            width={800}
                            height={600}
                            className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                            How Edge Computing Strengthens Security
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Edge computing strengthens security by keeping sensitive data within secure, localized environments. Here's how:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Data encryption and decryption are handled on-site, ensuring protection during storage or transmission.</li>
                            <li>Real-time monitoring and threat detection reduce the chances of breaches.</li>
                            <li>Local processing minimizes external data transfers, lowering exposure risks.</li>
                            <li>Strong access controls and secure authentication mechanisms block unauthorized access.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
