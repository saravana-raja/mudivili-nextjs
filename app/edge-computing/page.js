import { Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Edge Computing | Next.js SSG",
  description: "Learn how Edge Computing can optimize data processing and improve efficiency.",
};

export default function EdgeComputing() {
  return (
    <section id="edge-computing" className="py-20 text-white bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 leading-none pb-2">
            Edge Computing
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Revolutionize your data processing by bringing computation closer to the data source, reducing latency and improving speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/edge-computing.jpg"
              width={700}
              height={500}
              alt="Edge Computing"
              className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500 mb-4">
              Empower Your Business with Edge Computing
            </h2>
            <p className="text-gray-300 mb-6">
              Bring intelligence to the edge with local data processing. Improve performance, security, and scalability for IoT devices and distributed applications.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-3">
              <li><span className="text-white font-semibold">Low Latency:</span> Process data near its source for faster decision-making.</li>
              <li><span className="text-white font-semibold">Bandwidth Efficiency:</span> Reduce the need for large-scale cloud data transfers.</li>
              <li><span className="text-white font-semibold">Enhanced Security:</span> Keep sensitive data closer to the source with localized processing.</li>
              <li><span className="text-white font-semibold">Scalable Solutions:</span> Adapt easily to the needs of growing IoT networks.</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">Real-Time Processing</h3>
            <p className="text-gray-300">Handle large volumes of data with immediate analysis and decision-making.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
            <h3 className="text-2xl font-semibold text-green-400 mb-3">IoT Integration</h3>
            <p className="text-gray-300">Leverage edge computing for efficient IoT device connectivity and real-time data access.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
            <h3 className="text-2xl font-semibold text-purple-400 mb-3">Decentralized Infrastructure</h3>
            <p className="text-gray-300">Reduce the dependency on central servers for improved reliability and flexibility.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gradient">
            Transform Your Data Processing with Edge Computing
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Learn how edge computing can help you optimize your data flow and bring powerful insights right to the source. Reach out today.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="mailto:contact@example.com" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center space-x-2">
              <Mail size={20} /> <span>Email Us</span>
            </a>
            <a href="https://wa.me/1234567890" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center space-x-2">
              <MessageCircle size={20} /> <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
