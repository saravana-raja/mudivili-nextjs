import Link from 'next/link';
import { Cpu } from 'lucide-react';
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Image src="/images/logo.png" alt="Company Logo" width={40} height={40} />
            <span className="company-name font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
  <span className="text-4xl text-[#f78c0c]">M</span>
  <span className="text-2xl text-[#f78c0c]">udivili</span>
  <span className="text-4xl text-[#2a66d2]"> T</span>
  <span className="text-2xl text-[#2a66d2]">echnologies</span>
</span>
          </div>
          
          <nav className="flex space-x-4">
            <Link href="/" className="text-white hover:text-gray-400">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-400">
              About Us
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
            <Link href="/careers" className="text-white hover:text-gray-400">
              Careers
            </Link>
            
          </nav>
        </div>
        
        <div className="mt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mudivili Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
