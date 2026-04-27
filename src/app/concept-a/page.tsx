import type { Metadata } from "next";
import { HeroA } from "@/components/concept-a/HeroA";
import { SectionIntroA } from "@/components/concept-a/SectionIntroA";
import { CabinPreviewA } from "@/components/concept-a/CabinPreviewA";
import { AttractionsA } from "@/components/concept-a/AttractionsA";
import { SeasonBannerA } from "@/components/concept-a/SeasonBannerA";
import { IncludedA } from "@/components/concept-a/IncludedA";
import { DiscountsA } from "@/components/concept-a/DiscountsA";
import { TestimonialsA } from "@/components/concept-a/TestimonialsA";
import { ContactStripA } from "@/components/concept-a/ContactStripA";

export const metadata: Metadata = {
  title: "Koncepcja A — Klasyczna Elegancja",
  description:
    "Bezpieczny wypoczynek w samodzielnych domkach nad jeziorem. Ośrodek Rafa-Jeziorsko — koncepcja klasyczna.",
};

export default function ConceptAPage() {
  return (
    <>
      <HeroA />
      <SectionIntroA />
      <CabinPreviewA />
      <AttractionsA />
      <SeasonBannerA />
      <IncludedA />
      <DiscountsA />
      <TestimonialsA />
      <ContactStripA />
    </>
  );
}
