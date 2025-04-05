import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata: Metadata = {
  title:
    " BG Automobile | Expert Car Repair & Car Washing Services in Bhuj, Kutch",
  description:
    "Trust BG Automobile in Bhuj, Kutch, for professional car repairs, denting, painting, and premium car washing. Your one-stop solution for all automobile needs.",
};
const ManropeFonts = Manrope({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${ManropeFonts.className}`}>
        <Analytics/>
        {children}
        <SpeedInsights/>
      </body>
    </html>
  );
}
