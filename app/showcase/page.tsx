import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Showcase",
  description: "Explore LIXIANG Trade product program directions for consumer goods, electronics accessories, home, and sourcing coordination."
};

export default function ShowcasePage() {
  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <p className="eyebrow text-wine">Product Programs</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight">A flexible set of product directions for buyers and partners.</h1>
        <p className="mt-5 max-w-2xl leading-7 text-ink/70">
          This showcase presents product directions rather than a live inventory catalog. Visuals and descriptions are intentionally modular, so they can be replaced with supplier-approved photography, SKU information, and final product programs as they are developed.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
