"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import * as React from "react";
import { STATS } from "@/lib/constants";

function AnimatedNumber({ value }: { value: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = React.useState<string>(value.startsWith("4.") ? "0.0" : "0");

  React.useEffect(() => {
    if (!inView) return;
    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(numericMatch[0]);
    const suffix = value.slice(numericMatch[0].length);
    const prefix = value.slice(0, value.indexOf(numericMatch[0]));
    const duration = 1200;
    const start = performance.now();
    const isDecimal = numericMatch[0].includes(".");
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = target * eased;
      setDisplay(`${prefix}${isDecimal ? v.toFixed(1) : Math.round(v)}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent/80">
            About BG Automobiles
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight md:text-5xl">
            Six decades of workshop craft, without the dealership mark-up.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            We started as a family-run garage in 1963. Today we run a multi-bay
            studio trusted by drivers of German, British and Japanese marques —
            still family-run, still obsessive about the details.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
              >
                <div className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
                  <AnimatedNumber value={stat.value} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-glow">
            <Image
              src="/mechanic.png"
              alt="Technician performing detailed work on a luxury engine"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={85}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent" />
          </div>

          {/* <div className="absolute -bottom-6 left-6 hidden items-center gap-4 rounded-2xl border border-white/10 bg-brand-bg/80 p-5 backdrop-blur-xl shadow-glow md:flex">
            <div className="h-10 w-10 rounded-full bg-accent-gradient" />
            <div>
              <div className="text-sm font-semibold text-foreground">ISO 9001 workshop</div>
              <div className="text-xs text-muted-foreground">Audited annually</div>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
