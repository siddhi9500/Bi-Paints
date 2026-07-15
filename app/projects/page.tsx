import Image from "next/image";
import PageBanner from "@/components/layout/PageBanner";
import { PROJECTS } from "@/lib/data/projects";

export const metadata = {
  title: "Our Projects — BI Group of Companies",
  description:
    "Real projects delivered for Ministry of Defence, Godrej Group, Larsen & Toubro, and AM/NS Ports.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageBanner title="Our Projects" crumb="Projects" image="/banner1.jpg" />

      <section className="py-16 sm:py-20 bg-white">
        <div className="page-container flex flex-col gap-10">
          <p className="text-body text-ink max-w-2xl">
            A track record built on real projects, for real clients, across defence,
            industrial, and marine sectors.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {PROJECTS.map((project) => (
              <div key={project.client} className="flex flex-col">
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "3/2" }}>
                  <Image
                    src={project.image}
                    alt={project.client}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-5">
                  <span
                    className="inline-block px-3 py-1 text-xs font-bold text-white uppercase tracking-wide"
                    style={{ background: "#f5a200" }}
                  >
                    {project.badge}
                  </span>
                </div>
                <h3 className="font-bold text-heading mt-4 mb-1 leading-snug text-h5">
                  {project.client}
                </h3>
                <p className="text-ink text-small mb-1">{project.sector}</p>
                <p className="text-small font-semibold text-primary">{project.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
