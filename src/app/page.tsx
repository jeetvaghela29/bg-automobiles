import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Brands } from "@/components/Brands";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Process />
      <Brands />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
