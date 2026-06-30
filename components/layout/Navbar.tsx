"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type DropdownItem = { label: string; href: string };
type NavItem = { label: string; href: string; dropdown?: DropdownItem[] };

function chunkColumns<T>(items: T[], perColumn: number): T[][] {
  const columns: T[][] = [];
  for (let i = 0; i < items.length; i += perColumn) {
    columns.push(items.slice(i, i + perColumn));
  }
  return columns;
}

const MAIN_NAV: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      { label: "Overview", href: "/about" },
      { label: "Vision & Values", href: "/about/vision" },
      { label: "History", href: "/about/history" },
      { label: "Awards & Recognition", href: "/about/awards" },
      { label: "Leadership Team", href: "/about/team" },
      { label: "CSR & Sustainability", href: "/about/sustainability" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    dropdown: [
      { label: "HVAC Systems", href: "/products/hvac" },
      { label: "Electronics Home Appliances", href: "/products/electronics" },
      { label: "Modular Kitchen", href: "/products/kitchen" },
      { label: "Steels", href: "/products/steels" },
      { label: "Cement", href: "/products/cement" },
      { label: "Chemicals", href: "/products/chemicals" },
      { label: "Paints", href: "/products/paints" },
      { label: "Power Tools", href: "/products/power-tools" },
      { label: "Hardware", href: "/products/hardware" },
      { label: "Fabrication", href: "/products/fabrication" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Colour Consultation", href: "/services/consultation" },
      { label: "Painting Services", href: "/services/painting" },
      { label: "AMC & Maintenance", href: "/services/amc" },
      { label: "Waterproofing", href: "/services/waterproofing" },
    ],
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
  },
  { label: "Investors", href: "/investors" },
  { label: "Global", href: "/global" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const open = (label: string) => {
    if (timer.current) clearTimeout(timer.current);
    setActiveDropdown(label);
  };
  const close = () => {
    timer.current = setTimeout(() => setActiveDropdown(null), 60);
  };

  const navText = transparent ? "text-white/90 hover:text-accent" : "text-gray-700 hover:text-accent";
  const utilityText = transparent ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-navy";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 pt-5"
      style={{
        background: transparent
          ? "linear-gradient(to bottom, rgba(8,16,32,0.45) 0%, rgba(8,16,32,0.12) 80%, transparent 100%)"
          : "#ffffff",
        boxShadow: transparent ? "none" : scrolled ? "0px 2px 6px #424242" : "0px 1px 4px rgba(0,0,0,0.08)",
        transition: "background 0.25s ease-in-out, box-shadow 0.25s ease-in-out",
      }}
    >
      {/* ── Desktop: two stacked full-width rows (logo+utility | primary nav+secondary) ── */}
      <div className="hidden lg:flex flex-col">

        {/* Row 1: logo (left) + utility links (right) */}
        <div>
          <div className="flex items-center justify-between px-10 h-20 mx-auto w-full" style={{borderBottom: transparent ? "1px solid rgba(255,255,255,0.2)" : "1px solid #f1f1f1", transition: "border-color 0.25s ease-in-out", maxWidth: 1600 }}>
            <Link href="/" className="flex flex-col items-end">
              <Image
                src={transparent ? "/bi-logo-white.svg" : "/bi-logo.svg"}
                alt="BI Paints"
                width={3305}
                height={650}
                style={{ height: 42, width: "auto", transition: "opacity 0.25s ease-in-out" }}
              />
              <span
                className={`font-semibold uppercase tracking-widest ${transparent ? "text-white/70" : "text-gray-500"}`}
                style={{ fontSize: "8px", letterSpacing: "0.22em", marginTop: 4, transition: "color 0.25s ease-in-out" }}
              >
                of Companies
              </span>
            </Link>

            <div className="flex items-center gap-1">
              <Link
                href="/my-account"
                className="px-3 py-1 text-sm font-bold"
                style={{ color: "#f5a200", transition: "all 0.22s ease-in-out" }}
              >
                My BI Paints
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
        </div>

        {/* Row 2: primary nav (left) + secondary links (right) */}
        <div className="flex items-center justify-between px-10 h-16 mx-auto w-full" style={{ maxWidth: 1600 }}>
          <div className="flex items-center -ml-3.5">
            {MAIN_NAV.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.dropdown && open(item.label)}
                onMouseLeave={() => item.dropdown && close()}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-0.5 px-3.5 py-5 text-sm font-medium whitespace-nowrap ${navText}`}
                  style={{ transition: "color 0.25s ease-in-out" }}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      size={13}
                      className={`ml-0.5 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>
                <span
                  aria-hidden
                  className="absolute left-3.5 right-3.5 bottom-4 h-0.5 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                  style={{ background: "#f5a200" }}
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1">
            {[
              { label: "Home", href: "/" },
              { label: "Partners", href: "/locations" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3 py-1 text-sm font-medium ${utilityText}`}
                style={{ transition: "color 0.25s ease-in-out" }}
              >
                {item.label}
              </Link>
            ))}
            <span className={`w-px h-3.5 mx-2 ${transparent ? "bg-white/30" : "bg-gray-300"}`} style={{ transition: "background 0.25s ease-in-out" }} />
            <button
              aria-label="Search"
              className={`p-1.5 ${utilityText}`}
              style={{ transition: "color 0.25s ease-in-out" }}
            >
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mega menu: one full-width panel, content swapped per active item ── */}
      <AnimatePresence>
        {activeDropdown && (() => {
          const item = MAIN_NAV.find((n) => n.label === activeDropdown);
          if (!item?.dropdown) return null;
          const columns = chunkColumns(item.dropdown, 5);
          return (
            <motion.div
              key={activeDropdown}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15, ease: EASE }}
              className="hidden lg:block absolute top-full left-0 right-0 bg-white z-50"
              style={{ boxShadow: "0 12px 24px rgba(0,0,0,0.14)", borderTop: "3px solid #1b4676" }}
              onMouseEnter={() => open(item.label)}
              onMouseLeave={close}
            >
              <div
                className="page-container py-8 grid gap-x-10 gap-y-6"
                style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(160px, 240px)) auto` }}
              >
                {columns.map((col, ci) => (
                  <div key={ci}>
                    {ci === 0 && (
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                        {item.label}
                      </p>
                    )}
                    <ul className="space-y-3">
                      {col.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="text-sm text-gray-700 hover:text-accent"
                            style={{ transition: "color 0.15s ease-out" }}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="flex items-start justify-end">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-accent"
                    style={{ transition: "color 0.15s ease-out" }}
                  >
                    <span
                      className="flex items-center justify-center rounded shrink-0"
                      style={{ width: 24, height: 24, background: "#f5a200" }}
                    >
                      <ArrowRight size={13} className="text-navy" />
                    </span>
                    View all {item.label}
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* ── Mobile: compact single row ── */}
      <div className="lg:hidden flex items-center justify-between px-6 h-16">
        <Link href="/" className="flex flex-col items-end">
          <Image
            src={transparent ? "/bi-logo-white.svg" : "/bi-logo.svg"}
            alt="BI Paints"
            width={3305}
            height={650}
            style={{ height: 32, width: "auto", transition: "opacity 0.25s ease-in-out" }}
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
  );
}
