"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";

const CLIENTS = [
  { name: "ElectroMech", logo: "/client-electromech.png" },
  { name: "Chowgule Group", logo: "/client-chowgule.png" },
  { name: "UNP Polyvalves", logo: "/client-unp-polyvalves.png" },
  { name: "AM/NS India", logo: "/client-amns-india.png" },
  { name: "AM/NS Ports", logo: "/client-amns-ports.png" },
  { name: "Lohr India", logo: "/client-lohr.png" },
  { name: "Godrej Group", logo: "/client-godrej.png" },
  { name: "Laxmipati Engineerings", logo: "/client-laxmipati.png" },
  { name: "Larsen & Toubro", logo: "/client-lt.png" },
  { name: "NAFTech", logo: "/client-naftech.png" },
  { name: "Marini Fayat Group", logo: "/client-marini.png" },
];

const UPCOMING_CLIENTS = [
  { name: "Pidilite", logo: "/upcoming-pidilite.png" },
  { name: "KYB", logo: "/upcoming-kyb.png" },
  { name: "IMD", logo: "/upcoming-imd.png" },
  { name: "Coromandel", logo: "/upcoming-coromandel.png" },
  { name: "Alltech Engineering", logo: "/upcoming-alltech.png" },
  { name: "Suzlon", logo: "/upcoming-suzlon.png" },
  { name: "SHM", logo: "/upcoming-shm.png" },
  { name: "United Crane Components", logo: "/upcoming-united-crane.png" },
  { name: "SRF", logo: "/upcoming-srf.png" },
  { name: "Valiant Organics", logo: "/upcoming-valiant-organics.png" },
  { name: "HP", logo: "/upcoming-hp.png" },
  { name: "Reliance Industries", logo: "/upcoming-reliance.png" },
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
      <div className="page-container">
        <FadeInSection className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy">
            Our Valuable Clients
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Trusted by manufacturers, EPC contractors, and industrial leaders across India
          </p>
        </FadeInSection>
      </div>

      {/* ── Auto-sliding marquee (centered within page width) ── */}
      <div className="page-container mb-12">
        <div
          className="relative overflow-hidden py-2"
          style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}
        >
          <div className="flex gap-4 justify-center" style={{ animation: "marquee 32s linear infinite", width: "max-content" }}>
            <MarqueeTrack clients={CLIENTS} />
            <MarqueeTrack clients={CLIENTS} />
          </div>
        </div>
      </div>

      <div className="page-container">
        <FadeInSection className="text-center mb-8">
          <h3 className="text-lg md:text-xl font-bold text-navy">Upcoming Customers</h3>
        </FadeInSection>
      </div>

      <div className="page-container mb-8">
        <div
          className="relative overflow-hidden py-2"
          style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}
        >
          <div className="flex gap-4 justify-center" style={{ animation: "marquee-reverse 32s linear infinite", width: "max-content" }}>
            <MarqueeTrack clients={UPCOMING_CLIENTS} />
            <MarqueeTrack clients={UPCOMING_CLIENTS} />
          </div>
        </div>
      </div>

      <div className="page-container">
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
