// Central data source for the "Where We Are" page. Every section reads from
// here instead of hardcoding location facts — update this file to add,
// remove or correct locations, stats and export markets across the whole
// page. Values that are not yet confirmed are left as explicit placeholders
// (e.g. "XX+", "[Other Location]") rather than invented numbers/names.

export type LocationType = "manufacturing" | "office" | "distribution" | "export";

export const LOCATION_TYPE_LABEL: Record<LocationType, string> = {
  manufacturing: "Manufacturing",
  office: "Office",
  distribution: "Distribution",
  export: "Export Market",
};

export interface WhereWeAreLocation {
  id: string;
  name: string;
  country: string;
  region: string;
  type: LocationType;
  description: string;
  coordinates: { lat: number; lng: number };
  /** Hand-tuned position (percent of image width/height) on /global-footprint-map.png */
  mapPosition: { xPct: number; yPct: number };
  placeholder?: boolean;
}

export const WHERE_WE_ARE_LOCATIONS: WhereWeAreLocation[] = [
  {
    id: "surat-hq",
    name: "Surat",
    country: "India",
    region: "Gujarat",
    type: "office",
    description: "Our head office coordinates business operations, quality standards and growth across every BI Group market.",
    coordinates: { lat: 21.17, lng: 72.83 },
    mapPosition: { xPct: 61.2, yPct: 43 },
  },
  {
    id: "surat-manufacturing",
    name: "Surat",
    country: "India",
    region: "Gujarat",
    type: "manufacturing",
    description: "Our core manufacturing base, supporting consistent quality and reliable supply across markets we serve.",
    coordinates: { lat: 21.2, lng: 72.87 },
    mapPosition: { xPct: 61.2, yPct: 43 },
  },
  {
    id: "manufacturing-other",
    name: "[Other Location]",
    country: "India",
    region: "[Region]",
    type: "manufacturing",
    description: "Additional manufacturing capacity supporting BI Group's growing production network.",
    coordinates: { lat: 22.5, lng: 75.5 },
    mapPosition: { xPct: 64, yPct: 41 },
    placeholder: true,
  },
  {
    id: "export-dubai",
    name: "Dubai",
    country: "UAE",
    region: "Middle East",
    type: "export",
    description: "Serving customers across the Middle East through our growing export network.",
    coordinates: { lat: 25.2, lng: 55.27 },
    mapPosition: { xPct: 41.5, yPct: 23.2 },
  },
  {
    id: "export-thailand",
    name: "Thailand",
    country: "Thailand",
    region: "Southeast Asia",
    type: "export",
    description: "A growing export market for BI Paints solutions in Southeast Asia.",
    coordinates: { lat: 15.87, lng: 100.99 },
    mapPosition: { xPct: 76.6, yPct: 65.3 },
  },
  {
    id: "export-bangladesh",
    name: "Bangladesh",
    country: "Bangladesh",
    region: "South Asia",
    type: "export",
    description: "Serving customers in Bangladesh through our expanding distribution partnerships.",
    coordinates: { lat: 23.68, lng: 90.36 },
    mapPosition: { xPct: 79.1, yPct: 55.4 },
  },
  {
    id: "export-srilanka",
    name: "Sri Lanka",
    country: "Sri Lanka",
    region: "South Asia",
    type: "export",
    description: "Delivering trusted paint and coating solutions to customers across Sri Lanka.",
    coordinates: { lat: 7.87, lng: 80.77 },
    mapPosition: { xPct: 72.2, yPct: 70.2 },
  },
  {
    id: "export-maldives",
    name: "Maldives",
    country: "Maldives",
    region: "South Asia",
    type: "export",
    description: "Extending our export network to customers across the Maldives.",
    coordinates: { lat: 3.2, lng: 73.22 },
    mapPosition: { xPct: 89.5, yPct: 35.2 },
  },
];

// States/regions confirmed as covered by BI Group's domestic distribution
// network. Left intentionally short — do not add state names beyond what's
// been confirmed; use STATES_COVERAGE_OPEN_ENDED to signal there are more.
export const STATES_COVERED = ["Gujarat", "Maharashtra", "Rajasthan"];
export const STATES_COVERAGE_OPEN_ENDED = true;

export interface ReachStat {
  id: string;
  label: string;
  /** Numeric target for the count-up animation. Leave null until a real figure is confirmed. */
  value: number | null;
  suffix: string;
}

export const REACH_STATS: ReachStat[] = [
  { id: "markets", label: "Cities / Markets Served", value: null, suffix: "+" },
  { id: "dealers", label: "Dealers & Channel Partners", value: null, suffix: "+" },
  { id: "states", label: "States Covered", value: null, suffix: "+" },
  { id: "international", label: "International Markets", value: null, suffix: "+" },
];

export const EXPORT_MARKETS = WHERE_WE_ARE_LOCATIONS.filter((l) => l.type === "export");
