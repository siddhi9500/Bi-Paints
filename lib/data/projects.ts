// Shared between the homepage "Trusted in the Field" carousel and the /projects page.
export interface Project {
  client: string;
  badge: string;
  sector: string;
  location: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    client: "Ministry of Defence",
    badge: "Defence",
    sector: "Aerospace & Defence Manufacturing",
    location: "Pan India",
    image: "/project-defence.jpg",
  },
  {
    client: "Godrej Group",
    badge: "Industrial",
    sector: "Process Equipment Division",
    location: "Mumbai, Maharashtra",
    image: "/project-godrej.jpg",
  },
  {
    client: "Larsen & Toubro",
    badge: "Industrial",
    sector: "Power Boilers, Hazira",
    location: "Hazira, Gujarat",
    image: "/project-lt.jpg",
  },
  {
    client: "AM/NS Ports",
    badge: "Marine",
    sector: "Marine & Port Infrastructure",
    location: "Gujarat Coast",
    image: "/project-amns-ports.jpg",
  },
];
