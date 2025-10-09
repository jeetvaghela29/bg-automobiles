import { ArrowRight, Shield, Star, LucideBolt } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Cover } from "./ui/cover";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#172128] via-[#1a252c] to-[#172128] px-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff2214] opacity-10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff2214] opacity-10 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto  relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience Premium Auto Care at <br />
            <Cover className="rounded-xl">
              <span className="text-[#ff2214] cursor-default">
                BG Automobiles
              </span>
            </Cover>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Join thousands of satisfied customers who trust us with their
            vehicles. Professional service, competitive prices, and expert care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Shield,
              title: "Quality Guarantee",
              description:
                "All our services come with a satisfaction guarantee",
            },
            {
              icon: LucideBolt,
              title: "Expert Technicians",
              description: "Certified professionals with years of experience",
            },
            {
              icon: Star,
              title: "Premium Service",
              description: "State-of-the-art equipment and genuine parts",
            },
          ].map((feature, index) => (
            <HoverBorderGradient
              className="bg-[#141c28] border  p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              key={index}
            >
              <feature.icon size={32} className="text-[#ff2214] mb-4" />
              <h3 className="text-white text-xl font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </HoverBorderGradient>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link
            href="https://cal.com/bg-automobile/appointment-booking"
            className="bg-[#ff2214] text-white px-8 py-4 rounded-xl font-medium inline-flex items-center gap-3 hover:bg-[#ff3324] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff221433] transform hover:-translate-y-1"
          >
            Book Service Now <ArrowRight size={20} />
          </Link>
          {/* We can link to whatapp. */}
          {/* <Link
            href="tel:+1234567890"
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-medium inline-flex items-center gap-3 hover:bg-white/20 transition-all duration-300"
          >
            Call Us Now
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default CTA;
