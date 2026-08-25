"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const BUSINESS_LINKS = [
  { label: "Paints & Coatings", href: "/products/paints" },
  { label: "Modular Interiors", href: "/products" },
  { label: "Engineering Services", href: "/products" },
  { label: "Industrial Solutions", href: "/products" },
  { label: "End to End Solutions", href: "/solutions" },
];

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Leadership", href: "/about" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Careers", href: "/careers" },
  { label: "News & Insights", href: "/newsroom" },
  { label: "Partners", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const CONTACT_ITEMS = [
  { icon: MapPin, label: "Location", value: "Plot No. G-505, Boranada, Jodhpur, Rajasthan, India" },
  { icon: Mail, label: "Email", value: "info@bipaints.com", href: "mailto:info@bipaints.com" },
  { icon: Phone, label: "Phone", value: "+91 1234 567890", href: "tel:+911234567890" },
];

const BOTTOM_LINKS = [
  { label: "Accessibility Statement", href: "/accessibility", accent: false },
  { label: "Cookie Policy", href: "/cookie-policy", accent: false },
  { label: "Human Rights Request", href: "/human-rights", accent: true },
  { label: "Privacy Policy", href: "/privacy", accent: false },
];

const INDUSTRIES = ["Paints & Coatings", "Wellness", "Fashion & Lifestyle", "Modular Kitchens", "Other"];

// lucide-react ships no brand/social glyphs, so these stay hand-drawn.
const SvgFacebook = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const SvgInstagram = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const SvgLinkedin = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2zm2-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
);

