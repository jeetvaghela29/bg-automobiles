import Image from "next/image";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/car.jpg"
          alt="Luxury car being detailed"
          fill  
          quality={80}
          className="w-full h-full object-left"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-10 h-screen flex items-center">
        {/* <BackgroundGradient className=""> */}
          <div className="max-w-2xl relative z-10 bg-white/20 p-8 rounded-3xl backdrop-blur-sm">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Expert Car Repairs & Premium Car Washing in Bhuj, Kutch
            </h1>
            <p className="text-slate-900 text-xl mb-8">
              Your trusted partner for professional automotive care. Experience over 40 years of 
              excellence in every service.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://cal.com/bg-automobiles/appointment-booking" className="bg-[#ff2214] text-white px-8 py-3 rounded-full font-medium hover:bg-[#172128] transition-colors duration-300">
                Book Now
              </a>
            </div>
          </div>
        {/* </BackgroundGradient> */}
      </div>
      {/* Overlay gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent z-[1] pointer-events-none"></div> */}
    </section>
  );
};

export default Hero;
