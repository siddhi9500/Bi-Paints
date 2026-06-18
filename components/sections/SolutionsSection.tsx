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
    title: "Residential",
    subtitle: "Painting Solutions",
    description:
      "Complete interior and exterior painting packages for homes, villas, and apartments — designed for lasting beauty and easy maintenance.",
    icon: "🏡",
    href: "/solutions/residential",
  },
  {
    title: "Commercial",
    subtitle: "Coating Projects",
    description:
      "Tailored coating systems for offices, retail spaces, hotels, and commercial buildings that combine aesthetics with durability.",
    icon: "🏢",
    href: "/solutions/commercial",
  },
  {
    title: "Industrial",
    subtitle: "Protection Systems",
    description:
      "Heavy-duty corrosion protection, fire-retardant coatings, and chemical-resistant finishes engineered for industrial environments.",
    icon: "⚙️",
    href: "/solutions/industrial",
  },
  {
    title: "Marine",
    subtitle: "Protective Coatings",
    description:
      "Anti-fouling, anti-corrosion, and topcoat systems formulated for ships, jetties, offshore structures, and coastal infrastructure.",
    icon: "⚓",
    href: "/solutions/marine",
  },
];

export default function SolutionsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeInSection className="text-center mb-14">
          <span className="inline-block text-accent font-bold tracking-[0.2em] uppercase text-xs mb-3">
            End to End
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
            Complete Coating Solutions
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded" />
          <p className="text-gray-500 mt-5 max-w-xl mx-auto text-sm leading-relaxed">
            From concept to completion, BI Paints provides fully managed coating
            solutions across residential, commercial, industrial, and marine sectors.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS.map((solution, i) => (
            <FadeInSection key={solution.title} delay={i * 0.1}>
              <div className="relative rounded-lg overflow-hidden h-80 group cursor-pointer">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light group-hover:from-accent-dark group-hover:via-accent group-hover:to-accent transition-all duration-500" />

                {/* Decorative circle */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-500" />
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-white/5" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-7">
                  <div>
                    <span className="text-4xl mb-4 block">{solution.icon}</span>
                    <h3 className="text-xl font-black text-white leading-tight">
                      {solution.title}
                      <br />
                      <span className="text-white/70 font-semibold text-base">
                        {solution.subtitle}
                      </span>
                    </h3>
                  </div>

                  <div>
                    <p className="text-white/70 text-sm leading-relaxed mb-5 line-clamp-3">
                      {solution.description}
                    </p>
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
