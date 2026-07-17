import {
  Paintbrush,
  FlaskConical,
  Shirt,
  Gem,
  Factory,
  type LucideIcon,
} from "lucide-react";

// Shared across Navbar's "About Us"/"Products" dropdowns, the homepage hero,
// the "Our Verticals" section, and the /products/[slug] detail pages.
export interface BusinessGroup {
  title: string;
  href: string;
  description: string;
  subtitle?: string;
  image?: string;
  highlights?: string[];
  icon: LucideIcon;
}

export const BUSINESS_GROUPS: BusinessGroup[] = [
  {
    title: "BI Paints & Coatings",
    href: "/products/paints",
    subtitle: "Paints & Coatings",
    image: "/vertical-paints.png",
    icon: Paintbrush,
    description:
      "Paint manufacturing, industrial painting services, and protective, marine & power plant coatings — trusted by Reliance, Adani, Godrej & Boyce, and the Indian Air Force.",
    highlights: [
      "Paint manufacturing at 3,00,000 litres daily capacity",
      "Industrial painting services, end to end",
      "Protective & marine coatings",
      "Power plant coatings",
      "ISO 9001:2015 & ISO 14001:2015 certified manufacturing",
    ],
  },
  {
    title: "Homeopathy Products",
    href: "/products/homeopathy",
    subtitle: "Wellness",
    image: "/vertical-wellness.png",
    icon: FlaskConical,
    description:
      "Holistic health solutions rooted in traditional homeopathic science, crafted for modern living and everyday well-being.",
    highlights: [
      "Formulated on traditional homeopathic science",
      "Crafted for modern, everyday wellness routines",
      "Held to the same quality standards as every BI Group business",
    ],
  },
  {
    title: "Textile Business",
    href: "/products/textile",
    subtitle: "Textiles",
    image: "/vertical-fashion.png",
    icon: Shirt,
    description:
      "A growing textile trading business bringing quality fabrics and materials to manufacturers and retailers across India.",
    highlights: [
      "Sourcing and trading of quality fabrics and materials",
      "Serving manufacturers and retailers nationwide",
      "Backed by BI Group's trusted supply chain",
    ],
  },
  // {
  //   title: "Jewellery Trading",
  //   href: "/products/jewellery",
  //   subtitle: "Trading",
  //   icon: Gem,
  //   description:
  //     "Trusted sourcing and trading of fine jewellery, built on the same standards of quality and reliability across every BI Group business.",
  //   highlights: [
  //     "Sourcing and trading of fine jewellery",
  //     "Built on trust and reliability across every transaction",
  //     "Backed by BI Group's reputation for quality",
  //   ],
  // },
  // {
  //   title: "Industrial Solutions",
  //   href: "/products/industrial-solutions",
  //   subtitle: "Industrial",
  //   image: "/business-industrial.jpg",
  //   icon: Factory,
  //   description:
  //     "End-to-end industrial solutions supporting manufacturers and infrastructure projects across India with reliable, high-quality delivery.",
  //   highlights: [
  //     "End-to-end support for manufacturers & infrastructure projects",
  //     "Reliable, high-quality delivery across India",
  //     "Backed by BI Group's manufacturing and QC infrastructure",
  //   ],
  // },
];
