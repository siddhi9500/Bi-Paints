import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageBanner from "@/components/layout/PageBanner";
import Card from "@/components/ui/Card";
import { BUSINESS_GROUPS } from "@/lib/data/business-groups";

export const metadata = {
  title: "Our Products — BI Group of Companies",
  description:
    "Explore BI Group's business verticals — paints & coatings, homeopathy products, and industrial solutions.",
};

export default function ProductsPage() {
  return (
    <>
      <PageBanner title="Our Products" crumb="Products" image="/banner4.jpg" />

      <section className="py-16 sm:py-20 bg-white">
        <div className="page-container flex flex-col gap-10">
          <p className="text-body text-ink max-w-2xl">
            BI Group brings together a diversified portfolio of businesses — each held to
            the same standard of quality, reliability, and customer trust.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {BUSINESS_GROUPS.map((group) => (
              <Link key={group.title} href={group.href} className="block group">
                <Card className="rounded-[10px] bg-cream border-0 flex flex-col h-full overflow-hidden">
                  <div className="flex flex-col gap-0.5 p-5">
                    <h4 className="text-h4 font-normal text-heading">{group.title}</h4>
                    <p className="text-body text-ink">{group.subtitle}</p>
                  </div>
                  {group.image && (
                    <div className="relative w-full aspect-412/435 rounded-[10px] overflow-hidden">
                      <Image
                        src={group.image}
                        alt={group.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-2 px-5 py-4 text-small text-ink group-hover:text-primary transition-colors duration-300">
                    Learn More
                    <ArrowRight size={15} />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
