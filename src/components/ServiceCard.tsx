"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ scale: 1.03 }}
    >
      <Card className="group h-full overflow-hidden transition-all hover:border-accent/40 hover:shadow-glow">
        <CardContent className="flex h-full flex-col gap-5 p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition group-hover:bg-accent/20">
            <Icon className="h-6 w-6" />
          </div>
          <div className="space-y-3">
            <h3 className="font-display text-2xl tracking-tight text-foreground">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="mt-auto flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Learn more
            <span aria-hidden>→</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ServiceCard;
