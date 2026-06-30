import type { Metadata } from "next";
import { Lato, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BI Group Of Companies – Engineering Solutions Built To Last",
  description:
    "BI Paints is a leading manufacturer of premium quality paints and coating solutions for residential, commercial, industrial, and marine applications.",
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
    <html lang="en" className={`${lato.variable} ${montserrat.variable} ${playfair.variable}`}>
      {/* pt-[104px] offsets the fixed navbar (utility bar ~36px + main nav 64px + 4px buffer) */}
      <body className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1 pt-[112px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
