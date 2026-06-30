"use client";

import { usePathname } from "next/navigation";

export default function MainOffset({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main className="flex-1" style={isHome ? undefined : { paddingTop: "var(--header-height)" }}>
      {children}
    </main>
  );
}
