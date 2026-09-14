import type { Metadata } from "next";
import { ContactSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact LIXIANG TRADE CO., LTD. to discuss product programs, sourcing requirements, and commercial partnerships."
};

export default function ContactPage() {
  return <ContactSection />;
}
