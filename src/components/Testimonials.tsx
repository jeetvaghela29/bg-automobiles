"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent/80">
            Client voices
          </span>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
            Relationships measured in decades.
          </h2>
          <p className="mt-5 text-balance text-muted-foreground md:text-lg">
            Our clients return not for convenience, but for consistency — the
            quiet confidence that their car will always leave better than it
            arrived.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <Card className="h-full hover:border-accent/40 hover:shadow-glow">
                <CardContent className="flex h-full flex-col gap-6 p-8">
                  <Quote className="h-8 w-8 text-accent/70" />
                  <p className="text-base leading-relaxed text-foreground/85">
                    “{t.quote}”
                  </p>
                  <div className="mt-auto border-t border-white/10 pt-4">
                    <div className="font-medium text-foreground">{t.name}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
