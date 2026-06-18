import Link from "next/link";
import Image from "next/image";

const ABOUT_LINKS = [
  { label: "Overview",        href: "/about" },
  { label: "Group Profile",   href: "/about/profile" },
  { label: "Vision & Values", href: "/about/vision" },
  { label: "History",         href: "/about/history" },
  { label: "Awards",          href: "/about/awards" },
  { label: "Leadership",      href: "/about/team" },
  { label: "CSR",             href: "/about/csr" },
  { label: "Sustainability",  href: "/about/sustainability" },
];

const PRODUCT_LINKS = [
  { label: "HVAC Systems",                  href: "/products/hvac" },
  { label: "Electronics Home Appliances",   href: "/products/electronics" },
  { label: "Modular Kitchen",               href: "/products/kitchen" },
  { label: "Steels",                        href: "/products/steels" },
  { label: "Cement",                        href: "/products/cement" },
  { label: "Chemicals",                     href: "/products/chemicals" },
  { label: "Paints",                        href: "/products/paints" },
  { label: "Power Tools",                   href: "/products/power-tools" },
  { label: "Hardware",                      href: "/products/hardware" },
  { label: "Fabrication",                   href: "/products/fabrication" },
];

const SERVICE_LINKS = [
  { label: "Design & Build Solutions for HVAC System",        href: "/services/hvac" },
  { label: "Design & Build Solutions for Modular Kitchens",   href: "/services/kitchen" },
  { label: "AMC Services",                                     href: "/services/amc" },
  { label: "Design & Build Solutions in Fabrication",         href: "/services/fabrication" },
  { label: "All type of Painting Solutions",                  href: "/services/painting" },
];

const SOLUTION_LINKS = [
  { label: "For HVAC System",      href: "/solutions/hvac" },
  { label: "For Modular Kitchen",  href: "/solutions/kitchen" },
  { label: "For Fabrication",      href: "/solutions/fabrication" },
  { label: "Painting Solutions",   href: "/solutions/painting" },
];

function FooterLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-sm leading-snug text-white/70 hover:text-white transition-colors duration-300"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#1b4676" }}>

      {/* ── Main footer body ── */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* ── Column 1: Office info ── */}
          <div style={{ borderRight: "1px solid rgba(255,255,255,0.15)", paddingRight: "2rem" }}>

            {/* Corporate Office */}
            <h4 className="font-bold text-white text-sm mb-2">Corporate Office</h4>
            <p style={{ color: "rgba(255,255,255,0.70)", fontSize: 13, lineHeight: 1.7 }} className="mb-1">
              C/o, 332-336, Fourth Floor, High Field Ascot,<br />
              Mahavir Group of Compaines, VIP Road Vesu, Surat <br />
              395007
            </p>
            <p style={{ color: "rgba(255,255,255,0.70)", fontSize: 13 }} className="mb-0.5">Mo + 91 9879015984</p>
            <p style={{ color: "rgba(255,255,255,0.70)", fontSize: 13 }} className="mb-0.5">info@bigroupindia.com</p>
            <p style={{ color: "rgba(255,255,255,0.70)", fontSize: 13 }}>www.bigroupindia.com</p>

            {/* Branch Office */}
            <h4 className="font-bold text-white text-sm mb-2 mt-6">Branch Office</h4>
            <p style={{ color: "rgba(255,255,255,0.70)", fontSize: 13, lineHeight: 1.7 }} className="mb-1">
              Survey 174,176,177 Bi Paints (Asia No 1 & Bigest Plant) Kitela Village , <br /> 
              Kumbhalgarh Tehsil , Rajsamand District Udaipur Rajsthan <br />
              313333
            </p>
            <p style={{ color: "rgba(255,255,255,0.70)", fontSize: 13 }} className="mb-0.5">Mo + 91 72111 68101, 02, 03</p>
            <p style={{ color: "rgba(255,255,255,0.70)", fontSize: 13 }} className="mb-0.5">info@bigroupindia.com</p>
            <p style={{ color: "rgba(255,255,255,0.70)", fontSize: 13 }}>www.bigroupindia.com</p>
          </div>

          {/* ── Column 2: About Us ── */}
          <div>
            <h3 className="font-bold text-white text-base mb-4">About Us</h3>
            <FooterLinks links={ABOUT_LINKS} />
          </div>

          {/* ── Column 3: Our Products ── */}
          <div>
            <h3 className="font-bold text-white text-base mb-4">Our Products</h3>
            <FooterLinks links={PRODUCT_LINKS} />
          </div>

          {/* ── Column 4: Our Services ── */}
          <div>
            <h3 className="font-bold text-white text-base mb-4">Our Services</h3>
            <FooterLinks links={SERVICE_LINKS} />
          </div>

          {/* ── Column 5: End to End Solutions ── */}
          <div>
            <h3 className="font-bold text-white text-base mb-4">End to End Solutions</h3>
            <FooterLinks links={SOLUTION_LINKS} />
          </div>

        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", background: "rgba(0,0,0,0.2)" }}>
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0" style={{ width: 40, height: 55 }}>
              <Image
                src="/iso_certified.png"
                alt="ISO 9001:2015 Certified Company"
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <p style={{ color: "rgba(255,255,255,0.60)", fontSize: 13 }}>
              Copyrights &copy; {new Date().getFullYear()}, BI Group of Companies | All Rights Reserved
            </p>
          </div>
          <p style={{ color: "rgba(255,255,255,0.60)", fontSize: 13 }}>
            Powered By <span className="font-bold text-white">B2C Info Solutions</span>
          </p>
        </div>
      </div>

    </footer>
  );
}
