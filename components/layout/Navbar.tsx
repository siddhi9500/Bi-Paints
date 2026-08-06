"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight, ExternalLink, Search } from "lucide-react";
import { EASE_OUT } from "@/lib/motion";

const ABOUT_LINKS = [
  { label: "Overview", href: "/about" },
  { label: "Group Profile", href: "/about" },
  { label: "Vision & Values", href: "/about" },
  { label: "History", href: "/about" },
  { label: "Awards", href: "/about" },
  { label: "Leadership", href: "/about" },
  { label: "Spotlight", href: "/about" },
  { label: "CSR", href: "/about" },
];

// Desktop "About Us" mega-menu (Figma: "About Us" page header, node 2605:2525)
// — richer than the other nav dropdowns, so it's handled as a special case.
const ABOUT_MEGA_MENU = {
  links: [
    { label: "Overview", href: "/about" },
    { label: "What We Do", href: "/about" },
    { label: "Where We Are", href: "/about" },
    { label: "Our Achievements", href: "/about" },
    { label: "Our Journey", href: "/about" },
  ],
  primaryLink: { label: "About BiGroup", href: "/about" },
  secondaryLinks: [
    { label: "About BiGroup", href: "/about" },
    { label: "Media Centre", href: "/newsroom" },
    { label: "Financial & Annual Reports", href: "/investors" },
  ],
  feature: {
    title: "Where We Are",
    description:
      "From manufacturing hubs to distribution networks across India, BI Group's footprint spans the industries and regions that keep the country building, moving, and protected.",
    image: "/about-mega-warehouse.jpg",
    cta: { label: "Discover more", href: "/about" },
  },
  banner: {
    title: "Looking for paint and colour for your home?",
    cta: { label: "Go to the decorative website", href: "/products/paints" },
    image: "/about-mega-home-interior.jpg",
  },
};

const BUSINESS_LINKS = [
  { label: "HVAC Systems", href: "/products" },
  { label: "Electronics & Home Appliances", href: "/products" },
  { label: "Modular Kitchen", href: "/products" },
  { label: "Paints", href: "/products/paints" },
];

const INVESTOR_LINKS = [
  { label: "Financial Reports", href: "/investors" },
  { label: "Annual Reports", href: "/investors" },
  { label: "Investor Relations", href: "/investors" },
];

const NEWSROOM_LINKS = [
  { label: "Press Releases", href: "/newsroom" },
  { label: "Media Coverage", href: "/newsroom" },
  { label: "Events", href: "/newsroom" },
];

const LANGUAGES = ["English", "हिन्दी"];

// Exact Figma spec (nav.nav-menu, node 2832:230): Public Sans Bold, 14px,
// line-height 16.8px (1.2), uppercase, #000.
const NAV_TEXT_STYLE: React.CSSProperties = {
  fontSize: 14,
  lineHeight: "16.8px",
  fontWeight: 700,
  transition: "color 0.2s ease-in-out",
};

