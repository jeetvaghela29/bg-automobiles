import React from "react";
import { Settings, Droplets, Wrench, Activity } from "lucide-react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const services = [
  {
    icon: <Wrench className="w-12 h-12 text-[#ff2214]" />,
    title: "Car Repairs",
    description: "Expert diagnostics and repairs for all car makes and models.",
  },
  {
    icon: <Droplets className="w-12 h-12 text-[#ff2214]" />,
    title: "Premium Washing",
    description: "Thorough cleaning and detailing services for your vehicle.",
  },
  {
    icon: <Settings className="w-12 h-12 text-[#ff2214]" />,
    title: "Wheel Alignment",
    description: "Precise wheel alignment for optimal vehicle performance.",
  },
  {
    icon: <Activity className="w-12 h-12 text-[#ff2214]" />,
    title: "Diagnostics",
    description: "Advanced diagnostic testing to identify and fix issues.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#172128] mb-4">
            Our Services
          </h2>
          <p className="text-[#5c6269] max-w-2xl mx-auto">
            We offer comprehensive automotive services to keep your vehicle
            running at its best.
          </p>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <HoverBorderGradient
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#172128] mb-4">
                {service.title}
              </h3>
              <p className="text-[#5c6269]">{service.description}</p>
            </HoverBorderGradient>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
