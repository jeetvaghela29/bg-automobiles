import { CalendarCheck, MapPin, Clock, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#172128] to-[#1d2a33] text-white">
      <div className="container mx-auto px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            Book an Appointment
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Schedule a meeting with us at your convenience using our online
            appointment system. We&apos;re here to provide top-notch service for your vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-[#1f2937] p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">How Booking Works?</h3>
              <ul className="space-y-4">
                {[
                  { icon: Clock, text: "Select a suitable date and time" },
                  { icon: MapPin, text: "Provide basic details about your vehicle" },
                  { icon: Phone, text: "Get a confirmation instantly" },
                  { icon: CalendarCheck, text: "Visit our workshop and get top-quality service" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-300">
                    <item.icon size={20} className="text-[#ff2214]" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link
              href={"https://cal.com/bg-automobile/appointment-booking"}
              className="bg-[#ff2214] text-white px-9 py-5 rounded-xl font-medium inline-flex items-center gap-3 hover:bg-[#ff3324] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff221433] transform hover:-translate-y-1"
            >
              <CalendarCheck size={20} /> 
              Book Your Appointment
            </Link>
          </div>

          {/* Right Column - Map */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#ff2214] blur-[100px] opacity-20 rounded-full"></div>
            <div className="relative bg-[#1f2937] p-2 rounded-xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11651.471496490305!2d69.69740431152242!3d23.24502143277464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950e1000ebf1c81%3A0x49a456fae36363dd!2sBG%20automobile!5e1!3m2!1sen!2sin!4v1741700802982!5m2!1sen!2sin"
                width="100%"
                height="450"
                className="rounded-lg"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
