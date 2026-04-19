import { Wrench, Car, Gauge, SprayCan, ShieldCheck, Sparkles } from "lucide-react";

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Brands", href: "#brands" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    icon: Wrench,
    title: "Mechanical Repairs",
    description:
      "Factory-grade diagnostics and repairs backed by OEM tooling and certified technicians.",
  },
  {
    icon: SprayCan,
    title: "Denting & Painting",
    description:
      "Seamless panel restoration, precision colour matching and high-gloss finishing booths.",
  },
  {
    icon: Gauge,
    title: "Performance Tuning",
    description:
      "Dyno-tested ECU calibration, suspension setup and brake upgrades for daily and track use.",
  },
  {
    icon: Car,
    title: "Detailing & Wash",
    description:
      "Multi-stage paint correction, ceramic coatings and interior deep-clean programmes.",
  },
  {
    icon: ShieldCheck,
    title: "Scheduled Servicing",
    description:
      "Manufacturer-aligned service plans with transparent reporting and digital maintenance logs.",
  },
  {
    icon: Sparkles,
    title: "Pre-Owned Inspection",
    description:
      "150-point inspections, independent valuation and concierge handovers for buyers.",
  },
];

export const STATS = [
  { value: "40+", label: "Years of heritage" },
  { value: "12k", label: "Vehicles serviced" },
  { value: "18", label: "Supported brands" },
  { value: "4.9", label: "Average rating" },
];

export const BRANDS = [
  "Mercedes-Benz",
  "BMW",
  "Audi",
  "Porsche",
  "Volkswagen",
  "Jaguar",
  "Land Rover",
  "Lexus",
  "Volvo",
  "Toyota",
  "Skoda",
  "Mini",
];

export const TESTIMONIALS = [
  {
    name: "Arjun Patel",
    role: "BMW M340i owner",
    quote:
      "The attention to detail is remarkable. My car came back feeling better than when it left the showroom — every panel gap aligned, every interior surface pristine.",
  },
  {
    name: "Priya Sharma",
    role: "Mercedes GLE owner",
    quote:
      "Transparent pricing, honest diagnostics and a loaner arranged the same day. BG Automobiles is the only workshop I trust with a premium vehicle.",
  },
  {
    name: "Rohit Mehta",
    role: "Audi RS5 owner",
    quote:
      "They handled a complex electronic fault three dealerships had given up on. Service-first attitude and genuine technical depth.",
  },
];
