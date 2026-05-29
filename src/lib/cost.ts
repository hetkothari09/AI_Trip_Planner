import type { Activity } from "@/lib/ai/schemas";
import type { Hotel } from "@/lib/hotels/types";
import type { RouteResult } from "@/lib/maps";

export type CostCategory = "hotel" | "activity" | "travel" | "food";

export interface CostItem {
  label: string;
  category: CostCategory;
  amount: number; // INR
}

export interface CostBreakdown {
  items: CostItem[];
  byCategory: Record<CostCategory, number>;
  total: number;
}

export interface CostInputs {
  places: { id: string; name: string; days: number }[];
  hotels: Record<string, Hotel | undefined>;
  activities: Record<string, Activity[] | undefined>;
  route: RouteResult | null;
  travellers?: number;
  perDiemFood?: number; // per person per day, INR
  fuelPerKm?: number; // INR per km
}

/** Pure, real-time cost aggregation across hotels, activities, intercity travel and food. */
export function computeCost({
  places,
  hotels,
  activities,
  route,
  travellers = 2,
  perDiemFood = 700,
  fuelPerKm = 9,
}: CostInputs): CostBreakdown {
  const items: CostItem[] = [];

  for (const p of places) {
    const hotel = hotels[p.id];
    if (hotel) {
      items.push({
        label: `${hotel.name} — ${p.days} night${p.days > 1 ? "s" : ""}`,
        category: "hotel",
        amount: hotel.pricePerNight * p.days,
      });
    }
    const acts = activities[p.id] ?? [];
    for (const a of acts) {
      items.push({
        label: `${a.name} ×${travellers}`,
        category: "activity",
        amount: a.price * travellers,
      });
    }
    items.push({
      label: `Food & local transport — ${p.name} (${p.days}d ×${travellers})`,
      category: "food",
      amount: perDiemFood * p.days * travellers,
    });
  }

  if (route && route.totalDistanceKm > 0) {
    items.push({
      label: `Intercity travel — ${Math.round(route.totalDistanceKm)} km`,
      category: "travel",
      amount: Math.round(route.totalDistanceKm * fuelPerKm),
    });
  }

  const byCategory: Record<CostCategory, number> = { hotel: 0, activity: 0, travel: 0, food: 0 };
  for (const it of items) byCategory[it.category] += it.amount;
  const total = items.reduce((n, it) => n + it.amount, 0);

  return { items, byCategory, total };
}

export function formatINR(n: number): string {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}
