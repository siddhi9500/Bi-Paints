import { Mail, Phone, MapPin } from "lucide-react";
import PageBanner from "@/components/layout/PageBanner";
import ContactForm from "@/components/sections/ContactForm";

export const metadata = {
  title: "Contact Us — BI Group of Companies",
  description: "Get in touch with BI Group of Companies for enquiries across our business verticals.",
};

const CONTACT_DETAILS = [
  { icon: Phone, label: "Phone", value: "+91 79 4000 0000" },
  { icon: Mail, label: "E-mail", value: "info@bipaints.in" },
  { icon: MapPin, label: "Head Office", value: "Gujarat, India" },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" crumb="Contact Us" image="/banner1.jpg" />

      <section className="py-16 sm:py-20 bg-white">
        <div className="page-container grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-h2 font-normal text-heading">Let&apos;s Talk Business</h2>
              <p className="text-body text-ink max-w-md">
                Have a question about one of our business verticals, or want to partner
                with BI Group? Send us a message and our team will be in touch.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {CONTACT_DETAILS.map((item) => (
                <div key={item.label} className="flex items-center gap-3.5">
                  <span className="flex items-center justify-center w-11 h-11 rounded-[10px] bg-cream text-primary shrink-0">
                    <item.icon size={20} strokeWidth={1.75} />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-small text-ink/60">{item.label}</span>
                    <span className="text-body font-medium text-heading">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-cream rounded-[10px] p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
