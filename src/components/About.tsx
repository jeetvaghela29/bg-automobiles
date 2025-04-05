import React from 'react';
import { Award, Users, Clock } from 'lucide-react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#ff2214] mb-6">
              Your Trusted Auto Service Partner
            </h2>
            <p className="text-[#5c6269] text-[16px] mb-8">
              With years of experience and a commitment to excellence, BG-Automobile has become the
              leading automotive service provider in Bhuj, Kutch. Our team of certified professionals
              ensures your vehicle receives the best care possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Award className="w-12 h-12 text-[#ff2214]" />
                <div>
                  <h4 className="font-bold text-[#172128]">Certified</h4>
                  <p className="text-[#5c6269]">Experts</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-12 h-12 text-[#ff2214]" />
                <div>
                  <h4 className="font-bold text-[#172128]">1000+</h4>
                  <p className="text-[#5c6269]">Happy Clients</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-12 h-12 text-[#ff2214]" />
                <div>
                  <h4 className="font-bold text-[#172128]">30+ Years</h4>
                  <p className="text-[#5c6269]">Experience</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Image
              src="/servicing.jpg"
              alt="Auto workshop"
              className="rounded-lg shadow-xl"
              width={800}
              quality={50}
              height={80}
            />
            <div className="absolute -bottom-10 -right-6 bg-[#ff2214] text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Professional Service</h3>
              <p>Quality work guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;