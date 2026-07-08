"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type DropdownItem = { label: string; href: string };
type PromoItem = { image: string; text: string; cta: string; href: string };
type NavItem = { label: string; href: string; dropdown?: DropdownItem[]; promo?: PromoItem };

function chunkColumns<T>(items: T[], perColumn: number): T[][] {
  const columns: T[][] = [];
  for (let i = 0; i < items.length; i += perColumn) {
    columns.push(items.slice(i, i + perColumn));
  }
  return columns;
}

const MAIN_NAV: NavItem[] = [
  {
    label: "Who we are",
    href: "/about",
    dropdown: [
      { label: "Overview", href: "/about" },
      { label: "Vision & Values", href: "/about/vision" },
      { label: "History", href: "/about/history" },
      { label: "Awards & Recognition", href: "/about/awards" },
      { label: "Leadership Team", href: "/about/team" },
      { label: "CSR & Sustainability", href: "/about/sustainability" },
    ],
    promo: {
      image: "/coating-advisors.jpg",
      text: "Trusted by India's leading industries for over a decade.",
      cta: "Discover our story",
      href: "/about",
    },
  },
  {
    label: "Our bussiness areas",
    href: "/products",
    dropdown: [
      { label: "Paints", href: "/products/paints" },
      { label: "Homeopathy", href: "/products/hvac" },
      { label: "Fashion & Style", href: "/products/electronics" },
      { label: "Modular Kitchen", href: "/products/kitchen" },
      { label: "HVAC Systems", href: "/products/hvac" },
      { label: "Electronics Home Appliances", href: "/products/electronics" },
    ],
    promo: {
      image: "/business-protective.jpg",
      text: "From paints to power tools — one trusted partner across sectors.",
      cta: "Explore all business areas",
      href: "/products",
    },
  },
  {
    label: "Products and services",
    href: "/services",
    dropdown: [
      { label: "Colour Consultation", href: "/services/consultation" },
      { label: "Painting Services", href: "/services/painting" },
      { label: "AMC & Maintenance", href: "/services/amc" },
      { label: "Waterproofing", href: "/services/waterproofing" },
    ],
    promo: {
      image: "/product-img.jpg",
      text: "Professional-grade products and services for every surface.",
      cta: "Browse our range",
      href: "/services",
    },
  },
  {
    label: "End to End Solutions",
    href: "/solutions",
    dropdown: [
      { label: "Residential", href: "/solutions/residential" },
      { label: "Commercial", href: "/solutions/commercial" },
      { label: "Industrial", href: "/solutions/industrial" },
      { label: "Marine", href: "/solutions/marine" },
    ],
    promo: {
      image: "/project-lt.jpg",
      text: "Complete project delivery — from consultation to final finish.",
      cta: "See our solutions",
      href: "/solutions",
    },
  },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !activeDropdown;

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
      document.documentElement.style.setProperty(
        "--header-height",
        isScrolled ? "4rem" : "9rem"
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const open = (label: string) => {
    if (timer.current) clearTimeout(timer.current);
    setActiveDropdown(label);
  };
  const close = () => {
    timer.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const navText = transparent ? "text-white/90 hover:text-accent" : "text-gray-700 hover:text-accent";
  const utilityText = transparent ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-navy";

  return (
    <>
      {/* ── Backdrop overlay — outside <header> so z-40 competes globally, not inside z-50 stacking context ── */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            key="nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={close}
          />
        )}
      </AnimatePresence>
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? "" : "pt-1"}`}
      style={{
        background: transparent
          ? "linear-gradient(to bottom, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.08) 80%, transparent 100%)"
          : "#ffffff",
        boxShadow: transparent ? "none" : scrolled ? "0px 2px 6px #424242" : "0px 1px 4px rgba(0,0,0,0.08)",
        transition: "background 0.25s ease-in-out, box-shadow 0.25s ease-in-out",
      }}
    >
      {/* ── Desktop ── */}
      <div className="hidden xl:flex flex-col">

        {/* Row 1: logo + utility — collapses away when scrolled */}
        <AnimatePresence initial={false}>
          {!scrolled && (
            <motion.div
              key="utility-row"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="overflow-hidden"
            >
              <div
                className="flex items-center justify-between px-8 h-20 mx-auto w-full"
                style={{
                  borderBottom: transparent ? "1px solid rgba(255,255,255,0.2)" : "1px solid #e0e0e0",
                  transition: "border-color 0.25s ease-in-out",
                  maxWidth: 1600,
                }}
              >
                <Link href="/" className="flex flex-col items-end">
                  <Image
                    src={transparent ? "/bi-logo-white.svg" : "/bi-logo.svg"}
                    alt="BI Paints"
                    width={3305}
                    height={650}
                    style={{
                      height: 42,
                      width: "auto",
                      filter: transparent ? "drop-shadow(0 2px 6px rgba(0,0,0,0.9))" : "none",
                      transition: "opacity 0.25s ease-in-out, filter 0.25s ease-in-out",
                    }}
                  />
                  {/* <span
                    className={`font-semibold uppercase tracking-widest ${transparent ? "text-white/70" : "text-gray-500"}`}
                    style={{ fontSize: "8px", letterSpacing: "0.22em", marginTop: 4, transition: "color 0.25s ease-in-out" }}
                  >
                    of Companies
                  </span> */}
                </Link>

                <div className="flex items-center gap-1">
                  <Link
                    href="/my-account"
                    className="px-3 py-1 text-sm font-bold"
                    style={{ color: transparent ? "#ffffff" : "#f5a200", transition: "all 0.22s ease-in-out" }}
                  >
                    Login
                  </Link>
                  <Link
                    href="/contact"
                    className={`px-3 py-1 text-sm font-bold hover:text-accent ${transparent ? "text-white" : "text-gray-800"}`}
                    style={{ transition: "color 0.25s ease-in-out" }}
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Row 2: nav row — always visible. Logo slides in here when scrolled */}
        <div
          className="flex items-center px-10 h-16 mx-auto w-full"
          style={{ maxWidth: 1600 }}
        >
          {/* Logo — appears in this row only when scrolled */}
          <AnimatePresence initial={false}>
            {scrolled && (
              <motion.div
                key="scrolled-logo"
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="mr-10 shrink-0"
              >
                <Link href="/" className="flex flex-col items-end">
                  <Image
                    src="/bi-logo.svg"
                    alt="BI Paints"
                    width={3305}
                    height={650}
                    style={{ height: 36, width: "auto" }}
                  />
                  <span
                    className="font-semibold uppercase tracking-widest text-gray-500"
                    style={{ fontSize: "8px", letterSpacing: "0.22em", marginTop: 3 }}
                  >
                    of Companies
                  </span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Primary nav */}
          <div className="flex items-center -ml-3.5 flex-1">
            {MAIN_NAV.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.dropdown && open(item.label)}
                onMouseLeave={() => item.dropdown && close()}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-0.5 px-3.5 py-5 text-rg font-medium whitespace-nowrap ${navText}`}
                  style={{ transition: "color 0.25s ease-in-out" }}
                >
                  {item.label}
                </Link>
                <span
                  aria-hidden
                  className="absolute left-3.5 right-3.5 bottom-4 h-0.5 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                  style={{ background: "#f5a200" }}
                />
              </div>
            ))}
          </div>

          {/* Right side — full when at top, minimal when scrolled */}
          <div className="flex items-center gap-1">
            <AnimatePresence initial={false}>
              {!scrolled && (
                <motion.div
                  key="secondary-links"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-1"
                >
                  {[
                    { label: "Home", href: "/" },
                    { label: "Partners", href: "/locations" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`px-3 py-1 text-md font-medium ${utilityText}`}
                      style={{ transition: "color 0.25s ease-in-out" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <span
                    className={`w-px h-3.5 mx-2 ${transparent ? "bg-white/30" : "bg-gray-300"}`}
                    style={{ transition: "background 0.25s ease-in-out" }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <button
              aria-label="Search"
              className={`p-1.5 ${utilityText}`}
              style={{ transition: "color 0.25s ease-in-out" }}
            >
              <Search size={16} />
            </button>
            <AnimatePresence initial={false}>
              {scrolled && (
                <motion.div
                  key="scrolled-cta"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.25, ease: EASE }}
                >
                  <Link
                    href="/contact"
                    className="ml-4 px-4 py-2 text-sm font-bold text-white rounded"
                    style={{ background: "#f5a200", transition: "opacity 0.2s" }}
                  >
                    Get In Touch
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Mobile: compact single row ── */}
      <div className="xl:hidden flex items-center justify-between px-6 h-16">
        <Link href="/" className="flex flex-col items-end">
          <Image
            src={transparent ? "/bi-logo-white.svg" : "/bi-logo.svg"}
            alt="BI Paints"
            width={3305}
            height={650}
            style={{
              height: 32,
              width: "auto",
              filter: transparent ? "drop-shadow(0 1px 3px rgba(0,0,0,0.55))" : "none",
              transition: "opacity 0.25s ease-in-out, filter 0.25s ease-in-out",
            }}
          />
          <span className={`tracking-widest uppercase font-medium ${transparent ? "text-white/70" : "text-gray-400"}`} style={{ fontSize: "7px", letterSpacing: "0.18em", transition: "color 0.25s ease-in-out" }}>
            Group of Companies
          </span>
        </Link>
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className={`p-2 relative ${transparent ? "text-white hover:text-accent" : "text-gray-700 hover:text-navy"}`}
          style={{ transition: "color 0.25s ease-in-out" }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? "x" : "menu"}
              initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
              transition={{ duration: 0.2, ease: EASE }}
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
            transition={{ duration: 0.3, ease: EASE }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-0.5 max-h-[75vh] overflow-y-auto">
              {MAIN_NAV.map((item) =>
                item.dropdown ? (
                  <div key={item.label}>
                    <button
                      onClick={() =>
                        setMobileExpanded((v) => (v === item.label ? null : item.label))
                      }
                      className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:text-accent hover:bg-gray-50 rounded"
                      style={{ transition: "all 0.22s ease-in-out" }}
                    >
                      {item.label}
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-300 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: EASE }}
                          className="ml-4 pl-4 border-l-2 border-navy overflow-hidden"
                        >
                          <div className="space-y-0.5 mb-1">
                            {item.dropdown.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 text-sm text-gray-600 hover:text-accent"
                                style={{ transition: "all 0.22s ease-in-out" }}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-accent hover:bg-gray-50 rounded"
                    style={{ transition: "all 0.22s ease-in-out" }}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2 px-4 pb-3">
                <Link href="/contact" className="text-center text-sm font-bold text-navy py-2.5 border-2 border-navy rounded hover:bg-navy hover:text-white" style={{ transition: "all 0.22s ease-in-out" }}>
                  Get In Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>

    {/* ── Mega menu: Jotun-style 3-column panel, wipes down from viewport top ── */}
    <AnimatePresence>
      {activeDropdown && (() => {
        const item = MAIN_NAV.find((n) => n.label === activeDropdown);
        if (!item?.dropdown) return null;
        return (
          <motion.div
            key={activeDropdown}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="hidden xl:block fixed top-0 left-0 right-0 bg-white"
            style={{ zIndex: 45, paddingTop: "var(--header-height)", boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
            onMouseEnter={() => open(item.label)}
            onMouseLeave={close}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.22, delay: 0.28, ease: EASE } }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              className="page-container"
            >
              <div className="flex">

                {/* ── Col 1: plain links list ── */}
                <div className="w-60 shrink-0 border-r border-gray-100 py-10 pr-10">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400 mb-7">
                    {item.label}
                  </p>
                  <ul className="space-y-4">
                    {item.dropdown.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="text-[15px] text-gray-800 hover:text-accent block"
                          style={{ transition: "color 0.15s ease-out" }}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 mt-8 px-4 py-2.5 text-[13px] font-bold text-white"
                    style={{ background: "#f5a200" }}
                  >
                    <ArrowRight size={13} />
                    {item.label}
                  </Link>
                </div>

                {/* ── Col 2: featured links ── */}
                <div className="flex-1 py-10 px-12 border-r border-gray-100">
                  <ul>
                    {item.dropdown.slice(0, 3).map((child) => (
                      <li key={child.label} className="border-b border-gray-100 last:border-0">
                        <Link
                          href={child.href}
                          className="flex items-center justify-between py-5 group"
                        >
                          <span
                            className="font-medium text-gray-800 group-hover:text-accent"
                            style={{ fontSize: 20, transition: "color 0.15s ease-out" }}
                          >
                            {child.label}
                          </span>
                          <ArrowRight
                            size={20}
                            className="text-gray-300 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── Col 3: image card ── */}
                {item.promo && (
                  <div className="w-80 shrink-0">
                    <Link href={item.promo.href} className="group block h-full">
                      <div className="relative overflow-hidden" style={{ height: 196 }}>
                        <Image
                          src={item.promo.image}
                          alt={item.promo.text}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="px-8 py-7">
                        <h4
                          className="font-semibold text-gray-900 leading-snug mb-5"
                          style={{ fontSize: 15, maxWidth: 240 }}
                        >
                          {item.promo.text}
                        </h4>
                        <span className="inline-flex items-center gap-2 text-[13px] font-bold" style={{ color: "#f5a200" }}>
                          <span
                            className="flex items-center justify-center shrink-0"
                            style={{ width: 22, height: 22, background: "#f5a200" }}
                          >
                            <ArrowRight size={11} className="text-white" />
                          </span>
                          {item.promo.cta}
                        </span>
                      </div>
                    </Link>
                  </div>
                )}

              </div>
            </motion.div>
          </motion.div>
        );
      })()}
    </AnimatePresence>
    </>
  );
}
