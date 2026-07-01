"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const LEFT_LINKS = [
  { label: "Contact us",       href: "/contact" },
  { label: "News and Insights", href: "/news" },
  { label: "Partners",         href: "/locations" },
];

const NAV_LINKS = [
  { label: "Who we are",           href: "/about" },
  { label: "Our business areas",   href: "/products" },
  { label: "Products and services", href: "/services" },
  { label: "End to End Solutions", href: "/solutions" },
  { label: "Careers",              href: "/careers" },
];

const BOTTOM_LINKS = [
  { label: "Accessibility Statement", href: "/accessibility", accent: false },
  { label: "Cookie Policy",           href: "/cookie-policy",  accent: false },
  { label: "Human Rights Request",    href: "/human-rights",   accent: true  },
  { label: "Privacy Policy",          href: "/privacy",        accent: false },
];

const SvgFacebook = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const SvgLinkedin = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2zm2-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
);
const SvgInstagram = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const SOCIALS = [
  { icon: SvgFacebook,  href: "#", label: "Facebook" },
  { icon: SvgLinkedin,  href: "#", label: "LinkedIn" },
  { icon: SvgInstagram, href: "#", label: "Instagram" },
];

const INDUSTRIES = [
  "Paints & Coatings",
  "Construction",
  "Marine",
  "Oil & Gas",
  "Manufacturing",
  "Infrastructure",
  "Other",
];

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", industry: "", consent: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ name: "", email: "", industry: "", consent: false });
  };

  return (
    <footer className="bg-white" style={{ borderTop: "1px solid #e8e8e8" }}>

      {/* ── Newsletter strip ── */}
      <div style={{ background: "#f5f5f5", borderBottom: "1px solid #e8e8e8" }}>
        <div className="page-container py-14">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">

            {/* Left: heading */}
            <div className="lg:w-2/5 shrink-0">
              <h2
                className="font-bold leading-snug"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#111827", fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Subscribe to BI Insider and get the latest industry updates
              </h2>
            </div>

            {/* Right: form */}
            <form onSubmit={handleSubmit} className="flex-1">
              {/* Three fields in a row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium" style={{ color: "#6b7280" }}>Name</label>
                  <input
                    type="text"
                    placeholder="First and last name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    required
                    className="px-4 py-2.5 text-sm bg-white outline-none placeholder:text-gray-400"
                    style={{ border: "1px solid #d1d5db", color: "#111827" }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium" style={{ color: "#6b7280" }}>E-mail</label>
                  <input
                    type="email"
                    placeholder="Your e-mail address"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    required
                    className="px-4 py-2.5 text-sm bg-white outline-none placeholder:text-gray-400"
                    style={{ border: "1px solid #d1d5db", color: "#111827" }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium" style={{ color: "#6b7280" }}>Industry</label>
                  <select
                    value={form.industry}
                    onChange={(e) => setForm((f) => ({ ...f, industry: e.target.value }))}
                    className="px-4 py-2.5 text-sm bg-white outline-none appearance-none"
                    style={{ border: "1px solid #d1d5db", color: form.industry ? "#111827" : "#9ca3af" }}
                  >
                    <option value="" disabled>Choose your preferred…</option>
                    {INDUSTRIES.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Consent checkbox */}
              <label className="flex items-start gap-2.5 mb-5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                  required
                  className="mt-0.5 shrink-0 accent-accent"
                />
                <span className="text-sm" style={{ color: "#6b7280" }}>
                  I consent to my e-mail address being used in accordance with our{" "}
                  <Link href="/privacy" className="underline hover:text-accent transition-colors" style={{ color: "#374151" }}>
                    privacy policy
                  </Link>
                  .
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="px-8 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ background: "#f5a200" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Main 3-column body ── */}
      <div className="page-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

          {/* ── Col 1: Logo + description + quick links ── */}
          <div className="pr-10 md:pr-14">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/bi-logo.svg"
                alt="BI Group of Companies"
                width={3305}
                height={650}
                style={{ height: 38, width: "auto" }}
              />
            </Link>
            <p className="text-sm leading-relaxed mb-7" style={{ color: "#6b7280", maxWidth: 280 }}>
              BI Group is one of India's leading paints and coatings solutions
              providers, combining quality with innovation and trust across
              multiple sectors.
            </p>
            <ul className="space-y-2.5">
              {LEFT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm underline transition-colors duration-200"
                    style={{ color: "#374151", textDecorationColor: "#9ca3af" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f5a200")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 2: Nav links with arrows ── */}
          <div
            className="py-8 md:py-0 md:px-14"
            style={{ borderLeft: "1px solid #e8e8e8", borderTop: "none" }}
          >
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between py-4 text-base transition-colors duration-200"
                    style={{ borderBottom: "1px solid #f3f4f6", color: "#374151" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f5a200")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
                  >
                    <span>{link.label}</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: "#9ca3af" }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: CTA + Follow us ── */}
          <div
            className="pt-8 md:pt-0 md:pl-14"
            style={{ borderLeft: "1px solid #e8e8e8" }}
          >
            <h3
              className="font-bold leading-snug mb-6"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "#111827" }}
            >
              Looking for the right coating solution for your project?
            </h3>

            {/* Jotun-style amber icon CTA */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 mb-12"
            >
              <span
                className="flex items-center justify-center shrink-0 transition-opacity duration-200 group-hover:opacity-80"
                style={{ width: 30, height: 30, background: "#f5a200" }}
              >
                <ArrowRight size={15} className="text-white" />
              </span>
              <span
                className="text-sm underline transition-colors duration-200 group-hover:text-accent"
                style={{ color: "#374151", textDecorationColor: "#9ca3af" }}
              >
                Get in touch with our experts
              </span>
            </Link>

            {/* Follow us */}
            <div>
              <p className="text-sm mb-3" style={{ color: "#6b7280" }}>
                Follow us
              </p>
              <div className="flex items-center gap-4">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="transition-colors duration-200 hover:text-accent"
                    style={{ color: "#374151" }}
                  >
                    <Icon />
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div style={{ borderTop: "1px solid #e8e8e8" }}>
        <div className="page-container py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm" style={{ color: "#6b7280" }}>
            {new Date().getFullYear()} © BI Group of Companies. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
            {BOTTOM_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm transition-colors duration-200 hover:text-accent"
                style={{ color: item.accent ? "#f5a200" : "#6b7280" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
