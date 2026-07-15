import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageBanner from "@/components/layout/PageBanner";
import Card from "@/components/ui/Card";
import { BUSINESS_GROUPS } from "@/lib/data/business-groups";

export const metadata = {
  title: "Our Services — BI Group of Companies",
  description:
    "Services delivered across BI Group's business verticals — paints & coatings, homeopathy, and industrial solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Our Services" crumb="Services" image="/banner4.jpg" />

      <section className="py-16 sm:py-20 bg-white">
        <div className="page-container flex flex-col gap-10">
          <p className="text-body text-ink max-w-2xl">
            One group, complete ownership — every BI Group business is backed by the same
            standard of quality, reliability, and after-sales support.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {BUSINESS_GROUPS.map((group) => (
              <Card key={group.title} className="rounded-[10px] bg-cream border-0 p-6 flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-h4 font-normal text-heading">{group.title}</h4>
                  <p className="text-small text-ink">{group.subtitle}</p>
                </div>

                {group.highlights && (
                  <ul className="flex flex-col gap-2.5 flex-1">
                    {group.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-small text-ink">
                        <Check size={15} strokeWidth={2.5} className="mt-0.5 shrink-0 text-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href={group.href}
                  className="inline-flex items-center gap-1.5 text-small font-medium text-primary hover:gap-2.5 transition-all duration-300"
                >
                  Learn More <ArrowRight size={15} />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
