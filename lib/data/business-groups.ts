// Shared across Navbar's "About Us"/"Products" dropdowns, the homepage hero,
// the "Our Verticals" section, and the /products/[slug] detail pages.
export interface BusinessGroup {
  title: string;
  href: string;
  description: string;
  subtitle?: string;
  image?: string;
  highlights?: string[];
}

export const BUSINESS_GROUPS: BusinessGroup[] = [
  {
    title: "BI Paints & Coatings",
    href: "/products/paints",
    subtitle: "Paints & Coatings",
    image: "/vertical-paints.png",
    description:
      "Paint manufacturing, industrial painting services, and protective, marine & power plant coatings — trusted by Reliance, Adani, Godrej & Boyce, and the Indian Air Force.",
    highlights: [
      "3,00,000 litres daily production capacity",
      "ISO 9001:2015 & ISO 14001:2015 certified manufacturing",
      "Protective, marine & power plant coatings",
      "Industrial painting services end to end",
    ],
  },
  {
    title: "Homeopathy Products",
    href: "/products/homeopathy",
    subtitle: "Wellness",
    image: "/vertical-wellness.png",
    description:
      "Holistic health solutions rooted in traditional homeopathic science, crafted for modern living and everyday well-being.",
    highlights: [
      "Formulated on traditional homeopathic science",
      "Crafted for modern, everyday wellness routines",
      "Held to the same quality standards as every BI Group business",
    ],
  },
  {
    title: "Industrial Solutions",
    href: "/products/industrial-solutions",
    subtitle: "Industrial",
    image: "/business-industrial.jpg",
    description:
      "End-to-end industrial solutions supporting manufacturers and infrastructure projects across India with reliable, high-quality delivery.",
    highlights: [
      "End-to-end support for manufacturers & infrastructure projects",
      "Reliable, high-quality delivery across India",
      "Backed by BI Group's manufacturing and QC infrastructure",
    ],
  },
];
