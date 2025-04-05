import About from "@/components/About";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Wrapper } from "@/components/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <>
        <Hero />
        <About />
        <CTA/>
        <Services />
        <Contact />
      </>
    </Wrapper>
  );
}
