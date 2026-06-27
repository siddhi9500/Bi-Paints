import Image from "next/image";
import FadeInSection from "@/components/ui/FadeInSection";

interface Project {
  client: string;
  logo?: string;
  sector: string;
  quote: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    client: "Ministry of Defence",
    logo: "/client-ministry-of-defence.png",
    sector: "Aerospace & Defence Manufacturing",
    quote: "Bi Paints has delivered unparalleled protection for critical defence infrastructure — coatings engineered to endure the harshest conditions with exceptional durability and corrosion resistance.",
    image: "/project-defence.jpg",
  },
  {
    client: "Godrej Group",
    logo: "/client-godrej.png",
    sector: "Process Equipment Division",
    quote: "Bi Paints has fortified their industrial assets with superior protective coatings engineered to withstand corrosion, wear, and environmental exposure.",
    image: "/project-godrej.jpg",
  },
  {
    client: "Larsen & Toubro",
    logo: "/client-lt.png",
    sector: "Power Boilers, Hazira",
    quote: "Bi Paints has provided cutting-edge protective coatings to enhance the durability and performance of large-scale industrial projects.",
    image: "/project-lt.jpg",
  },
  {
    client: "AM/NS Ports",
    logo: "/client-amns-ports.png",
    sector: "Marine & Port Infrastructure",
    quote: "Bi Paints has delivered robust protective coatings designed to withstand the harsh marine environment — corrosion, saltwater, and weathering.",
    image: "/project-amns-ports.jpg",
  },
];

export default function TrustedProjectsSection() {
  return (
    <section className="py-20">
      <div className="page-container">
        <FadeInSection className="mb-10">
          <span className="inline-block text-accent font-bold tracking-[0.2em] uppercase text-xs mb-3">
            Real Projects, Real Clients
          </span>
          <h2 className="text-3xl xl:text-4xl font-extrabold text-navy leading-tight">
            Trusted in the Field
          </h2>
          <p className="text-gray-500 text-sm mt-2">Hover a card to see who we worked with</p>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PROJECTS.map((project, i) => (
            <FadeInSection key={project.client} delay={i * 0.1} className="h-full">
              <div className="group h-full" style={{ perspective: 1200 }}>
                <div
                  className="relative h-full transition-transform duration-700 group-hover:transform-[rotateY(180deg)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front face */}
                  <div
                    className="h-full bg-white rounded-lg overflow-hidden flex flex-col shadow-sm group-hover:shadow-md transition-shadow duration-300"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
                      <Image
                        src={project.image}
                        alt={`${project.client} — ${project.sector}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-5 flex flex-col grow">
                      <h3 className="font-bold text-navy text-base mb-0.5">{project.client}</h3>
                      <p className="text-accent text-xs font-semibold uppercase tracking-wide mb-3">
                        {project.sector}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.quote}</p>
                    </div>
                  </div>

                  {/* Back face */}
                  <div
                    className="absolute inset-0 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center p-6 border border-gray-100"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    {project.logo ? (
                      <div className="relative w-56 h-24 max-w-full">
                        <Image
                          src={project.logo}
                          alt={project.client}
                          fill
                          className="object-contain"
                          sizes="224px"
                        />
                      </div>
                    ) : (
                      <h3 className="text-navy font-extrabold text-xl text-center leading-snug">
                        {project.client}
                      </h3>
                    )}
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide mt-5 text-center">
                      {project.sector}
                    </p>
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
