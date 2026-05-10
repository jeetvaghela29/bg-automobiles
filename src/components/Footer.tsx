import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-brand-bg/80 px-6 py-16 backdrop-blur-xl md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
        <div className="space-y-4">
          <Link href="#top" className="flex items-center gap-3">
            {/* <Image
              src="/Mini_Logo.svg"
              alt="BG Automobiles icon"
              width={36}
              height={36}
              className="h-9 w-9 rounded-xl object-contain shadow-glow"
            /> */}
            <Image
              src="/BG_Automobiles.svg"
              alt="BG Automobiles"
              width={140}
              height={27}
              className="h-7 w-auto"
            />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Precision engineering and unmatched care since 1963. A multi-brand
            service studio built on craftsmanship.
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/75 transition hover:border-accent/40 hover:text-foreground"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/75 transition hover:border-accent/40 hover:text-foreground"
            >
              <Facebook className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-foreground/60">
            Explore
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground transition hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-foreground/60">
            Studio
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              <span>
                Plot 27, Bhuj-Madhapar Highway,
                <br />
                Madhapar, Bhuj 370020
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <Link href="tel:+918160724305" className="transition hover:text-foreground">
                +91 81607 24305
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <Link
                href="mailto:bg.automobiles027@gmail.com"
                className="transition hover:text-foreground"
              >
                bg.automobiles027@gmail.com
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-foreground/60">
            Hours
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center justify-between">
              <span>Mon – Sat</span>
              <span className="text-foreground/90">9:00 – 18:00</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Sunday</span>
              <span className="text-foreground/60">Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} BG Automobiles. All rights reserved.</p>
        <p>Crafted with precision By Yash Patel</p>
      </div>
    </footer>
  );
}

export default Footer;
