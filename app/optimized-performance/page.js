import Image from "next/image";

export const metadata = {
    title: "Optimized Performance with Edge Computing",
    description: "Learn how edge computing enhances performance with faster data processing, reduced latency, and real-time insights.",
};

export default function OptimizedPerformance() {
    return (
        <section id="optimized-performance" className="py-20 text-white bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                        Optimized Performance with Edge Computing
                    </h1>
                    <p className="mt-4 text-xl text-gray-400">
                        Achieve faster processing and reduced latency by bringing computation closer to the source with edge computing.
                    </p>
                </div>

                {/* What is Optimized Performance in Edge Computing? */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                        What is Optimized Performance in Edge Computing?
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Optimized performance in edge computing refers to the ability to process data locally on devices or near the data source, minimizing latency and improving efficiency.
                    </p>
                </div>

                {/* Why Edge Computing Optimizes Performance? */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                        Why Edge Computing Optimizes Performance?
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Edge computing provides optimized performance through faster data processing, reduced network congestion, and enhanced responsiveness.
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-3 mt-6 text-lg">
                        <li><span className="text-white font-semibold">Local Data Processing:</span> By processing data close to the source, edge computing reduces the need for long-distance data transfers.</li>
                        <li><span className="text-white font-semibold">Reduced Latency:</span> Ensures real-time processing and faster decision-making.</li>
                        <li><span className="text-white font-semibold">Efficient Bandwidth Usage:</span> Reduces strain on network bandwidth, enabling more efficient data management.</li>
                        <li><span className="text-white font-semibold">Improved Scalability:</span> Ensures optimal performance even in remote or crowded environments.</li>
                    </ul>
                </div>

                {/* Key Performance Features */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                        Key Performance Features of Edge Computing
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                        <FeatureCard title="Faster Response Times" color="text-green-400">
                            Edge computing reduces the time taken to process and respond to data by handling computations locally.
                        </FeatureCard>
                        <FeatureCard title="Optimized Bandwidth Usage" color="text-blue-400">
                            Optimizes network usage by processing data locally, reducing the amount of data transferred to the cloud.
                        </FeatureCard>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                        <FeatureCard title="Local Computation for Real-Time Results" color="text-yellow-400">
                            Processing data on-site ensures real-time results without delay, ideal for time-sensitive applications.
                        </FeatureCard>
                        <FeatureCard title="Efficient Use of Resources" color="text-purple-400">
                            Uses local devices to perform tasks, reducing the burden on centralized systems.
                        </FeatureCard>
                    </div>
                </div>

                {/* How Edge Computing Optimizes Performance */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                        <Image
                            src="https://img.freepik.com/free-vector/isometric-typographic-message-blue-night-shades_52683-34730.jpg"
                            alt="Edge Performance"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                            How Edge Computing Optimizes Performance
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Edge computing optimizes performance by bringing data processing closer to the source.
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Local processing ensures faster decision-making.</li>
                            <li>Reduced network congestion limits unnecessary data transfers.</li>
                            <li>Enhanced resource usage by handling tasks locally.</li>
                            <li>Real-time data processing allows for immediate actions.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Reusable Feature Card Component
function FeatureCard({ title, color, children }) {
    return (
        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-colors">
            <h3 className={`text-2xl font-semibold ${color} mb-3`}>{title}</h3>
            <p className="text-gray-300">{children}</p>
        </div>
    );
}
