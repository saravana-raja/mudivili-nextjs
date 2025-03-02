import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";

export default function HealthCare() {
  return (
    <section id="healthcare" className="py-20 text-white bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 leading-none pb-2">
            Remote Healthcare Solutions
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            We help healthcare facilities modernize lab equipment by automating manual processes and enabling seamless cloud integration, reducing reliance on paper records and improving efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <Image
              src="images/healthcare.avif"
              alt="Healthcare"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500 mb-4">
              Transforming Healthcare with Smart Automation
            </h2>
            <p className="text-gray-300 mb-6">
              We specialize in automating healthcare workflows, ensuring seamless data exchange between medical equipment and cloud-based record systems.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-3">
              <li>
                <span className="text-white font-semibold">Cloud Integration:</span> Secure, real-time data transfer to the cloud.
              </li>
              <li>
                <span className="text-white font-semibold">Automation:</span> Eliminating manual processes for efficiency.
              </li>
              <li>
                <span className="text-white font-semibold">Seamless Connectivity:</span> Solutions for smooth data transmission.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">Automated Workflows</h3>
            <p className="text-gray-300">Reducing human errors and ensuring efficiency.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
            <h3 className="text-2xl font-semibold text-green-400 mb-3">Modernized Lab Equipment</h3>
            <p className="text-gray-300">Real-time cloud connectivity for accurate operations.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
            <h3 className="text-2xl font-semibold text-purple-400 mb-3">Scalable & Future-Proof</h3>
            <p className="text-gray-300">Adaptable solutions for clinics and hospitals.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gradient">
            A New Era of Remote Healthcare Solutions
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Modernizing lab equipment and streamlining operations to improve efficiency, reduce errors, and deliver quality care.
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
