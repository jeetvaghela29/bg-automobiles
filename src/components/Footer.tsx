import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
export const Footer =()=>{
    return <footer className="bg-[#172128] text-white py-12">
    <div className="container mx-auto px-16">
      <div className="grid grid-cols-1 md:flex justify-between  gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">BG-Automobile</h3>
          <p className="text-gray-400">Expert car repairs & premium car washing services in Bhuj, Kutch.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#ff2214]" />
              <span>+91 1234567890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#ff2214]" />
              <span>contact@bgautomobile.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#ff2214]" />
              <span>Bhuj, Kutch, Gujarat</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#ff2214]" />
              <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
        {/* <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="flex items-center gap-2 hover:text-[#ff2214] transition-colors">
                <ChevronRight size={16} />
                <span>About Us</span>
              </a>
            </li>
            <li>
              <a href="#services" className="flex items-center gap-2 hover:text-[#ff2214] transition-colors">
                <ChevronRight size={16} />
                <span>Our Services</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center gap-2 hover:text-[#ff2214] transition-colors">
                <ChevronRight size={16} />
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 BG-Automobile. All rights reserved.</p>
      </div>
    </div>
  </footer>
}