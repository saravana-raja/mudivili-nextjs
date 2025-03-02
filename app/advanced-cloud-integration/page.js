import Image from "next/image";

export const metadata = {
  title: "Advanced Cloud Integration in Edge Computing",
  description: "Seamlessly connect and manage your edge devices with advanced cloud integration solutions.",
};

export default function AdvancedIntegration() {
  return (
    <section id="advanced-cloud-integration" className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 leading-none pb-2">
            Advanced Cloud Integration in Edge Computing Devices
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Seamlessly connect and manage your edge devices with our advanced cloud integration solutions.
          </p>
        </div>

        {/* What is Cloud Integration */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            What is Cloud Integration?
          </h2>
          <p className="text-gray-300 text-lg">
            Cloud integration involves connecting various devices and systems to the cloud, enabling seamless data exchange
            and management. By integrating edge devices with the cloud, businesses can achieve real-time data
            synchronization and enhanced control over their operations.
          </p>
        </div>

        {/* Why Cloud Integration */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            Why Use Cloud Integration?
          </h2>
          <p className="text-gray-300 text-lg">
            Cloud integration is essential for businesses aiming to improve connectivity and efficiency. Here’s why it's beneficial:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2 mt-6 text-lg">
            <li>Seamless device management and control</li>
            <li>Real-time data synchronization across all devices</li>
            <li>Enhanced connectivity and reliability</li>
            <li>Secure and scalable cloud services</li>
          </ul>
        </div>

        {/* Advantages of Cloud Integration */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            Advantages of Cloud Integration
          </h2>
          <p className="text-gray-300 text-lg">
            Cloud integration offers a range of benefits that can enhance business operations across various industries:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
              <h3 className="text-2xl font-semibold text-green-400 mb-3">Seamless Integration</h3>
              <p className="text-gray-300">Effortlessly connect your edge devices to the cloud for streamlined operations.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
              <h3 className="text-2xl font-semibold text-blue-400 mb-3">Real-Time Sync</h3>
              <p className="text-gray-300">Keep your data synchronized in real-time across all devices.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">Enhanced Control</h3>
              <p className="text-gray-300">Gain complete control over your devices from anywhere.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-3">Scalability</h3>
              <p className="text-gray-300">Scale your operations seamlessly with reliable cloud services.</p>
            </div>
          </div>
        </div>

        {/* How Cloud Integration Works */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/edge-computing.jpg"
              alt="Cloud Integration"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              How Cloud Integration Can Transform Your Business
            </h2>
            <p className="text-gray-300 mb-6">
              With cloud integration, businesses can optimize real-time data management, improve operational efficiency, and enhance
              connectivity. Here’s how it works:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Seamless device management for streamlined operations</li>
              <li>Real-time data synchronization for immediate insights</li>
              <li>Enhanced control over devices from anywhere</li>
              <li>Reliable and secure cloud services for scalability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
