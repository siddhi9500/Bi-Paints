import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";

interface Solution {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  href: string;
}

const SOLUTIONS: Solution[] = [
  {
    title: "For HVAC",
    subtitle: "Painting Solutions",
    description:
      "End-to-end HVAC solutions — from load calculation and system design to supply, installation, testing, and annual maintenance. One partner for the complete HVAC lifecycle.",
    icon: "🏡",
    href: "/solutions/residential",
  },
  {
    title: "Painting Solutions",
    subtitle: "Coating Projects",
    description:
      "Full-service painting — surface preparation, priming, paint application, and finishing. Interior, exterior, industrial, and decorative painting using our own BI Paints range.",
    icon: "🏢",
    href: "/solutions/commercial",
  },
  {
    title: "For Modular Kitchens",
    subtitle: "Protection Systems",
    description:
      "Complete kitchen transformation — design consultation, material selection, precision manufacturing, and professional installation with post-delivery service support.",
    icon: "⚙️",
    href: "/solutions/industrial",
  },
  {
    title: "Fabrication",
    subtitle: "Protective Coatings",
    description:
      "Turnkey fabrication — from raw material procurement and workshop fabrication to site erection and finishing. Structural, architectural, and industrial applications.",
    icon: "⚓",
    href: "/solutions/marine",
  },
];

export default function SolutionsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="page-container">
        <FadeInSection className="text-center mb-14">
          <span className="inline-block text-accent font-bold tracking-[0.2em] uppercase text-xs mb-3">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
            End to End Solutions
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded" />
          <p className="text-gray-500 mt-5 max-w-xl mx-auto text-sm leading-relaxed">
            One company, complete ownership — from concept to commissioning.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS.map((solution, i) => (
            <FadeInSection key={solution.title} delay={i * 0.1}>
              <div className="relative rounded-lg overflow-hidden h-80 group cursor-pointer">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light  transition-all duration-500" />

                {/* Decorative circle */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-500" />
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-white/5" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-7">
                  <div>
                    <span className="text-xl mb-3 block">{solution.icon}</span>
                    <h6 className="text-lg font-black text-white leading-tight mb-5">
                      {solution.title}
                      <br />
                    </h6>
                    <p className="text-white/70 text-sm leading-relaxed mb-5 line-clamp-3">
                      {solution.description}
                    </p>
                  </div>

                  <div>
                    <Link
                      href={solution.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white border border-white/40 hover:border-white hover:bg-white hover:text-navy px-4 py-2 rounded-full transition-all duration-300"
                    >
                      Know More →
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
