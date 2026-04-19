"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type SheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  side?: "left" | "right";
  className?: string;
};

export function Sheet({
  open,
  onOpenChange,
  children,
  side = "right",
  className,
}: SheetProps) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  const x = side === "right" ? "100%" : "-100%";

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
            aria-hidden
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            className={cn(
              "fixed top-0 z-50 flex h-full w-[85%] max-w-sm flex-col border-l border-white/10 bg-brand-bg/95 p-6 shadow-2xl backdrop-blur-xl",
              side === "right" ? "right-0" : "left-0",
              className
            )}
            initial={{ x }}
            animate={{ x: 0 }}
            exit={{ x }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          >
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="absolute right-5 top-5 rounded-full p-2 text-foreground/70 transition hover:bg-white/10 hover:text-foreground"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
            {children}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
