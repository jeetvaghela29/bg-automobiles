"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const ROTATING_WORDS = ["Engineering.", "Diagnostics.", "Detailing.", "Tuning."];

const TRUST_METRICS = [
  { value: "40+", label: "Years" },
  { value: "12k+", label: "Services" },
  { value: "4.9", label: "★ Rating" },
  { value: "ISO", label: "9001" },
];

export function Hero() {
  const [wordIndex, setWordIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center overflow-hidden"
    >
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src="/workshop.png"
          alt="Luxury automotive service bay with premium vehicles"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden />
      <div
        className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-gradient-to-l from-brand-bg/90 via-brand-bg/30 to-transparent"
        aria-hidden
      />

      <div className="mx-auto flex w-full max-w-7xl items-center px-6 md:px-12">
        <div className="ml-auto w-full max-w-2xl text-left lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-foreground/85 backdrop-blur"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Open now · Est. 1963 · Bhuj
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-display text-[2.6rem] font-normal leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-[4.5rem]"
          >
            {/* <span className="block"> */}
              Precision{" "}

            {/* </span> */}
            <span className="relative inline-block align-baseline ">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROTATING_WORDS[wordIndex]}
                  initial={{ y: "0.6em", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-0.6em", opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block bg-gradient-to-r from-foreground via-foreground to-accent/80 bg-clip-text italic text-transparent"
                >
                  {ROTATING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="block">Unmatched Care.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-lg text-base leading-relaxed text-foreground/75 md:text-lg"
          >
            Over 60 years of workshop excellence.
Expert technicians and precision diagnostics—delivered on the marques you love to drive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#contact"
              className={buttonVariants({ variant: "hero", size: "lg" })}
            >
              Book Now
            </Link>
            <Link
              href="#services"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-foreground/80 transition hover:text-foreground"
            >
              Explore services
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid max-w-lg grid-cols-4 gap-4 border-t border-white/10 pt-6"
          >
            {TRUST_METRICS.map((m) => (
              <div key={m.label} className="flex flex-col">
                <dt className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
                  {m.value}
                </dt>
                <dd className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-foreground/60">
                  {m.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-foreground/60 transition hover:text-foreground md:flex"
        aria-label="Scroll to services"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" strokeWidth={1.25} />
        </motion.span>
      </motion.a>
    </section>
  );
}

export default Hero;
