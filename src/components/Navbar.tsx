"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-brand-bg/70 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24 md:px-12">
        <Link href="#top" className="flex items-center">
          <span className="font-display text-xl tracking-wide text-foreground md:text-2xl">
            BG Automobiles
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-foreground/90 transition hover:text-foreground"
          aria-label="Open menu"
        >
          <Menu className="h-7 w-7" strokeWidth={1.25} />
        </button>
      </nav>

      <Sheet open={open} onOpenChange={setOpen}>
        <div className="mt-10 flex flex-col gap-2">
          <span className="font-display text-2xl tracking-wide">Menu</span>
          <p className="text-sm text-muted-foreground">
            Precision engineering, unmatched care.
          </p>
        </div>
        <ul className="mt-10 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-display text-xl tracking-wide text-foreground/85 transition hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className={buttonVariants({ variant: "hero", className: "w-full" })}
          >
            Book a Slot
          </Link>
        </div>
      </Sheet>
    </motion.header>
  );
}

export default Navbar;
