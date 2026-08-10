import type { Metadata } from "next";
import AchievementsSection from "@/components/sections/AchievementsSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import PartnersSection from "@/components/sections/PartnersSection";

export const metadata: Metadata = {
  title: "Our Achievements – BI Group",
  description:
    "14+ years of excellence, our leadership team, certifications, and the industry leaders who trust BI Group.",
};

export default function AchievementsPage() {
  return (
    <>
      <AchievementsSection />
      <LeadershipSection />
      <CertificationsSection />
      <PartnersSection />
    </>
  );
}