const SOCIALS = [
  { icon: SvgFacebook, href: "#", label: "Facebook" },
  { icon: SvgInstagram, href: "#", label: "Instagram" },
  { icon: SvgLinkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", industry: "", consent: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ name: "", email: "", industry: "", consent: false });
  };

  return (
    <footer className="bg-white">
      {/* section.newsletter (2276:549): px-312 py-64, gap-80 */}
      <div style={{ borderTop: "1px solid ##f4f7fb",background: "#f4f7fb" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col lg:flex-row lg:items-center px-6 sm:px-10 lg:px-35"
          style={{ paddingTop: 64, paddingBottom: 64, gap: 80 }}
        >
          <p
            className="lg:flex-1"
            style={{ fontFamily: "var(--font-pt-serif)", fontWeight: 700, fontSize: 32, lineHeight: "42px", color: "#0f1f3d" }}
          >
            Subscribe to BI Insider and get the latest industry updates
          </p>

          <form onSubmit={handleSubmit} className="lg:flex-1 flex flex-col" style={{ gap: 16 }}>
            <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: 16 }}>
              <input
                type="text"
                placeholder="First and last name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                required
                className="bg-white outline-none placeholder:text-[#999] focus:border-brand"
                style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid #d1c9b8", fontSize: 14, color: "#0f1f3d" }}
              />
              <input
                type="email"
                placeholder="Your e-mail address"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                required
                className="bg-white outline-none placeholder:text-[#999] focus:border-brand"
                style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid #d1c9b8", fontSize: 14, color: "#0f1f3d" }}
              />
              <select
                value={form.industry}
                onChange={(e) => setForm((f) => ({ ...f, industry: e.target.value }))}
                className="bg-white outline-none appearance-none focus:border-brand"
                style={{
                  padding: "14px 16px",
                  borderRadius: 8,
                  border: "1px solid #d1c9b8",
                  fontSize: 14,
                  color: form.industry ? "#0f1f3d" : "#999",
                }}
              >
                <option value="" disabled>
                  Choose your preferred…
                </option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center" style={{ gap: 24 }}>
              <label className="flex items-start flex-1 cursor-pointer select-none" style={{ gap: 10 }}>
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                  required
                  className="mt-0.5 shrink-0 accent-brand"
                  style={{ width: 16, height: 16, borderRadius: 3 }}
                />
                <span style={{ fontSize: 13, color: "#555" }}>
                  I consent to my e-mail address being used in accordance with our{" "}
                  <Link href="/privacy" className="underline hover:text-brand" style={{ transition: "color 0.2s ease-in-out" }}>
                    privacy policy
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                className="shrink-0 hover:bg-brand-dark"
                style={{ padding: "14px 32px", borderRadius: 8, fontSize: 15, fontWeight: 600, color: "#fff", background: "#1a5276" }}
              >
                Subscribe
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* section.footer-main (2276:567): px-312 py-72, gap-80 */}
      <div style={{ borderTop: "1px solid #e8e0ce" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-6 sm:px-10 lg:px-35"
          style={{ paddingTop: 72, paddingBottom: 72, gap: 48 }}
        >
          <motion.div variants={fadeUp} className="flex flex-col" style={{ gap: 20 }}>
            <Link href="/" className="inline-block w-fit">
              <Image src="/bi-logo.svg" alt="BI Group" width={200} height={57} style={{ height: 40, width: "auto" }} />
            </Link>
            <p style={{ fontSize: 13, lineHeight: "20.8px", color: "#6b7280" }}>
              BI Group is a leading manufacturer of paints, coatings &amp; engineering solutions, delivering
              innovative, high-performance products for industrial, infrastructure, and residential sectors
              across India.
            </p>
            <div className="flex flex-col" style={{ gap: 12 }}>
              <p style={{ fontWeight: 600, fontSize: 13, color: "#0f1f3d" }}>Follow Us:</p>
              <div className="flex items-center" style={{ gap: 12 }}>
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex items-center justify-center text-white hover:bg-brand"
                    style={{ width: 36, height: 36, borderRadius: 18, background: "#0f1f3d", transition: "background-color 0.2s ease-in-out" }}
                  >
                    <Icon />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col" style={{ gap: 20 }}>
            <div className="flex flex-col" style={{ gap: 8 }}>
              <h3 style={{ fontWeight: 700, fontSize: 18, color: "#0f1f3d" }}>Our Businesses</h3>
              <span style={{ width: 40, height: 3, borderRadius: 2, background: "#c8963e" }} />
            </div>
            <div className="flex flex-col" style={{ gap: 10 }}>
              {BUSINESS_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-brand-dark" style={{ fontSize: 14, color: "#6b7280", transition: "color 0.2s ease-in-out" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col" style={{ gap: 20 }}>
            <div className="flex flex-col" style={{ gap: 8 }}>
              <h3 style={{ fontWeight: 700, fontSize: 18, color: "#0f1f3d" }}>Quick Links</h3>
              <span style={{ width: 40, height: 3, borderRadius: 2, background: "#c8963e" }} />
            </div>
            <div className="flex flex-col" style={{ gap: 10 }}>
              {QUICK_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-brand-dark" style={{ fontSize: 14, color: "#6b7280", transition: "color 0.2s ease-in-out" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col" style={{ gap: 20 }}>
            <div className="flex flex-col" style={{ gap: 8 }}>
              <h3 style={{ fontWeight: 700, fontSize: 18, color: "#0f1f3d" }}>Get In Touch</h3>
              <span style={{ width: 40, height: 3, borderRadius: 2, background: "#c8963e" }} />
            </div>
            <div className="flex flex-col" style={{ gap: 16 }}>
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => {
                const row = (
                  <div className="flex items-start" style={{ gap: 12 }}>
                    <span
                      className="flex items-center justify-center shrink-0"
                      style={{ width: 28, height: 28, borderRadius: 14, background: "#c8963e" }}
                    >
                      <Icon size={14} className="text-white" />
                    </span>
                    <div className="flex flex-col" style={{ gap: 2 }}>
                      <p style={{ fontWeight: 700, fontSize: 13, color: "#0f1f3d" }}>{label}</p>
                      <p style={{ fontSize: 12, lineHeight: 1.5, color: "#6b7280" }}>{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <Link key={label} href={href} className="hover:opacity-80">
                    {row}
                  </Link>
                ) : (
                  <div key={label}>{row}</div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* section.copyright (2276:629): bg #f5f3ee, px-312 py-20, text 13px */}
      <div style={{ borderTop: "1px solid #f4f7fb", background: "#f4f7fb" }}>
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 lg:px-35" style={{ paddingTop: 20, paddingBottom: 20, gap: 12 }}>
          <p style={{ fontSize: 13, color: "#777" }}>{new Date().getFullYear()} © BI Group of Companies. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center" style={{ columnGap: 32, rowGap: 4 }}>
            {BOTTOM_LINKS.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-brand" style={{ fontSize: 13, color: item.accent ? "#1a5276" : "#555", transition: "color 0.2s ease-in-out" }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
