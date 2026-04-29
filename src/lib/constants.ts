import { Wrench, ScanLine, SprayCan, Snowflake, Disc, Droplets } from "lucide-react";

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Brands", href: "#brands" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    icon: ScanLine,
    title: "Advanced Diagnostics",
    description:
      "Using OE-level scanning tools to find and fix complex electrical faults and sensor issues quickly and accurately.",
  },
  {
    icon: Wrench,
    title: "Mechanical Overhauls",
    description:
      "Expert drivetrain overhauls, including engine, clutch, and gearbox repairs, along with complete suspension work for a better drive.",
  },
  {
    icon: SprayCan,
    title: "Body Restoration",
    description:
      "Professional denting and painting services with precision color matching to restore your car’s body to showroom condition.",
  },
  {
    icon: Snowflake,
    title: "Full Service & AC",
    description:
      "Complete manufacturer-spec maintenance and expert AC repairs, including gas filling, to keep your car running cool and reliably.",
  },
  {
    icon: Disc,
    title: "Brakes & Alignment",
    description:
     "Essential safety checks, including brake repairs and precision wheel alignment, to ensure smooth handling and longer tire life.",
  },
  {
    icon: Droplets,
    title: "Premium Washing",
    description:
      "High-quality premium washing and interior cleaning services focused on aesthetic preservation and keeping your vehicle looking new.",
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
  "Suzuki",
  "Ford",
  "Hyundai",
  "Kia",
  "Morris Garage",
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
    name: "Harshad Patel",
    role: "BMW M340i owner, Bhuj",
    quote:
      "Ekdum first-class kaam! My car came back feeling better than when it left the showroom — every panel gap aligned, every interior surface pristine. Best workshop in Gujarat.",
  },
  {
    name: "Nirali Shah",
    role: "Mercedes GLE owner, Bhuj",
    quote:
      "Transparent pricing, honest diagnostics and a loaner arranged the same day. BG Automobiles is the only workshop I trust with a premium vehicle anywhere in Gujarat.",
  },
  {
    name: "Jignesh Desai",
    role: "Kia Seltos owner, Madhapar",
    quote:
      "They handled a complex electronic fault three dealerships in Ahmedabad had given up on. Service-first attitude and genuine technical depth — saachi vat!",
  },
];
