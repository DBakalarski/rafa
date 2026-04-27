import type { Metadata } from "next";
import { HeroB } from "@/components/concept-b/HeroB";
import { FeatureStripB } from "@/components/concept-b/FeatureStripB";
import { CabinShowcaseB } from "@/components/concept-b/CabinShowcaseB";
import { AttractionsB } from "@/components/concept-b/AttractionsB";
import { AudienceB } from "@/components/concept-b/AudienceB";
import { PricingPreviewB } from "@/components/concept-b/PricingPreviewB";
import { LocationB } from "@/components/concept-b/LocationB";
import { ContactB } from "@/components/concept-b/ContactB";

export const metadata: Metadata = {
  title: "Koncepcja B — Odważna Przygoda",
  description:
    "Twoja przygoda nad jeziorem. Ośrodek Rafa-Jeziorsko — żeglowanie, SUP, rejsy i wypoczynek nad Zbiornikiem Jeziorsko.",
};

export default function ConceptBPage() {
  return (
    <>
      <HeroB />
      <FeatureStripB />
      <CabinShowcaseB />
      <AttractionsB />
      <AudienceB />
      <PricingPreviewB />
      <LocationB />
      <ContactB />
    </>
  );
}
