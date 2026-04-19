"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { ServiceCard } from "@/components/ServiceCard";

export function Services() {
  return (
    <section id="services" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent/80">
            What we do
          </span>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-foreground md:text-5xl">
            Every service, engineered with intent.
          </h2>
          <p className="mt-5 text-balance text-base text-muted-foreground md:text-lg">
            From scheduled maintenance to performance builds, every programme is
            delivered by factory-trained specialists on calibrated equipment.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
