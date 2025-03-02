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
          src="/images/hero.avif"
          layout="fill"
          objectFit="cover"
          alt="Background"
          className="opacity-40"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="space-y-8">
        <div className="flex justify-center items-center ">
        <h1 className="text-4xl font-bold text-center">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Our Mission
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
          Empowering businesses with edge computing solutions for faster, smarter decisions. We innovate at the intersection of IoT and edge computing, ensuring real-time efficiency, security, and scalability.
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
