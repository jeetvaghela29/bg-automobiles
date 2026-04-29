import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// @ts-expect-error
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "BG Automobiles | Precision Engineering. Unmatched Care. — Bhuj, Kutch",
  description:
    "A multi-brand automotive service studio in Bhuj, Kutch. Factory-trained technicians, OEM-grade diagnostics, detailing and performance tuning — since 1963.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body className="bg-brand-bg font-sans text-foreground antialiased">
        <Analytics />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
