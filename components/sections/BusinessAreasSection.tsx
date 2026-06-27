import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import { GradualSpacing } from "@/components/ui/GradualSpacing";

interface BusinessArea {
  title: string;
  description: string;
  image: string;
  href: string;
}

const STATS = [
  { value: "300K", suffix: "+", label: "Products Distributed Across India" },
  { value: "500", suffix: "+", label: "Countries we export to — Dubai, Thailand, Bangladesh, Sri Lanka & Maldives" },
  { value: "10", suffix: "", label: "Years of Industry Excellence" },
];

// const AREAS: BusinessArea[] = [
//   {
//     title: "Decorative Paints",
//     description: "Interior and exterior coatings for homes, offices, and public spaces — premium emulsions, floor coating systems, and fully customised paint solutions.",
//     image: "/business-decorative.jpg",
//     href: "/products/paints",
//   },
//   {
//     title: "Protective Coating",
//     description: "Anti-corrosive systems for the harshest conditions — epoxy, polyurethane, zinc-rich primers, heat-resistant and fire-protection coatings for power plants and industry.",
//     image: "/business-protective.jpg",
//     href: "/solutions/industrial",
//   },
//   {
//     title: "Automotive",
//     description: "Surface treatments, base-coats and top-coats for motor vehicle manufacturing.",
//     image: "/business-automotive.jpg",
//     href: "/products",
//   },
//   {
//     title: "Powder Coating",
//     description: "Durable, eco-friendly powder finishes for structural steel and fabrication.",
//     image: "/business-powder.jpg",
//     href: "/products/fabrication",
//   },
//   {
//     title: "Marine Coating",
//     description: "Hull, ballast, and deck coatings that keep vessels protected at sea.",
//     image: "/business-marine.jpg",
//     href: "/solutions/marine",
//   },
//   {
//     title: "Aerospace Coatings",
//     description: "High-performance coatings that protect and reflect, built to aerospace standards.",
//     image: "/business-aerospace.jpg",
//     href: "/products",
//   },
//   {
//     title: "Yacht & Boat Coating",
//     description: "Premium finishes for yachts and boats, balancing durability with design.",
//     image: "/business-yacht.jpg",
//     href: "/products",
//   },
//   {
//     title: "Container Coating",
//     description: "Newbuild and repair coatings that extend container lifetimes worldwide.",
//     image: "/business-container.jpg",
//     href: "/products",
//   },
//   {
//     title: "Industrial",
//     description: "End-to-end industrial painting — surface preparation, abrasive blasting, water jetting, tank and structural steel painting, pipeline coating, and shutdown maintenance support.",
//     image: "/business-industrial.jpg",
//     href: "/solutions/industrial",
//   },
// ];

export default function BusinessAreasSection() {
  return (
    <section className="py-20 bg-white">
      <div className="page-container">
        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10 text-center sm:text-left">
          {STATS.map((stat, i) => (
            <FadeInSection key={stat.label} delay={i * 0.5}>
              <div
                className="leading-none mb-4 text-center"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(2.4rem, 4vw, 4.4rem)",
                  color: "#1b4676",
                  fontWeight: 600,
                }}
              >
                <div className="inline-flex items-baseline justify-center w-full">
                  <GradualSpacing
                    text={stat.value}
                    className="leading-none"
                    containerClassName="inline-flex"
                    startDelay={i * 0.5}
                  />
                  {stat.suffix && (
                    <GradualSpacing
                      text={stat.suffix}
                      className="leading-none"
                      containerClassName="inline-flex"
                      style={{ color: "#f5a200" }}
                      startDelay={i * 0.5 + stat.value.length * 0.1}
                    />
                  )}
                </div>
              </div>
              <p className="text-gray-600 text-md leading-relaxed max-w-xs sm:max-w-none mx-auto sm:mx-0 text-center">
                {stat.label}
              </p>
            </FadeInSection>
          ))}
        </div>

        {/* Heading */}
        {/* <FadeInSection className="my-4 xl:mb-10">
          <GradualSpacing
            text="Explore Our Business Areas"
            className="text-3xl sm:text-4xl font-semibold text-navy"
            containerClassName="flex flex-wrap space-x-1 justify-center sm:justify-start"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          />
          <div className="w-12 h-1 bg-accent mt-4 rounded mx-auto sm:mx-0" />
        </FadeInSection> */}

        {/* Grid */}
        {/* <div className="grid grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-3 md:gap-8">
          {AREAS.map((area, i) => (
            <FadeInSection key={area.title} delay={(i % 3) * 0.1}>
              <Link href={area.href} className="group flex h-full flex-col">
                <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 2" }}>
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div className="flex grow flex-col items-start bg-gray-50 px-4 py-4 transition-colors md:px-6 md:py-6 group-hover:bg-gray-100">
                  <div className="mb-2 flex w-full items-start justify-between gap-2 md:mb-4">
                    <h3 className="text-xl font-light text-black md:text-2xl">
                      {area.title}
                    </h3>
                    <ArrowRight
                      size={20}
                      className="mt-1 shrink-0 text-gray-400 transition-colors duration-300 group-hover:text-black"
                    />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 md:text-base">
                    {area.description}
                  </p>
                </div>
              </Link>
            </FadeInSection>
          ))}
        </div> */}
      </div>
    </section>
  );
}
