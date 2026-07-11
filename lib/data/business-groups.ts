// Shared across Navbar's "About Us" dropdown, the homepage hero, and the
// "Our Verticals" section.
export interface BusinessGroup {
  title: string;
  href: string;
  description: string;
  subtitle?: string;
  image?: string;
}

export const BUSINESS_GROUPS: BusinessGroup[] = [
  {
    title: "BI Paints India",
    href: "/products/paints",
    subtitle: "Paints & Coatings",
    image: "/vertical-paints.png",
    description:
      "India's leading manufacturer of high-performance protective coatings. Trusted by Reliance, Adani, Godrej & Boyce, and the Indian Air Force.",
  },
  {
    title: "Wellness & Homeopathy",
    href: "/products/hvac",
    subtitle: "Homeopathy",
    image: "/vertical-wellness.png",
    description:
      "Holistic health solutions rooted in traditional homeopathic science, crafted for modern living and everyday well-being.",
  },
  {
    title: "Fashion & Lifestyle",
    href: "/products/electronics",
    subtitle: "Lifestyle Brand",
    image: "/vertical-fashion.png",
    description:
      "Contemporary fashion and lifestyle products that blend style with substance, designed for the discerning modern consumer.",
  },
];
