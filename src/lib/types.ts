export interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

export interface CabinType {
  id: string;
  name: string;
  maxGuests: number;
  rooms: string;
  hasAC: boolean;
  hasKitchen: boolean;
  notes: string;
  highlight?: boolean;
}

export interface ContactInfo {
  phone: string;
  address: string;
  city: string;
  email?: string;
  gps: string;
  bankAccount: string;
  facebook: string;
}

export interface Discount {
  label: string;
  value: string;
  description: string;
}

export interface Amenity {
  icon: string;
  label: string;
}
