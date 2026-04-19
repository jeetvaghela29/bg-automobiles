"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function CTABanner() {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 shadow-glow"
        >
          <motion.div
            style={{ y: bgY, scale: bgScale }}
            className="absolute inset-0 -z-10"
          >
            <Image
              src="/cta-bg.png"
              alt="Luxury sedan in a darkened studio"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              quality={90}
              className="object-cover"
            />
          </motion.div>

          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-brand-bg/95 via-brand-bg/70 to-brand-bg/40"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-brand-bg via-transparent to-brand-bg/40"
            aria-hidden
          />

          <div className="relative px-6 py-16 md:px-16 md:py-20">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-foreground/80 backdrop-blur">
                Book in 60 seconds
              </span>
              <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Your car deserves a studio that knows it.
              </h2>
              <p className="mt-5 max-w-lg text-balance text-base text-foreground/75 md:text-lg">
                Reserve a diagnostic slot, schedule a service, or drop by for a
                walk-through. Our service advisors respond within the hour.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href="https://cal.com/bg-automobile/appointment-booking"
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "gradient", size: "lg" })}
                >
                  Book a service
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="tel:+919999999999"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  <Phone className="h-4 w-4" />
                  Call the studio
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTABanner;
