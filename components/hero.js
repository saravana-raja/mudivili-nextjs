import Image from "next/image";
import Link from "next/link";
import { Infinity } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10" />
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          layout="fill"
          objectFit="cover"
          alt="Background"
          className="opacity-40"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Our Mission
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            To empower businesses and industries with edge computing solutions
            that deliver faster, smarter, and more efficient decision-making. We
            are committed to driving innovation at the intersection of
            artificial intelligence, IoT, and edge computing, enabling seamless,
            real-time experiences while ensuring security, scalability, and
            reliability.
          </p>

          <div className="flex flex-wrap gap-4">
            
            <Link href="/edge-computing">
              <button className="border border-blue-500 text-blue-500 hover:bg-blue-500/10 px-8 py-3 rounded-full text-lg transition-colors">
                Learn More About Edge Computing
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
