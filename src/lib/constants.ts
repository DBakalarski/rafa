import type { MenuItem, CabinType, ContactInfo, Discount, Amenity } from "./types";

export const CONTACT_INFO: ContactInfo = {
  phone: "608 108 431",
  address: "Kościanki 15",
  city: "62-730 Dobra",
  gps: "N: 51° 51' 8.74\" / E: 18° 40' 27.04\"",
  bankAccount: "92 1050 1461 1000 0092 2187 4697",
  facebook: "https://www.facebook.com/RafaJeziorsko",
};

export const MENU_ITEMS: MenuItem[] = [
  { label: "Home", href: "#" },
  {
    label: "Oferta",
    href: "#",
    children: [
      { label: "O nas", href: "#" },
      {
        label: "W obiekcie",
        href: "#",
        children: [
          { label: "Wypożyczalnia sprzętu", href: "#" },
          { label: "Pole namiotowe", href: "#" },
          { label: "Plac zabaw", href: "#" },
          { label: "Tawerna letnia", href: "#" },
          { label: "Sauna i bania", href: "#" },
          { label: "Altana grillowa", href: "#" },
        ],
      },
      {
        label: "Pakiety sezonowe",
        href: "#",
        children: [
          { label: "Majówka 2026", href: "#" },
          { label: "Wakacje 2026", href: "#" },
          { label: "Wczasy dla seniora 2026", href: "#" },
        ],
      },
      { label: "Rezerwacje", href: "#" },
      { label: "Kursy motorowodne", href: "#" },
      { label: "Plan Ośrodka", href: "#" },
    ],
  },
  { label: "Domki", href: "domki" },
  {
    label: "Atrakcje",
    href: "#",
    children: [
      { label: "Rejs statkiem", href: "#" },
      { label: "Tor skimboardowy", href: "#" },
      { label: "W okolicy", href: "#" },
    ],
  },
  {
    label: "Port",
    href: "#",
    children: [
      { label: "Plan Portu", href: "#" },
      { label: "Cumowanie", href: "#" },
      { label: "Wodowanie", href: "#" },
      { label: "Zimowanie", href: "#" },
    ],
  },
  { label: "Galeria", href: "#" },
  { label: "Cennik", href: "#" },
  { label: "Kontakt", href: "#" },
];

export const CABIN_TYPES: CabinType[] = [
  {
    id: "superior",
    name: "SUPERIOR",
    maxGuests: 6,
    rooms: "3 pokoje (salon + 2 sypialnie)",
    hasAC: true,
    hasKitchen: true,
    notes: "Netflix 43\", grill zewnętrzny, łóżko tarasowe",
    highlight: true,
  },
  {
    id: "lux",
    name: "LUX",
    maxGuests: 4,
    rooms: "2 pokoje (dzienny + sypialnia)",
    hasAC: true,
    hasKitchen: true,
    notes: "Kanapa rozkładana w pokoju dziennym",
    highlight: true,
  },
  {
    id: "komfort",
    name: "KOMFORT",
    maxGuests: 5,
    rooms: "2 pokoje (dzienny + sypialnia)",
    hasAC: false,
    hasKitchen: true,
    notes: "Przestronny, wentylator",
  },
  {
    id: "family",
    name: "FAMILY",
    maxGuests: 4,
    rooms: "2 pokoje (dzienny + sypialnia)",
    hasAC: false,
    hasKitchen: false,
    notes: "Dla rodzin jadających w Tawernie (lodówka + mikrofala)",
    highlight: true,
  },
  {
    id: "standard-plus",
    name: "STANDARD PLUS",
    maxGuests: 4,
    rooms: "1 pokój + aneks kuchenny",
    hasAC: false,
    hasKitchen: true,
    notes: "Kanapa rozkładana + 2 tapczany",
  },
  {
    id: "standard",
    name: "STANDARD",
    maxGuests: 4,
    rooms: "1 pokój",
    hasAC: false,
    hasKitchen: false,
    notes: "Kanapa rozkładana + 2 tapczany (lodówka + mikrofala)",
  },
  {
    id: "portowy",
    name: "PORTOWY",
    maxGuests: 5,
    rooms: "2 niezależne części",
    hasAC: false,
    hasKitchen: false,
    notes: "Widok na port, prysznice w węźle sanitarnym",
    highlight: true,
  },
  {
    id: "mini",
    name: "MINI",
    maxGuests: 3,
    rooms: "1 pokój (na campingu)",
    hasAC: false,
    hasKitchen: false,
    notes: "Bez łazienki, obok węzła sanitarnego",
  },
];

export const DISCOUNTS: Discount[] = [
  {
    label: "Dzieci do 16 lat",
    value: "do 50%",
    description: "Zniżka na zakwaterowanie",
  },
  {
    label: "Od 7 noclegów",
    value: "5%",
    description: "Zniżka za dłuższy pobyt",
  },
  {
    label: "Od 10 noclegów",
    value: "8%",
    description: "Zniżka za dłuższy pobyt",
  },
  {
    label: "Camping 7+ nocy",
    value: "5%",
    description: "Zniżka campingowa",
  },
  {
    label: "Camping 14+ nocy",
    value: "10%",
    description: "Zniżka campingowa",
  },
  {
    label: "PFCC / CCI / ACSI",
    value: "5%",
    description: "Dla członków organizacji",
  },
  {
    label: "Rejsy — dzieci do 12 lat",
    value: "50%",
    description: "Zniżka na rejs statkiem",
  },
];

export const INCLUDED_AMENITIES: Amenity[] = [
  { icon: "wifi", label: "WiFi" },
  { icon: "sun", label: "Taras z leżakami" },
  { icon: "zap", label: "Prąd + woda + pościel" },
  { icon: "waves", label: "Własna plaża" },
  { icon: "smile", label: "Plac zabaw" },
  { icon: "dumbbell", label: "Siłownia zewnętrzna" },
  { icon: "flame", label: "Altana z grillem" },
  { icon: "trophy", label: "Boisko siatkówki plażowej" },
  { icon: "table", label: "Sala wielofunkcyjna" },
  { icon: "gamepad", label: "Gry planszowe" },
  { icon: "basketball", label: "Boisko do koszykówki" },
  { icon: "feather", label: "Badminton" },
];

export const ATTRACTIONS = [
  {
    id: "rejs",
    name: "Rejs statkiem",
    description: "Wycieczkowy rejs po Zbiorniku Jeziorsko. 50% zniżki dla dzieci do 12 lat.",
    category: "wodne",
  },
  {
    id: "skimboard",
    name: "Tor skimboardowy",
    description: "Jedyny taki tor w okolicy — dla miłośników ekstremalnych doznań.",
    category: "wodne",
  },
  {
    id: "wypozyczalnia",
    name: "Wypożyczalnia sprzętu",
    description: "Kajaki, deski SUP, rowery wodne, łodzie wiosłowe. Czynna od 9:00.",
    category: "wodne",
  },
  {
    id: "termy",
    name: "Termy Uniejów",
    description: "Kompleks basenów termalnych — 30 minut jazdy samochodem.",
    category: "okolica",
  },
  {
    id: "zoo",
    name: "Zoo Safari Borysew",
    description: "Safari w polskim wydaniu, idealne dla rodzin z dziećmi.",
    category: "okolica",
  },
  {
    id: "rowery",
    name: "Trasy rowerowe",
    description: "Malownicze trasy wzdłuż zbiornika i przez okoliczne wsie.",
    category: "okolica",
  },
];
