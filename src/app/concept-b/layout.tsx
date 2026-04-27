import { ConceptToggle } from "@/components/ConceptToggle";
import { NavigationB } from "@/components/concept-b/NavigationB";
import { FooterB } from "@/components/concept-b/FooterB";

export default function ConceptBLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "var(--color-b-primary)", color: "var(--color-b-text)" }}
    >
      <ConceptToggle />
      <NavigationB />
      <main className="flex-1">{children}</main>
      <FooterB />
    </div>
  );
}
