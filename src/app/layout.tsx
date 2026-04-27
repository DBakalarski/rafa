import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Lora({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rafa Jeziorsko — Ośrodek Wypoczynkowo-Żeglarski",
    template: "%s | Rafa Jeziorsko",
  },
  description:
    "Bezpieczny wypoczynek w samodzielnych domkach nad jeziorem. Ośrodek Rafa-Jeziorsko — zachodni brzeg Zbiornika Jeziorsko. Sezon kwiecień–listopad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${jakartaSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
