"use client";

import { motion } from "framer-motion";
import { BRANDS } from "@/lib/constants";

export function Brands() {
  const loop = [...BRANDS, ...BRANDS];
  return (
    <section id="brands" className="relative px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent/80">
            Marques we service
          </span>
          <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
            Factory-trained on the cars you drive.
          </h2>
        </motion.div>

        <div
          className="relative mt-12 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee gap-4">
            {loop.map((brand, i) => (
              <div
                key={`${brand}-${i}`}
                className="flex h-20 min-w-[14rem] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 text-sm uppercase tracking-[0.25em] text-foreground/75 backdrop-blur transition hover:border-accent/40 hover:text-foreground"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
