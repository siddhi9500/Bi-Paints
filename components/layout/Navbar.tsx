"use client";

import { Fragment, useState, useRef, useEffect } from "react";
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
    { label: "What We Do", href: "/what-we-do" },
    { label: "Where We Are", href: "/where-we-are" },
    { label: "Our Achievements", href: "/about/achievements" },
    { label: "Our Journey", href: "/about/journey" },
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
    cta: { label: "Discover more", href: "/where-we-are" },
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

// Desktop "Businesses" mega-menu (Figma: bi-businesses-mega-menu, node 3003:129)
// — 5 columns of category groups, handled as a special case like "About Us".
const BUSINESS_MEGA_COLUMNS: { category: string; href: string; links: string[] }[][] = [
  [
    {
      category: "BI Paints & Color Coating",
      href: "/products/paints",
      links: ["Interior Paints", "Exterior Paints", "Industrial Coatings", "Wood Finishes", "Waterproofing Solutions"],
    },
    {
      category: "BI Painting Solution",
      href: "/products/paints",
      links: ["Residential Painting", "Commercial Projects", "Texture & Decorative"],
    },
  ],
  [
    {
      category: "BI Modular Kitchen",
      href: "/products",
      links: ["L-Shape Kitchen", "U-Shape Kitchen", "Island Kitchen", "Wardrobe Solutions", "Storage Systems"],
    },
    {
      category: "BI Air Conditioner",
      href: "/products",
      links: ["Split AC", "Window AC", "Commercial HVAC"],
    },
  ],
  [
    {
      category: "BI Agriculture",
      href: "/products",
      links: ["Crop Protection", "Seeds & Fertilizers", "Farm Equipment", "Agri Logistics"],
    },
    {
      category: "BI Homeopathy",
      href: "/products/homeopathy",
      links: ["Clinical Care", "Wellness Products", "Research & Development"],
    },
  ],
  [
    {
      category: "BI Clothes",
      href: "/products/textile",
      links: ["Men's Wear", "Women's Wear", "Kids Collection", "Ethnic Wear"],
    },
    {
      category: "BI E-commerce",
      href: "/ecommerce",
      links: ["Online Marketplace", "B2B Portal", "Delivery Network"],
    },
  ],
  [
    {
      category: "BI Electronics",
      href: "/products",
      links: ["Home Appliances", "Smart Devices", "Audio & Visual"],
    },
    {
      category: "BI Engineering",
      href: "/products",
      links: ["Structural Fabrication", "Industrial Projects", "Infrastructure", "MEP Services"],
    },
  ],
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
  const closeDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(null);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{
        boxShadow: scrolled ? "0px 2px 10px rgba(0,0,0,0.08)" : "0px 1px 0px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.25s ease-in-out",
      }}
    >
      {/* Backdrop — dims/blurs the page behind the "About Us"/"Businesses"
          mega-menus while either is open. Sits behind the header's own nav
          content in DOM order (paints first), and position:fixed covers the
          full viewport since no ancestor establishes a transform/filter
          containing block. */}
      <AnimatePresence>
        {(openDropdown === "about" || openDropdown === "businesses") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            style={{ zIndex: -1 }}
            onClick={() => setOpenDropdown(null)}
          />
        )}
      </AnimatePresence>

      {/* ── Desktop ── */}
      <div className="hidden xl:flex items-center justify-between px-15 h-18 mx-auto w-full relative z-10 bg-white">
        <Link href="/" className="shrink-0" onClick={closeDropdown}>
          <Image
            src="/bi-logo.svg"
            alt="BI Group"
            width={3305}
            height={550}
            style={{ height: 35, width: "auto", maxWidth: 1600 }}
          />
        </Link>

        <nav className="flex items-center gap-5.75 2xl:gap-9.75">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={item.dropdown ? () => open(item.key) : undefined}
              onMouseLeave={item.dropdown ? close : undefined}
            >
              <Link
                href={item.href}
                onClick={closeDropdown}
                className="flex items-center gap-1 uppercase whitespace-nowrap text-black hover:text-brand "
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
              {item.dropdown && item.key !== "about" && item.key !== "businesses" && (
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
                          onClick={closeDropdown}
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
                <div className="grid grid-cols-[200px_820px_1fr]" style={{ gap: 56, padding: "40px 140px" }}>
                  <div className="flex flex-col items-start">
                    {ABOUT_MEGA_MENU.links.map((l) => (
                      <Link
                        key={l.label}
                        href={l.href}
                        onClick={closeDropdown}
                        className="hover:text-brand text-gray-600"
                        style={{
                          fontSize: 16,
                          fontWeight: 500,
                          lineHeight: "42px",
                          letterSpacing: "-0.176px",
                          transition: "color 0.2s ease-in-out",
                        }}
                      >
                        {l.label}
                      </Link>
                    ))}
                    <Link
                      href={ABOUT_MEGA_MENU.primaryLink.href}
                      onClick={closeDropdown}
                      className="group inline-flex items-center hover:text-brand text-gray-800"
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

                  <div className="flex flex-col justify-self-center">
                    {ABOUT_MEGA_MENU.secondaryLinks.map((l) => (
                      <Link
                        key={l.label}
                        href={l.href}
                        onClick={closeDropdown}
                        className="group flex items-center hover:text-brand justify-between"
                        style={{ gap: 20, padding: "17px 0" }}
                      >
                        <span className="text-gray-800 uppercase text-lg" style={{ letterSpacing: "-0.176px" }}>
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
                      onClick={closeDropdown}
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

                <div style={{ gap: 56, padding: "40px 140px" }}>
                  <div className="flex items-center" style={{ gap: 20, background: "#05297c", padding : 10 }}>
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
                        onClick={closeDropdown}
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

          {/* "Businesses" mega-menu — Figma: bi-businesses-mega-menu, node
              3003:129. Same full-width, flush-attached positioning as the
              "About Us" panel above (sibling of the nav items, containing
              block is the fixed <header>). */}
          <AnimatePresence>
            {openDropdown === "businesses" && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.35, ease: EASE_OUT }}
                onMouseEnter={() => open("businesses")}
                onMouseLeave={close}
                className="absolute left-0 right-0 top-full bg-white border-t border-black/5 overflow-hidden"
                style={{ boxShadow: "0 24px 48px -12px rgba(15,31,61,0.15)" }}
              >
                {/* A true 2D grid (column-major auto-flow, 4 explicit rows: heading1,
                    links1, heading2, links2) instead of 5 independent flex-col
                    stacks — CSS Grid sizes each row to its tallest cell across all
                    columns, so "BI Engineering" etc. line up even when an earlier
                    category in that column has fewer/more links than its neighbors. */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gridTemplateRows: "auto auto auto auto",
                    gridAutoFlow: "column",
                    columnGap: 32,
                    rowGap: 28,
                    padding: "40px 140px",
                  }}
                >
                  {BUSINESS_MEGA_COLUMNS.map((column, ci) => (
                    <Fragment key={ci}>
                      {column.map((group) => (
                        <Fragment key={group.category}>
                          <div className="flex flex-col self-end" style={{ gap: 10 }}>
                            <Link
                              href={group.href}
                              onClick={closeDropdown}
                              className="hover:text-brand"
                              style={{ fontWeight: 600, fontSize: 14, color: "#1a1a1a", letterSpacing: "0.2px" }}
                            >
                              {group.category}
                            </Link>
                            <div style={{ borderBottom: "1px solid #e2e2e2" }} />
                          </div>
                          <div className="flex flex-col">
                            {group.links.map((label) => (
                              <Link
                                key={label}
                                href={group.href}
                                onClick={closeDropdown}
                                className="hover:text-brand"
                                style={{
                                  padding: "9px 0",
                                  fontSize: 15,
                                  fontWeight: 400,
                                  color: "#6b7280",
                                  transition: "color 0.2s ease-in-out",
                                }}
                              >
                                {label}
                              </Link>
                            ))}
                          </div>
                        </Fragment>
                      ))}
                    </Fragment>
                  ))}
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
      <div className="xl:hidden flex items-center justify-between px-6 h-16 relative z-10 bg-white">
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
