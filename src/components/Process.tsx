"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ITEMS = [
  {
    src: "/process-01.png",
    kicker: "01 — Diagnostics",
    title: "Calibrated hands, calibrated tools.",
    description:
      "Every job starts with torque-matched hardware on a dedicated workshop tray — no shortcuts, no mixed metrics.",
  },
  {
    src: "/process-02.png",
    kicker: "02 — Alignment",
    title: "Geometry, measured to the millimetre.",
    description:
      "Four-point laser alignment on a dedicated rig — so the car tracks straight long after it leaves us.",
  },
  {
    src: "/process-03.png",
    kicker: "03 — Finishing",
    title: "A finish worth the rear-view glance.",
    description:
      "Multi-stage clear-coat correction under a soft lightbox — the kind of shine you can only see under the right conditions.",
  },
];

export function Process() {
  return (
    <section
      id="studio"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-accent/80">
              Inside the studio
            </span>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
              A process you can watch, step by step.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground md:text-base">
            Scroll through a snapshot of the workflow every vehicle moves
            through — from diagnostics bay to final polish.
          </p>
        </motion.div>

        <div
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 md:mt-16 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0"
          style={{ scrollbarWidth: "none" }}
        >
          {ITEMS.map((item, i) => (
            <motion.article
              key={item.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex w-[240px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:w-full md:shrink"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <motion.div
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    // sizes="300px"
                    quality={100}
                    priority={i === 0}
                    className="object-cover"
                  />
                </motion.div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-bg/70 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-brand-bg/60 px-2.5 py-1 text-[9px] uppercase tracking-[0.25em] text-foreground/90 backdrop-blur">
                  {item.kicker}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="font-display text-lg leading-snug tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
