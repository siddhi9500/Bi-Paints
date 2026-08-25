import type { Metadata } from "next";
import { Inter, PT_Serif, Public_Sans } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Public Sans — the site's default typeface (nav, section copy, footer).
const publicSans = Public_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

// Inter — used for eyebrow/label text across the site, per the Figma spec.
const inter = Inter({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// PT Serif — the site's display/heading typeface (see globals.css h1-h6 rule).
const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pt-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BI Group Of Companies – Engineering Solutions Built To Last",
  description:
    "BI Group is one of India's leading paints and coatings solutions providers, combining quality with innovation and trust across multiple sectors.",
  icons: {
    icon: "/bi-icon.png",
    shortcut: "/bi-icon.png",
    apple: "/bi-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${publicSans.variable} ${inter.variable} ${ptSerif.variable}`}>
      <body className="min-h-screen flex flex-col">
        {/* reducedMotion="user" makes every motion.* component in the tree
            honor prefers-reduced-motion automatically: transforms are
            stripped and animations fall back to opacity-only fades. */}
        <MotionConfig reducedMotion="user" transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
