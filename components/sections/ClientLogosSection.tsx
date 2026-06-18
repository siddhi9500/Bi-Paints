"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";

const CLIENTS = [
  { name: "Larsen & Toubro", logo: "/client-logo.png" },
  { name: "Essar", logo: "/client-logo0.png" },
  { name: "JHT Heaters", logo: "/client-logo1.png" },
  { name: "JNJ Machines", logo: "/client-logo2.png" },
];

function MarqueeTrack({ clients }: { clients: typeof CLIENTS }) {
  return (
    <div className="flex items-center gap-4 px-2">
      {clients.map((client, i) => (
        <div
          key={`${client.name}-${i}`}
          className="flex-shrink-0 bg-white border border-gray-200 rounded flex items-center justify-center p-4 hover:border-accent hover:shadow-sm transition-all duration-200"
          style={{ width: 150, height: 100 }}
        >
          <div className="relative w-full h-full">
            <Image
              src={client.logo}
              alt={client.name}
              fill
              className="object-contain"
              sizes="150px"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ClientLogosSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeInSection className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy">
            Our Valuable Clients
          </h2>
        </FadeInSection>
      </div>

      {/* ── Auto-sliding marquee (centered within page width) ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
        <div
          className="relative overflow-hidden py-2"
          style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}
        >
          <div className="flex gap-4 justify-center" style={{ animation: "marquee 18s linear infinite", width: "max-content" }}>
            <MarqueeTrack clients={CLIENTS} />
            <MarqueeTrack clients={CLIENTS} />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeInSection delay={0.2}>
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            View All Clients <ArrowRight size={16} />
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
}
