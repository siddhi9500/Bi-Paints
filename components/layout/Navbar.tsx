"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

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
              {item.dropdown && (
                <AnimatePresence>
                  {openDropdown === item.key && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: EASE }}
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
                  transition={{ duration: 0.2, ease: EASE }}
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
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 180, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  type="text"
                  placeholder="Search…"
                  autoFocus
                  className="mr-2 bg-cream rounded-full px-4 py-2 text-small text-ink-dark outline-none"
                />
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
                          transition={{ duration: 0.25, ease: EASE }}
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
