import Image from "next/image";
import Link from "next/link";
import WelcomeSection from "@/components/sections/WelcomeSection";

export default function AboutPage() {
  return (
    <>
      {/* Page header banner */}
      <section className="relative" style={{ height: 280 }}>
        <Image
          src="/banner1.jpg"
          alt="BI Group of Companies"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "rgba(13, 30, 51, 0.72)" }} />
        <div className="page-container relative h-full flex flex-col items-start justify-center">
          <h1
            className="text-white text-3xl md:text-4xl font-extrabold"
            style={{ fontFamily: "var(--font-montserrat), Arial, sans-serif" }}
          >
            About Us
          </h1>
          <div className="flex items-center gap-2 mt-3 text-sm">
            <Link href="/" className="text-white/70 hover:text-white">
              Home
            </Link>
            <span className="text-white/50">/</span>
            <span className="text-white font-semibold">About Us</span>
          </div>
        </div>
      </section>

      <WelcomeSection />
    </>
  );
}
