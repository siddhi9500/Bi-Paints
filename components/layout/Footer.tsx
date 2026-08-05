"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronRight, Zap } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const LEFT_LINKS = [
  { label: "Contact us", href: "/contact" },
  { label: "News and Insights", href: "/newsroom" },
  { label: "Partners", href: "/about" },
];

const NAV_LINKS = [
  { label: "Who we are", href: "/about" },
  { label: "Our business areas", href: "/products" },
  { label: "Products and services", href: "/services" },
  { label: "End to End Solutions", href: "/solutions" },
  { label: "Careers", href: "/careers" },
];

const BOTTOM_LINKS = [
  { label: "Accessibility Statement", href: "/accessibility", accent: false },
  { label: "Cookie Policy", href: "/cookie-policy", accent: false },
  { label: "Human Rights Request", href: "/human-rights", accent: true },
  { label: "Privacy Policy", href: "/privacy", accent: false },
];

const INDUSTRIES = ["Paints & Coatings", "Wellness", "Fashion & Lifestyle", "Modular Kitchens", "Other"];

const SvgFacebook = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const SvgLinkedin = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2zm2-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
);
const SvgInstagram = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const SOCIALS = [
  { icon: SvgFacebook, href: "#", label: "Facebook" },
  { icon: SvgLinkedin, href: "#", label: "LinkedIn" },
  { icon: SvgInstagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", industry: "", consent: false });
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ name: "", email: "", industry: "", consent: false });
  };

  return (
    <footer ref={ref} className="bg-white">
      {/* section.newsletter (2276:549): px-312 py-64, gap-80 */}
      <div style={{ borderTop: "1px solid #e8e0ce" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="page-container flex flex-col lg:flex-row lg:items-center"
          style={{ paddingTop: 64, paddingBottom: 64, gap: 80 }}
        >
          <p className="lg:flex-1" style={{ fontWeight: 700, fontSize: 32, lineHeight: "42px", color: "#0f1f3d" }}>
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
        <div className="page-container grid grid-cols-1 md:grid-cols-3" style={{ paddingTop: 72, paddingBottom: 72, gap: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex flex-col"
            style={{ gap: 24 }}
          >
            <Link href="/" className="inline-block">
              <span style={{ fontWeight: 800, fontSize: 24, color: "#0f1f3d" }}>BI GROUP</span>
            </Link>
            <p style={{ fontSize: 14, lineHeight: "24px", color: "#555" }}>
              BI Group is one of India&apos;s leading paints and coatings solutions providers,
              combining quality with innovation and trust across multiple sectors.
            </p>
            <div className="flex flex-col" style={{ gap: 12 }}>
              {LEFT_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className="group inline-flex items-center hover:text-brand-dark" style={{ gap: 8 }}>
                  <span style={{ fontWeight: 600, fontSize: 14, color: "#1a5276" }}>{link.label}</span>
                  <ArrowRight size={12} className="text-brand transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="flex flex-col overflow-hidden self-start w-full"
            style={{ border: "1px solid #ede8df", borderRadius: 12 }}
          >
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center justify-between hover:bg-cream/60"
                style={{
                  padding: "18px 24px",
                  borderTop: i === 0 ? "none" : "1px solid #ede8df",
                  transition: "background-color 0.2s ease-in-out",
                }}
              >
                <span style={{ fontWeight: 500, fontSize: 15, color: "#0f1f3d" }}>{link.label}</span>
                <ChevronRight size={14} className="shrink-0 text-ink-dark transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            className="flex flex-col"
            style={{ gap: 32 }}
          >
            <div className="flex flex-col" style={{ gap: 20 }}>
              <h3 style={{ fontWeight: 700, fontSize: 22, color: "#0f1f3d" }}>
                Looking for the right coating solution for your project?
              </h3>
              <Link
                href="/contact"
                className="inline-flex items-center hover:bg-brand-dark w-fit"
                style={{ gap: 10, padding: "14px 24px", borderRadius: 10, background: "#1a5276" }}
              >
                <Zap size={14} className="text-white" />
                <span style={{ fontWeight: 600, fontSize: 15, color: "#fff" }}>Get in touch with our experts</span>
              </Link>
            </div>

            <div className="flex flex-col" style={{ gap: 16 }}>
              <p style={{ fontWeight: 600, fontSize: 14, color: "#0f1f3d" }}>Follow us</p>
              <div className="flex items-center" style={{ gap: 12 }}>
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex items-center justify-center text-ink-dark hover:bg-brand hover:text-white"
                    style={{ width: 36, height: 36, borderRadius: 18, background: "#f0ede8", transition: "all 0.2s ease-in-out" }}
                  >
                    <Icon />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* section.copyright (2276:629): bg #f5f3ee, px-312 py-20, text 13px */}
      <div style={{ borderTop: "1px solid #e8e0ce", background: "#f5f3ee" }}>
        <div className="page-container flex flex-col sm:flex-row items-center justify-between" style={{ paddingTop: 20, paddingBottom: 20, gap: 12 }}>
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
