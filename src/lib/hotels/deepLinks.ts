/**
 * Build search deep links to India's top booking sites. We can't fetch live per-site
 * prices (no public APIs / anti-scraping), so we link to each site's search for the
 * hotel/city and surface an aggregator/estimated price next to it.
 */
export const BOOKING_SITES = [
  "MakeMyTrip",
  "Goibibo",
  "Booking.com",
  "Agoda",
  "Cleartrip",
] as const;
export type BookingSite = (typeof BOOKING_SITES)[number];

export function deepLink(site: BookingSite, hotelName: string, city: string): string {
  const q = encodeURIComponent(`${hotelName} ${city}`);
  switch (site) {
    case "MakeMyTrip":
      return `https://www.makemytrip.com/hotels/hotel-listing/?searchText=${q}`;
    case "Goibibo":
      return `https://www.goibibo.com/hotels/find-hotels/?q=${q}`;
    case "Booking.com":
      return `https://www.booking.com/searchresults.html?ss=${q}`;
    case "Agoda":
      return `https://www.agoda.com/search?q=${q}`;
    case "Cleartrip":
      return `https://www.cleartrip.com/hotels/results?query=${q}`;
  }
}
