"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { BUSINESS_GROUPS } from "@/lib/data/business-groups";

const EASE = [0.22, 1, 0.36, 1] as const;

// Direct top-level links — no dropdown, matches the reference nav exactly.
const PRIMARY_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
];

// Business-area highlights shown when hovering "About Us" — shared with HeroSection.
const ABOUT_HIGHLIGHTS = BUSINESS_GROUPS;

// Product verticals shown when hovering "Products" — same data, compact list.
const PRODUCT_LINKS = BUSINESS_GROUPS;

// Everything else in the site lives behind the "Pages" catch-all dropdown.
const PAGES_LINKS = [
  { label: "Our Business Areas", href: "/products" },
  { label: "End to End Solutions", href: "/solutions" },
  { label: "Careers", href: "/careers" },
  { label: "My Account", href: "/my-account" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  //const [aboutOpen, setAboutOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const aboutTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const productsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pagesTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // const openAbout = () => {
  //   if (aboutTimer.current) clearTimeout(aboutTimer.current);
  //   setAboutOpen(true);
  // };
  // const closeAbout = () => {
  //   aboutTimer.current = setTimeout(() => setAboutOpen(false), 150);
  // };

  const openProducts = () => {
    if (productsTimer.current) clearTimeout(productsTimer.current);
    setProductsOpen(true);
  };
  const closeProducts = () => {
    productsTimer.current = setTimeout(() => setProductsOpen(false), 150);
  };

  const openPages = () => {
    if (pagesTimer.current) clearTimeout(pagesTimer.current);
    setPagesOpen(true);
  };
  const closePages = () => {
    pagesTimer.current = setTimeout(() => setPagesOpen(false), 150);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{
        boxShadow: scrolled ? "0px 2px 10px rgba(0,0,0,0.08)" : "0px 1px 0px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.25s ease-in-out",
      }}
    >
      {/* ── Desktop: single row — logo left, links centered, CTA right ── */}
      <div
        className="hidden xl:flex items-center justify-between px-10 h-24 mx-auto w-full"
        style={{ maxWidth: 1600 }}
      >
        <Link href="/" className="shrink-0">
          <Image
            src="/bi-logo.svg"
            alt="BI Paints"
            width={3305}
            height={650}
            style={{ height: 38, width: "auto" }}
          />
        </Link>

        <div className="flex items-center gap-8">
          <div className="relative">
            <Link
              href="/about"
              className="flex items-center gap-1 text-small font-medium uppercase tracking-wide whitespace-nowrap text-heading/80 hover:text-primary"
              style={{ transition: "color 0.2s ease-in-out" }}
            >
              About Us
              {/* <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
              /> */}
            </Link>
            <AnimatePresence>
              {/* {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[920px] rounded-3xl bg-white p-12 border border-black/5"
                  style={{ boxShadow: "0 32px 64px -16px rgba(0,0,0,0.22)" }}
                >
                  <h2 className="text-h3 font-medium text-heading max-w-lg mb-8 pb-8 border-b border-black/10">
                    Innovative Solutions
                    <br />
                    Across Six Industries
                  </h2>
                  <div className="grid grid-cols-3 gap-10">
                    {ABOUT_HIGHLIGHTS.map((item) => (
                      <Link key={item.title} href={item.href} className="group block">
                        <h3 className="text-h5 font-medium text-heading group-hover:text-primary mb-3">
                          {item.title}
                        </h3>
                        <p className="text-small leading-relaxed text-ink">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )} */}
            </AnimatePresence>
          </div>

          <div className="relative" onMouseEnter={openProducts} onMouseLeave={closeProducts}>
            <Link
              href="/products"
              className="flex items-center gap-1 text-small font-medium uppercase tracking-wide whitespace-nowrap text-heading/80 hover:text-primary"
              style={{ transition: "color 0.2s ease-in-out" }}
            >
              Products
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
              />
            </Link>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-245 rounded-3xl bg-white p-5 border border-black/5"
                  style={{ boxShadow: "0 32px 64px -16px rgba(0,0,0,0.22)" }}
                >
                  <div className="grid grid-cols-[340px_1fr] gap-4">
                    <div className="flex flex-col py-2">
                      {PRODUCT_LINKS.map((item, i) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onMouseEnter={() => setActiveProduct(i)}
                          className={`flex items-center justify-between gap-2 px-5 py-4 rounded-xl text-body font-medium transition-colors duration-150 ${
                            activeProduct === i
                              ? "bg-cream text-primary"
                              : "text-heading/85 hover:bg-cream hover:text-primary"
                          }`}
                        >
                          {item.title}
                          <ChevronRight size={17} className="shrink-0" />
                        </Link>
                      ))}
                    </div>

                    <div className="flex flex-col p-6">
                      <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-cream">
                        {PRODUCT_LINKS[activeProduct].image && (
                          <Image
                            src={PRODUCT_LINKS[activeProduct].image!}
                            alt={PRODUCT_LINKS[activeProduct].title}
                            fill
                            className="object-cover"
                            sizes="480px"
                          />
                        )}
                      </div>
                      <h3 className="text-h4 font-medium text-heading mt-5 mb-1.5">
                        {PRODUCT_LINKS[activeProduct].title}
                      </h3>
                      <p className="text-small text-ink mb-3 line-clamp-2">
                        {PRODUCT_LINKS[activeProduct].description}
                      </p>
                      <Link
                        href={PRODUCT_LINKS[activeProduct].href}
                        className="inline-flex items-center gap-1.5 text-body font-medium text-primary hover:gap-2.5 transition-all duration-200"
                      >
                        Go to {PRODUCT_LINKS[activeProduct].title}
                        <ChevronRight size={15} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {PRIMARY_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-small font-medium uppercase tracking-wide whitespace-nowrap text-heading/80 hover:text-primary"
              style={{ transition: "color 0.2s ease-in-out" }}
            >
              {item.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={openPages}
            onMouseLeave={closePages}
          >
            <button
              className="flex items-center gap-1 text-small font-medium uppercase tracking-wide whitespace-nowrap text-heading/80 hover:text-primary"
              style={{ transition: "color 0.2s ease-in-out" }}
            >
              Pages
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${pagesOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {pagesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18, ease: EASE }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-2xl bg-white p-2 border border-black/5"
                  style={{ boxShadow: "0 20px 40px -12px rgba(0,0,0,0.18)" }}
                >
                  {PAGES_LINKS.map((page) => (
                    <Link
                      key={page.label}
                      href={page.href}
                      className="block px-4 py-2.5 rounded-xl text-small text-heading/85 hover:bg-cream hover:text-primary"
                      style={{ transition: "all 0.15s ease-out" }}
                    >
                      {page.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <Button href="/contact" size="sm">
          Contact us
        </Button>
      </div>

      {/* ── Mobile: compact single row ── */}
      <div className="xl:hidden flex items-center justify-between px-6 h-16">
        <Link href="/">
          <Image
            src="/bi-logo.svg"
            alt="BI Paints"
            width={3305}
            height={650}
            style={{ height: 32, width: "auto" }}
          />
        </Link>
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="p-2 relative text-heading hover:text-primary"
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
              <div>
                <button
                  onClick={() => setMobileAboutOpen((v) => !v)}
                  className="flex items-center justify-between w-full px-4 py-3 text-small font-semibold text-heading hover:text-primary hover:bg-black/3 rounded"
                  style={{ transition: "all 0.22s ease-in-out" }}
                >
                  About Us
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${mobileAboutOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileAboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="ml-4 pl-4 border-l-2 border-primary overflow-hidden"
                    >
                      <div className="space-y-3 mb-2 py-1">
                        {ABOUT_HIGHLIGHTS.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-small text-ink hover:text-primary"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <button
                  onClick={() => setMobileProductsOpen((v) => !v)}
                  className="flex items-center justify-between w-full px-4 py-3 text-small font-semibold text-heading hover:text-primary hover:bg-black/3 rounded"
                  style={{ transition: "all 0.22s ease-in-out" }}
                >
                  Products
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="ml-4 pl-4 border-l-2 border-primary overflow-hidden"
                    >
                      <div className="space-y-3 mb-2 py-1">
                        {PRODUCT_LINKS.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-small text-ink hover:text-primary"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {PRIMARY_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-small font-semibold text-heading hover:text-primary hover:bg-black/3 rounded"
                  style={{ transition: "all 0.22s ease-in-out" }}
                >
                  {item.label}
                </Link>
              ))}

              <div>
                <button
                  onClick={() => setMobilePagesOpen((v) => !v)}
                  className="flex items-center justify-between w-full px-4 py-3 text-small font-semibold text-heading hover:text-primary hover:bg-black/3 rounded"
                  style={{ transition: "all 0.22s ease-in-out" }}
                >
                  Pages
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${mobilePagesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobilePagesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="ml-4 pl-4 border-l-2 border-primary overflow-hidden"
                    >
                      <div className="space-y-0.5 mb-1">
                        {PAGES_LINKS.map((page) => (
                          <Link
                            key={page.label}
                            href={page.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-small text-ink hover:text-primary"
                            style={{ transition: "all 0.22s ease-in-out" }}
                          >
                            {page.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-3 border-t border-black/10 flex flex-col gap-2 px-4 pb-3">
                <Button href="/contact" className="justify-center">
                  Contact us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
