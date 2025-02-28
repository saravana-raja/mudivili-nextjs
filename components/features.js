"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Shield, Cpu, Zap, Cloud, CircuitBoard } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Cloud className="h-12 w-12 text-blue-500" />,
      title: "Advanced Cloud Integration",
      description: "Cutting-edge cloud integration solutions tailored for edge computing environments.",
      path: "/advanced-cloud-integration",
    },
    {
      icon: <Cpu className="h-12 w-12 text-blue-500" />,
      title: "Edge Processing",
      description: "Real-time data processing and analysis at the network edge for faster decision making.",
      path: "/edge-processing",
    },
    {
      icon: <CircuitBoard className="h-12 w-12 text-blue-500" />,
      title: "IoT Powered Automated Solutions",
      description: "Smart automation leveraging IoT technology for seamless operations and connectivity.",
      path: "/iot-automation",
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-500" />,
      title: "Enhanced Security",
      description: "Built-in security measures ensuring data protection and privacy compliance.",
      path: "/enhanced-security",
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-500" />,
      title: "Optimized Performance",
      description: "High-performance computing solutions designed for efficiency and reliability.",
      path: "/optimized-performance",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="features" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Empowering the future with innovative edge computing solutions
          </p>
        </div>

        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="px-4">
              <Link href={feature.path} passHref>
                <div className="h-64 flex flex-col justify-between p-6 rounded-xl bg-gradient-to-b from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all cursor-pointer text-center">
                  <div className="flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
