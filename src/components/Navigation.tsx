"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 backdrop-blur-sm z-50 px-16 bg-white/50 mx-auto transition-all duration-300 
        ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-7xl mx-auto  py-4">
          {/* Mobile Menu Button */}
          <div className="flex justify-between items-center md:hidden">
            <a href="#home" className="text-[#172128] text-xl font-bold">
              Logo
            </a>
            <button onClick={onClose} className="p-2 rounded-md text-[#172128]">
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex justify-between">
            <div className="text-[#ff2214]">
                Logo
            </div>
            <ul className="hidden md:flex justify-end space-x-8">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[#172128] hover:text-[#ff2214] text-lg transition-colors duration-300 font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-[#172128] z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="h-full flex flex-col">
          <div className="px-4 py-6 flex justify-between items-center border-b border-gray-700">
            <a href="#home" className="text-white text-xl font-bold">
              Logo
            </a>
            <button onClick={onClose} className="p-2 text-white">
              <X size={24} />
            </button>
          </div>
          <nav className="flex-1 flex items-center justify-center">
            <ul className="space-y-8 text-center">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white text-2xl hover:text-[#ff2214] transition-colors duration-300"
                    onClick={onClose}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
