"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ChevronDown } from "lucide-react";

type DropdownItem = { label: string; href: string };
type NavItem = { label: string; href: string; dropdown?: DropdownItem[] };

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
    timer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{
        boxShadow: scrolled ? "0px 2px 6px #424242" : "0px 1px 4px rgba(0,0,0,0.08)",
        transition: "all 0.5s ease-in-out",
      }}
    >
      {/* ── Desktop: two-column layout (logo left | two-row nav right) ── */}
      <div className="hidden lg:flex items-stretch">

        {/* LEFT COLUMN — Logo, vertically centered, fixed width */}
        <div
          className="flex items-center justify-center flex-shrink-0 px-6"
          style={{ minWidth: 310 }}
        >
          <Link href="/" className="flex flex-col items-end px-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/bi-logo.svg"
              alt="BI Paints"
              style={{ height: 42, width: "auto" }}
            />
            <span
              className="text-gray-500 font-semibold uppercase tracking-widest"
              style={{ fontSize: "8px", letterSpacing: "0.22em", marginTop: 1 }}
            >
              of Companies
            </span>
          </Link>
        </div>

        {/* RIGHT COLUMN — stacked: secondary nav on top, main nav below */}
        <div className="flex flex-col flex-1 min-w-0">

          {/* Top row: secondary items, right-aligned */}
          <div className="flex items-center justify-end px-6 h-11 gap-1">
            <button
              aria-label="Search"
              className="p-1.5 text-gray-500 hover:text-navy"
              style={{ transition: "all 0.5s ease-in-out" }}
            >
              <Search size={16} />
            </button>
            <span className="w-px h-3.5 bg-gray-300 mx-2" />
            {[
              { label: "Home", href: "/" },
              { label: "Partners", href: "/locations" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-1 text-sm text-gray-600 hover:text-navy font-medium"
                style={{ transition: "all 0.5s ease-in-out" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/my-account"
              className="px-3 py-1 text-sm font-bold"
              style={{ color: "#f5a200", transition: "all 0.5s ease-in-out" }}
            >
              My BI Paints
            </Link>
            <Link
              href="/contact"
              className="px-3 py-1 text-sm font-bold text-gray-800 hover:text-accent"
              style={{ transition: "all 0.5s ease-in-out" }}
            >
              Get In Touch
            </Link>
          </div>

          {/* Bottom row: main nav items */}
          <div className="flex items-center justify-end px-4 h-[4.25rem]">
            {MAIN_NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && open(item.label)}
                onMouseLeave={() => item.dropdown && close()}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-0.5 px-3.5 py-5 text-[0.87rem] font-medium text-gray-700 hover:text-accent uppercase tracking-wide whitespace-nowrap"
                  style={{ transition: "all 0.5s ease-in-out" }}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      size={13}
                      className={`ml-0.5 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {item.dropdown && activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 bg-white min-w-[210px] z-50 py-1"
                    style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.12)", borderTop: "3px solid #1b4676" }}
                    onMouseEnter={() => open(item.label)}
                    onMouseLeave={close}
                  >
                    {item.dropdown.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent"
                        style={{ transition: "all 0.5s ease-in-out" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile: compact single row ── */}
      <div className="lg:hidden flex items-center justify-between px-4 h-16">
        <Link href="/" className="flex flex-col items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bi-logo.svg" alt="BI Paints" style={{ height: 32, width: "auto" }} />
          <span className="text-gray-400 tracking-widest uppercase font-medium" style={{ fontSize: "7px", letterSpacing: "0.18em" }}>
            Group of Companies
          </span>
        </Link>
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="p-2 text-gray-700 hover:text-navy"
          style={{ transition: "all 0.5s ease-in-out" }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile menu panel ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[75vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-0.5">
            {MAIN_NAV.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileExpanded((v) => (v === item.label ? null : item.label))
                    }
                    className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:text-accent hover:bg-gray-50 rounded uppercase"
                    style={{ transition: "all 0.5s ease-in-out" }}
                  >
                    {item.label}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-300 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="ml-4 pl-4 border-l-2 border-navy space-y-0.5 mb-1">
                      {item.dropdown.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-gray-600 hover:text-accent"
                          style={{ transition: "all 0.5s ease-in-out" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-accent hover:bg-gray-50 rounded uppercase"
                  style={{ transition: "all 0.5s ease-in-out" }}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2 px-4 pb-3">
              <Link href="/contact" className="text-center text-sm font-bold text-navy py-2.5 border-2 border-navy rounded hover:bg-navy hover:text-white" style={{ transition: "all 0.5s ease-in-out" }}>
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
