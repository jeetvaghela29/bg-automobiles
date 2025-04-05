"use client";
import { Menu } from "lucide-react";
import { ReactNode, useState } from "react";
import Navigation from "./Navigation";
import { Footer } from "./Footer";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 right-6 z-[60] p-2 rounded-full bg-[#172128] text-white md:hidden"
      >
        <Menu size={24} />
      </button> */}
      {/* <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} /> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};
