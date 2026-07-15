import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import PageBanner from "@/components/layout/PageBanner";
import Button from "@/components/ui/Button";
import { BUSINESS_GROUPS } from "@/lib/data/business-groups";

function slugFromHref(href: string) {
  return href.replace("/products/", "");
}

export function generateStaticParams() {
  return BUSINESS_GROUPS.map((group) => ({ slug: slugFromHref(group.href) }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const group = BUSINESS_GROUPS.find((g) => slugFromHref(g.href) === slug);

  if (!group) notFound();

  return (
    <>
      <PageBanner title={group.title} crumb={group.title} image="/banner4.jpg" />

      <section className="py-16 sm:py-20 bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {group.image && (
              <div className="relative w-full aspect-4/3 rounded-[10px] overflow-hidden bg-cream">
                <Image
                  src={group.image}
                  alt={group.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}

            <div className="flex flex-col gap-6">
              <p className="text-small font-medium uppercase tracking-wide text-primary">
                {group.subtitle}
              </p>
              <p className="text-body text-ink leading-relaxed">{group.description}</p>

              {group.highlights && group.highlights.length > 0 && (
                <ul className="flex flex-col gap-3">
                  {group.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5 text-body text-ink">
                      <Check size={18} strokeWidth={2.5} className="mt-0.5 shrink-0 text-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              <Button href="/contact" size="sm" className="self-start">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