// Order matches the Figma nav-menu exactly: About Us, Businesses, Sustainability,
// Investors, Newsroom, BI Foundation, E-Commerce, Careers.
const NAV_ITEMS = [
  { key: "about", label: "About Us", href: "/about", dropdown: ABOUT_LINKS },
  { key: "businesses", label: "Businesses", href: "/products", dropdown: BUSINESS_LINKS },
  { key: "sustainability", label: "Sustainability", href: "/sustainability", dropdown: null },
  { key: "investors", label: "Investors", href: "/investors", dropdown: INVESTOR_LINKS },
  { key: "newsroom", label: "Newsroom", href: "/newsroom", dropdown: NEWSROOM_LINKS },
  { key: "foundation", label: "BI Foundation", href: "/bi-foundation", dropdown: null },
  { key: "ecommerce", label: "E-Commerce", href: "/ecommerce", dropdown: null },
  { key: "careers", label: "Careers", href: "/careers", dropdown: null },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState(LANGUAGES[0]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const open = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(key);
  };
  const close = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{
        boxShadow: scrolled ? "0px 2px 10px rgba(0,0,0,0.08)" : "0px 1px 0px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.25s ease-in-out",
      }}
    >
      {/* ── Desktop ── */}
      <div className="hidden xl:flex items-center justify-between px-8 h-20 mx-auto w-full">
        <Link href="/" className="shrink-0">
          <Image
            src="/bi-logo.svg"
            alt="BI Group"
            width={3305}
            height={550}
            style={{ height: 40, width: "auto" }}
          />
        </Link>

        <nav className="flex items-center gap-6.75">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={item.dropdown ? () => open(item.key) : undefined}
              onMouseLeave={item.dropdown ? close : undefined}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 uppercase whitespace-nowrap text-black hover:text-brand"
                style={NAV_TEXT_STYLE}
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-300 ${openDropdown === item.key ? "rotate-180" : ""}`}
                  />
                )}
              </Link>
              {item.dropdown && item.key !== "about" && (
                <AnimatePresence>
                  {openDropdown === item.key && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: EASE_OUT }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 rounded-2xl bg-white p-2 border border-black/5"
                      style={{ boxShadow: "0 24px 48px -12px rgba(15,31,61,0.2)" }}
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2.5 rounded-xl text-small font-medium text-ink-dark/85 hover:bg-brand/5 hover:text-brand"
                          style={{ transition: "all 0.15s ease-out" }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

            </div>
          ))}

          {/* "About Us" mega-menu — richer content than a plain link list.
              Rendered as a sibling (not nested in the small per-item
              wrapper) so its containing block is the fixed <header>, letting
              it stretch to the full page width instead of being capped to
              the "About Us" trigger's own positioning context. */}
          <AnimatePresence>
            {openDropdown === "about" && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.35, ease: EASE_OUT }}
                onMouseEnter={() => open("about")}
                onMouseLeave={close}
                className="absolute left-0 right-0 top-full bg-white border-t border-black/5 overflow-hidden"
                style={{ boxShadow: "0 24px 48px -12px rgba(15,31,61,0.15)" }}
              >
                <div className="grid grid-cols-[200px_300px_1fr]" style={{ gap: 56, padding: 40 }}>
                  <div className="flex flex-col items-start">
                    {ABOUT_MEGA_MENU.links.map((l) => (
                      <Link
                        key={l.label}
                        href={l.href}
                        className="hover:text-brand"
                        style={{
                          fontSize: 14,
                          fontWeight: 600,
                          lineHeight: "32px",
                          color: "rgba(0,0,0,0.75)",
                          letterSpacing: "-0.176px",
                          transition: "color 0.2s ease-in-out",
                        }}
                      >
                        {l.label}
                      </Link>
                    ))}
                    <Link
                      href={ABOUT_MEGA_MENU.primaryLink.href}
                      className="group inline-flex items-center hover:text-brand"
                      style={{ gap: 10, marginTop: 16 }}
                    >
                      <span
                        className="flex items-center justify-center shrink-0"
                        style={{ width: 17, height: 17, borderRadius: 2, background: "#05297c" }}
                      >
                        <ArrowRight size={13} className="text-white" />
                      </span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(0,0,0,0.75)", letterSpacing: "-0.176px" }}>
                        {ABOUT_MEGA_MENU.primaryLink.label}
                      </span>
                    </Link>
                  </div>

                  <div className="flex flex-col">
                    {ABOUT_MEGA_MENU.secondaryLinks.map((l) => (
                      <Link
                        key={l.label}
                        href={l.href}
                        className="group flex items-center hover:text-brand"
                        style={{ gap: 16, padding: "9px 0" }}
                      >
                        <span style={{ fontWeight: 400, fontSize: 20, color: "rgba(0,0,0,0.75)", letterSpacing: "-0.176px" }}>
                          {l.label}
                        </span>
                        <ChevronRight
                          size={14}
                          className="shrink-0 text-black/40 transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </Link>
                    ))}
                  </div>

                  <div className="flex flex-col" style={{ gap: 16, maxWidth: 460, justifySelf: "end" }}>
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "594 / 364", borderRadius: 12 }}>
                      <Image
                        src={ABOUT_MEGA_MENU.feature.image}
                        alt={ABOUT_MEGA_MENU.feature.title}
                        fill
                        className="object-cover"
                        sizes="420px"
                      />
                    </div>
                    <h3 style={{ fontWeight: 600, fontSize: 20, color: "rgba(0,0,0,0.75)", letterSpacing: "-0.176px" }}>
                      {ABOUT_MEGA_MENU.feature.title}
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: "22px", color: "rgba(0,0,0,0.75)" }}>
                      {ABOUT_MEGA_MENU.feature.description}
                    </p>
                    <Link
                      href={ABOUT_MEGA_MENU.feature.cta.href}
                      className="group inline-flex items-center w-fit hover:text-brand"
                      style={{ gap: 10 }}
                    >
                      <span
                        className="flex items-center justify-center shrink-0"
                        style={{ width: 17, height: 17, borderRadius: 2, background: "#05297c" }}
                      >
                        <ArrowRight size={13} className="text-white" />
                      </span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(0,0,0,0.75)", letterSpacing: "-0.176px" }}>
                        {ABOUT_MEGA_MENU.feature.cta.label}
                      </span>
                    </Link>
                  </div>
                </div>

                <div style={{ background: "#05297c" }}>
                  <div className="flex items-center" style={{ gap: 20, padding: "16px 40px" }}>
                    <div className="relative shrink-0 overflow-hidden" style={{ width: 100, height: 62, borderRadius: 8 }}>
                      <Image
                        src={ABOUT_MEGA_MENU.banner.image}
                        alt="Paint and colour for your home"
                        fill
                        className="object-cover"
                        sizes="100px"
                      />
                    </div>
                    <div className="flex flex-col" style={{ gap: 6 }}>
                      <p style={{ fontSize: 16, color: "#ffffff", margin: 0, letterSpacing: "-0.176px" }}>
                        {ABOUT_MEGA_MENU.banner.title}
                      </p>
                      <Link
                        href={ABOUT_MEGA_MENU.banner.cta.href}
                        className="group inline-flex items-center w-fit"
                        style={{ gap: 8 }}
                      >
                        <span
                          className="flex items-center justify-center shrink-0 bg-white"
                          style={{ width: 20, height: 20, borderRadius: 4 }}
                        >
                          <ExternalLink size={11} className="text-[#05297c]" />
                        </span>
                        <span style={{ fontWeight: 600, fontSize: 14, color: "#ffffff" }}>
                          {ABOUT_MEGA_MENU.banner.cta.label}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Language switcher — matches Figma's "ENG ▾", node I2832:242 */}
          <div className="relative" onMouseEnter={() => setLangOpen(true)} onMouseLeave={() => setLangOpen(false)}>
            <button className="flex items-center gap-1 uppercase whitespace-nowrap text-black hover:text-brand" style={NAV_TEXT_STYLE}>
              {lang === "English" ? "Eng" : lang}
              <ChevronDown size={13} className={`transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: EASE_OUT }}
                  className="absolute top-full right-0 mt-4 w-32 rounded-2xl bg-white p-2 border border-black/5"
                  style={{ boxShadow: "0 24px 48px -12px rgba(15,31,61,0.2)" }}
                >
                  {LANGUAGES.map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className="block w-full text-left px-4 py-2.5 rounded-xl text-small font-medium text-ink-dark/85 hover:bg-brand/5 hover:text-brand"
                      style={{ transition: "all 0.15s ease-out" }}
                    >
                      {l}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative flex items-center">
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0 }}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                  style={{ transformOrigin: "right", width: 180 }}
                  className="mr-2 overflow-hidden"
                >
                  <input
                    type="text"
                    placeholder="Search…"
                    autoFocus
                    className="w-full bg-cream rounded-full px-4 py-2 text-small text-ink-dark outline-none"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <button
              aria-label="Toggle search"
              onClick={() => setSearchOpen((v) => !v)}
              className="text-black hover:text-brand"
              style={{ transition: "color 0.2s ease-in-out" }}
            >
              <Search size={18} />
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile ── */}
      <div className="xl:hidden flex items-center justify-between px-6 h-16">
        <Link href="/">
          <Image
            src="/bi-logo.svg"
            alt="BI Group"
            width={3305}
            height={650}
            style={{ height: 30, width: "auto" }}
          />
        </Link>
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="p-2 relative text-ink-dark hover:text-brand"
          style={{ transition: "color 0.25s ease-in-out" }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? "x" : "menu"}
              initial={{ opacity: 0, rotate: -45, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.9 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
              className="flex"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* ── Mobile menu panel ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            className="xl:hidden bg-white border-t border-black/10 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-0.5 max-h-[75vh] overflow-y-auto">
              {NAV_ITEMS.map((item) =>
                item.dropdown ? (
                  <div key={item.key}>
                    <button
                      onClick={() => setMobileExpanded((v) => (v === item.key ? null : item.key))}
                      className="flex items-center justify-between w-full px-4 py-3 text-small font-bold uppercase text-ink-dark hover:text-brand hover:bg-black/3 rounded"
                      style={{ transition: "all 0.22s ease-in-out" }}
                    >
                      {item.label}
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-300 ${mobileExpanded === item.key ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === item.key && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: EASE_OUT }}
                          className="ml-4 pl-4 border-l-2 border-brand overflow-hidden"
                        >
                          <div className="space-y-3 mb-2 py-1">
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-1 text-small text-slate hover:text-brand"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-small font-bold uppercase text-ink-dark hover:text-brand hover:bg-black/3 rounded"
                    style={{ transition: "all 0.22s ease-in-out" }}
                  >
                    {item.label}
                  </Link>
                )
              )}

              <div className="flex items-center gap-2 px-4 pt-3">
                {LANGUAGES.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className="px-3 py-1.5 rounded-full text-[13px] font-semibold"
                    style={{
                      background: lang === l ? "var(--color-brand)" : "var(--color-cream)",
                      color: lang === l ? "#fff" : "var(--color-ink-dark)",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
