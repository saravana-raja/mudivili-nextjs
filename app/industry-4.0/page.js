import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

export default function Industry() {
  return (
    <section id="industry-4.0" className="py-20 text-white bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 leading-none pb-2">
            Industrial Automation
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Step into the future of manufacturing with smarter automation,
            IoT-powered connectivity, and data-driven decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/industrial-automation.avif"
              alt="Industry 4.0"
              width={700}
              height={500}
              className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500 mb-4">
              Transform Your Manufacturing
            </h2>
            <p className="text-gray-300 mb-6">
              Experience the future with AI-driven smart manufacturing
              technology that ensures efficiency, productivity, and innovation.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>AI-powered automation systems</li>
              <li>Predictive maintenance</li>
              <li>Real-time data analytics</li>
              <li>Enhanced operational efficiency</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Smart Factories",
              description:
                "Create factories that work smarter with digital twins and interconnected systems.",
              color: "text-blue-400",
            },
            {
              title: "IoT & Edge Computing",
              description:
                "Track and monitor equipment in real-time with IoT and edge computing.",
              color: "text-green-400",
            },
            {
              title: "Supply Chain Optimization",
              description:
                "Streamline logistics and inventory with IoT-driven insights.",
              color: "text-purple-400",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors"
            >
              <h3 className={`text-2xl font-semibold ${item.color} mb-3`}>
                {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Ready to Modernize Your Industry?
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Let us show you how our IoT edge solutions can take your business to
            the next level. Reach out to learn more.
          </p>
        </div>

        <div className="mt-16 text-center">
          <div className="mt-6 flex justify-center space-x-6">
            <Link
              href="mailto:info@mudivilitec.com"
              className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" /> Email Us
            </Link>
            <Link
              href="https://wa.me/917305087414"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
