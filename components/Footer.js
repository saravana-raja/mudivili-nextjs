import Link from 'next/link';
import { Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Cpu className="h-8 w-8 text-blue-500 " />
            <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Mudivili Technologies</span>
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
