import { ConceptToggle } from "@/components/ConceptToggle";
import { NavigationA } from "@/components/concept-a/NavigationA";
import { FooterA } from "@/components/concept-a/FooterA";

export default function ConceptALayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "var(--color-a-bg)", color: "var(--color-a-text)" }}
    >
      <ConceptToggle />
      <div className="pt-8">
        <NavigationA />
        <main className="flex-1">{children}</main>
        <FooterA />
      </div>
    </div>
  );
}
