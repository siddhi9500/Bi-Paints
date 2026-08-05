import type { Metadata } from "next";
import { Inter, Public_Sans } from "next/font/google";
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

// Inter — used only by the hero carousel and career banner, per the Figma spec.
const inter = Inter({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={`${publicSans.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
