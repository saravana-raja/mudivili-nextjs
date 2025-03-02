import Image from "next/image";
import Link from "next/link";
import { Home, Factory, Building2, Car } from "lucide-react";

// Solutions data (can be fetched from an API if needed)
const solutions = [
  {
    icon: <Home className="h-12 w-12 text-blue-500" />,
    title: "Smart Home Solutions",
    description: "Safe and secure smart home solutions powered by AI",
    image: "/images/smart-home.avif", // Updated to local image
    href: "/smart-homes",
  }
  ,
  {
    icon: <Factory className="h-12 w-12 text-blue-500" />,
    title: "Industrial Automation",
    description: "Smart manufacturing solutions for the future",
    image: "/images/industrial-automation.avif", // Updated to local image
    href: "/industry-4.0",
  },
  {
    icon: <Building2 className="h-12 w-12 text-blue-500" />,
    title: "Remote HealthCare Solutions",
    description: "Innovative solutions for modern healthcare facilities",
    image: "/images/healthcare.avif", // Updated to local image
    href: "/healthcare",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Our Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Transforming industries with cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {solutions.map((solution, index) => (
            <Link
              href={solution.href}
              key={index}
              className="group relative overflow-hidden rounded-xl block"
            >
              <div className="absolute inset-0">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="relative p-8 h-full min-h-[300px] flex flex-col justify-end">
                <div className="mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-300">{solution.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pre-render this page at build time (SSG)
export async function getStaticProps() {
  return {
    props: {}, // No dynamic data, so just return empty props
  };
}