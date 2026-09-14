import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about LIXIANG TRADE CO., LTD., an Ontario corporation positioned for global product programs and sourcing coordination."
};

export default function AboutPage() {
  return (
    <section className="bg-pearl py-16">
      <div className="container-page grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow text-wine">About LIXIANG Trade</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight">A clear corporate base for product-led trade collaboration.</h1>
          <p className="mt-6 leading-8 text-ink/70">
            LIXIANG TRADE CO., LTD. is an Ontario corporation. Its formation documents establish the corporate entity but do not define a required product category, so this website presents a flexible foundation for product programs, sourcing coordination, and commercial partnerships.
          </p>
          <p className="mt-4 leading-8 text-ink/70">
            Our website presents a professional starting point for prospective buyers, suppliers, distributors, and partners to begin a qualified cross-border product conversation.
          </p>
          <Button href="/contact" className="mt-7">Contact the Company</Button>
        </div>
        <div className="grid gap-4 rounded-md border border-ink/10 bg-white p-7 shadow-soft"><p className="eyebrow text-wine">Operating Focus</p><p className="text-3xl font-bold leading-tight">Product programs. Sourcing coordination. Practical partnerships.</p><div className="grid gap-4 border-t border-ink/10 pt-6 text-sm leading-6 text-ink/65"><p>Built for buyer, supplier, distribution, and commercial partnership conversations.</p><p>Initial discussions can be tailored around the market, product brief, sourcing needs, and operational context.</p></div></div>
      </div>
    </section>
  );
}
