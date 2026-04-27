"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const ConceptToggle = () => {
  const pathname = usePathname();

  const isConceptA = pathname.startsWith("/concept-a");
  const isConceptB = pathname.startsWith("/concept-b");

  const subPath = isConceptA
    ? pathname.replace("/concept-a", "")
    : isConceptB
      ? pathname.replace("/concept-b", "")
      : "";

  const linkToA = `/concept-a${subPath}`;
  const linkToB = `/concept-b${subPath}`;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-1 bg-gray-900/95 backdrop-blur-sm py-1.5 px-4 text-xs text-gray-300">
      <span className="mr-2 text-gray-500 hidden sm:inline">Podgląd koncepcji:</span>
      <Link
        href={linkToA}
        className={`px-3 py-1 rounded transition-all ${
          isConceptA
            ? "bg-white text-gray-900 font-semibold"
            : "hover:bg-gray-700 text-gray-300"
        }`}
      >
        Koncepcja A
      </Link>
      <span className="text-gray-600">/</span>
      <Link
        href={linkToB}
        className={`px-3 py-1 rounded transition-all ${
          isConceptB
            ? "bg-amber-400 text-gray-900 font-semibold"
            : "hover:bg-gray-700 text-gray-300"
        }`}
      >
        Koncepcja B
      </Link>
    </div>
  );
};
