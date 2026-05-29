import type { CitySpot, FoodPlace } from "./schemas";

/**
 * Curated, real itineraries for major Uttarakhand cities — actual named attractions,
 * realistic visit durations, regional food and real eateries. Used by the mock provider
 * so the demo shows genuine spots instead of generic templates. (When an LLM key is set,
 * the model produces this live; this dataset grounds the keyless experience.)
 */
export interface CuratedCity {
  recommendedDays: number;
  famousFor: string[];
  localFood: string[];
  foodPlaces: FoodPlace[];
  spots: CitySpot[];
}

export const CURATED_CITIES: Record<string, CuratedCity> = {
  rishikesh: {
    recommendedDays: 2,
    famousFor: ["Yoga capital of the world", "Ganga Aarti", "White-water rafting", "Iconic suspension bridges"],
    localFood: ["Chotiwala thali", "Aloo puri at Ram Jhula", "Herbal chai", "German bakery fare"],
    foodPlaces: [
      { name: "Chotiwala Restaurant", dish: "Pure-veg Garhwali thali", note: "Rishikesh institution since 1958" },
      { name: "Little Buddha Cafe", dish: "Wood-fired pizza & Ganga views" },
      { name: "The Sitting Elephant (Glasshouse)", dish: "Riverside fine dining" },
    ],
    spots: [
      { name: "Triveni Ghat Ganga Aarti", description: "Evening lamp-lit aarti on the main ghat — the most atmospheric ritual in town.", durationMin: 75, category: "spiritual" },
      { name: "Laxman Jhula & Ram Jhula", description: "Walk the iconic suspension bridges over the Ganga lined with temples and cafes.", durationMin: 90, category: "sightseeing" },
      { name: "The Beatles Ashram (Chaurasi Kutia)", description: "Graffiti-covered ruins where the Beatles stayed in 1968.", durationMin: 120, category: "sightseeing" },
      { name: "White-water Rafting (Shivpuri stretch)", description: "16 km Grade II–III rapids run — Rishikesh's signature adventure.", durationMin: 180, category: "activity" },
      { name: "Neelkanth Mahadev Temple", description: "Hilltop Shiva temple amid forest, ~32 km drive with valley views.", durationMin: 150, category: "spiritual" },
      { name: "Parmarth Niketan Ashram", description: "Sprawling riverside ashram, hub of yoga and the grand evening aarti.", durationMin: 60, category: "spiritual" },
    ],
  },
  haridwar: {
    recommendedDays: 1,
    famousFor: ["Har Ki Pauri Ganga Aarti", "Gateway to Char Dham", "Kumbh Mela city", "Hilltop Devi temples"],
    localFood: ["Aloo puri & jalebi", "Kachori at Bara Bazaar", "Moth-bhalla chaat", "Mishrilal lassi"],
    foodPlaces: [
      { name: "Mohan Ji Puri Wale", dish: "Aloo puri & hot jalebi", note: "Legendary breakfast near Har Ki Pauri" },
      { name: "Hoshiyar Puri", dish: "Puri-sabzi thali since 1937" },
      { name: "Big Ben Restaurant", dish: "North-Indian & chaat" },
    ],
    spots: [
      { name: "Har Ki Pauri Ganga Aarti", description: "The defining experience of Haridwar — thousands of diyas float at dusk.", durationMin: 75, category: "spiritual" },
      { name: "Mansa Devi Temple (ropeway)", description: "Hilltop temple reached by the Udankhatola cable car with city views.", durationMin: 120, category: "spiritual" },
      { name: "Chandi Devi Temple", description: "Cable-car shrine on Neel Parvat, one of the Siddh Peeths.", durationMin: 120, category: "spiritual" },
      { name: "Maya Devi Temple", description: "Ancient Shakti Peeth, one of Haridwar's oldest temples.", durationMin: 45, category: "spiritual" },
      { name: "Bara Bazaar walk", description: "Browse rudraksh, brassware and street snacks in the old market.", durationMin: 75, category: "sightseeing" },
    ],
  },
  mussoorie: {
    recommendedDays: 2,
    famousFor: ["Queen of the Hills", "Mall Road promenade", "Kempty Falls", "Colonial-era charm"],
    localFood: ["Bun tikki", "Maggi at Char Dukan", "Tibetan momos", "Chocolate fudge"],
    foodPlaces: [
      { name: "Char Dukan, Landour", dish: "Pancakes, Maggi & chai", note: "Iconic Landour breakfast spot" },
      { name: "Lovely Omelette Centre", dish: "Cheese-chilli omelettes on Mall Road" },
      { name: "Kalsang", dish: "Tibetan thukpa & momos" },
    ],
    spots: [
      { name: "Gun Hill (ropeway)", description: "Second-highest point, cable car up for Doon Valley & Himalayan views.", durationMin: 90, category: "sightseeing" },
      { name: "Camel's Back Road walk", description: "3 km scenic promenade ending at a famous sunset point.", durationMin: 75, category: "nature" },
      { name: "Kempty Falls", description: "Mussoorie's largest waterfall, ~15 km out — bathing pools and stalls.", durationMin: 120, category: "nature" },
      { name: "Landour & Lal Tibba", description: "Quaint cantonment loop with cafes, churches and the highest viewpoint.", durationMin: 150, category: "sightseeing" },
      { name: "Mall Road & Library Bazaar", description: "Evening stroll, ridge views and shopping along the heritage promenade.", durationMin: 90, category: "sightseeing" },
      { name: "Company Garden", description: "Landscaped garden with boating and an artificial lake.", durationMin: 60, category: "nature" },
    ],
  },
  nainital: {
    recommendedDays: 2,
    famousFor: ["Naini Lake", "Naina Devi temple", "Snow View ropeway", "Colonial hill-station vibe"],
    localFood: ["Bal mithai", "Singori", "Bhatt ki churkani", "Thukpa"],
    foodPlaces: [
      { name: "Sakley's Restaurant", dish: "Continental & legendary pastries", note: "Running since the 1940s" },
      { name: "Machan Restaurant", dish: "North-Indian & tandoori on Mall Road" },
      { name: "Chandni Chowk", dish: "Local Kumaoni thali" },
    ],
    spots: [
      { name: "Naini Lake boating", description: "Pedal or rowboat across the emerald lake at the town's heart.", durationMin: 75, category: "nature" },
      { name: "Naina Devi Temple", description: "Lakeside Shakti Peeth beside the flats — Nainital's spiritual centre.", durationMin: 45, category: "spiritual" },
      { name: "Snow View Point (ropeway)", description: "Cable car to 2,270 m for panoramic Himalayan and Nanda Devi views.", durationMin: 120, category: "sightseeing" },
      { name: "Tiffin Top (Dorothy's Seat)", description: "Ridge viewpoint reachable by pony or hike, sweeping valley vistas.", durationMin: 150, category: "activity" },
      { name: "Mall Road & The Flats", description: "Evening promenade along the lake with shops and eateries.", durationMin: 90, category: "sightseeing" },
      { name: "Eco Cave Gardens", description: "Interconnected rocky caves and a musical fountain — fun for families.", durationMin: 60, category: "sightseeing" },
    ],
  },
  auli: {
    recommendedDays: 2,
    famousFor: ["Himalayan skiing", "Asia's longest cable car", "Gorson Bugyal meadows", "Nanda Devi views"],
    localFood: ["Garhwali thali", "Phaanu", "Gahat dal", "Hot gulgule"],
    foodPlaces: [
      { name: "The Tattva Resort restaurant", dish: "Garhwali & North-Indian" },
      { name: "Sky View Cafe, Joshimath", dish: "Maggi, momos & chai with valley views" },
    ],
    spots: [
      { name: "Auli Ropeway (Joshimath–Auli)", description: "4 km cable car, among Asia's longest and highest, over pine slopes.", durationMin: 90, category: "sightseeing" },
      { name: "Gorson Bugyal trek", description: "Gentle alpine-meadow trek with Nanda Devi and Trishul panoramas.", durationMin: 240, category: "activity" },
      { name: "Skiing at Auli slopes", description: "GMVN-run ski runs (Jan–Mar); lessons and gear on rent.", durationMin: 180, category: "activity" },
      { name: "Auli Artificial Lake", description: "World's highest man-made lake, built to support snow-making.", durationMin: 60, category: "nature" },
      { name: "Chenab Lake side-trek", description: "Offbeat trek to a serene high-altitude lake near Auli.", durationMin: 210, category: "nature" },
    ],
  },
  kedarnath: {
    recommendedDays: 2,
    famousFor: ["One of the 12 Jyotirlingas", "Char Dham pilgrimage", "16 km Himalayan trek", "Glacial backdrop"],
    localFood: ["Aloo ke gutke", "Jhangora kheer", "Hot khichdi at langars", "Ginger-lemon tea"],
    foodPlaces: [
      { name: "GMVN Kedarnath canteen", dish: "Simple sattvic thali near the temple" },
      { name: "Langars on the trek route", dish: "Free community meals" },
    ],
    spots: [
      { name: "Kedarnath Temple darshan", description: "8th-century Shiva Jyotirlinga set against snow peaks — the trip's culmination.", durationMin: 120, category: "spiritual" },
      { name: "Gaurikund–Kedarnath trek", description: "16 km ascent (or pony/palki/heli) through dramatic Himalayan terrain.", durationMin: 360, category: "activity" },
      { name: "Bhairavnath Temple", description: "Short uphill walk above Kedarnath, guardian deity with valley views.", durationMin: 90, category: "spiritual" },
      { name: "Vasuki Tal trek", description: "High-altitude glacial lake trek (~8 km) for the acclimatised.", durationMin: 300, category: "activity" },
      { name: "Adi Shankaracharya Samadhi", description: "Rebuilt memorial behind the temple to the saint who revived the shrine.", durationMin: 45, category: "spiritual" },
    ],
  },
  badrinath: {
    recommendedDays: 1,
    famousFor: ["Vishnu Char Dham shrine", "Tapt Kund hot springs", "India's last village Mana", "Neelkanth peak"],
    localFood: ["Prasad khichdi", "Aloo gutke", "Rajma-chawal", "Hot jalebi"],
    foodPlaces: [
      { name: "Saket Restaurant", dish: "North-Indian thali near the temple" },
      { name: "Mana village tea stalls", dish: "Chai at 'India's last shop'" },
    ],
    spots: [
      { name: "Badrinath Temple darshan", description: "Vibrant Vishnu shrine on the Alaknanda, one of the holiest Char Dham sites.", durationMin: 120, category: "spiritual" },
      { name: "Tapt Kund hot springs", description: "Sacred thermal spring below the temple for a ritual dip.", durationMin: 45, category: "spiritual" },
      { name: "Mana Village", description: "India's last village before Tibet — Vyas Gufa, Bheem Pul and Saraswati river.", durationMin: 150, category: "sightseeing" },
      { name: "Vasudhara Falls trek", description: "~6 km walk from Mana to a 122 m waterfall amid stark mountains.", durationMin: 240, category: "activity" },
      { name: "Charan Paduka", description: "Short hike to a rock bearing Vishnu's footprints with Neelkanth views.", durationMin: 120, category: "activity" },
    ],
  },
  chopta: {
    recommendedDays: 2,
    famousFor: ["Mini Switzerland of Uttarakhand", "Tungnath–Chandrashila trek", "Alpine meadows", "Rhododendron forests"],
    localFood: ["Maggi at trail dhabas", "Aloo paratha", "Gahat soup", "Hot chai"],
    foodPlaces: [
      { name: "Chopta trail dhabas", dish: "Maggi, omelette & chai" },
      { name: "Mastura Camp kitchen", dish: "Garhwali camp meals" },
    ],
    spots: [
      { name: "Tungnath Temple trek", description: "3.5 km climb to the world's highest Shiva temple (3,680 m).", durationMin: 240, category: "spiritual" },
      { name: "Chandrashila Summit", description: "Final push above Tungnath for a 360° Himalayan crown at 4,000 m.", durationMin: 180, category: "activity" },
      { name: "Deoria Tal", description: "Reflective lake mirroring Chaukhamba peaks, a short trek near Chopta.", durationMin: 210, category: "nature" },
      { name: "Chopta meadows walk", description: "Easy ramble through bugyals and pine-rhododendron forest.", durationMin: 120, category: "nature" },
    ],
  },
  "jim corbett": {
    recommendedDays: 2,
    famousFor: ["India's oldest national park", "Bengal tiger safaris", "Ramganga river", "Dense sal forests"],
    localFood: ["Kumaoni raita", "Bhang ki chutney", "Aloo gutke", "Grilled river fish"],
    foodPlaces: [
      { name: "Corbett Motel / River View cafes", dish: "Multi-cuisine resort dining" },
      { name: "Ramnagar dhabas", dish: "North-Indian & local thali" },
    ],
    spots: [
      { name: "Dhikala Zone jeep safari", description: "The premier core zone for tiger, elephant and grassland game-viewing.", durationMin: 240, category: "activity" },
      { name: "Bijrani Zone safari", description: "Sal-forest zone close to Ramnagar, rich in birdlife and big cats.", durationMin: 210, category: "activity" },
      { name: "Corbett Waterfall", description: "60 ft forest waterfall, a scenic picnic stop near Kaladhungi.", durationMin: 90, category: "nature" },
      { name: "Garjia Devi Temple", description: "Riverside temple perched on a rock in the Kosi — sunset views.", durationMin: 60, category: "spiritual" },
      { name: "Corbett Museum (Kaladhungi)", description: "Jim Corbett's former home, now a museum on the hunter-naturalist.", durationMin: 60, category: "sightseeing" },
    ],
  },
  kausani: {
    recommendedDays: 1,
    famousFor: ["300 km Himalayan panorama", "Anasakti Ashram (Gandhi)", "Tea gardens", "Sunrise over Trishul-Nanda Devi"],
    localFood: ["Bal mithai", "Aloo ke gutke", "Madua roti", "Kumaoni raita"],
    foodPlaces: [
      { name: "Garden Restaurant", dish: "Thali with mountain views" },
      { name: "Hill Queen eateries", dish: "Local Kumaoni meals" },
    ],
    spots: [
      { name: "Sunrise viewpoint", description: "Famed dawn show over Trishul, Nanda Devi and Panchachuli peaks.", durationMin: 60, category: "nature" },
      { name: "Anasakti Ashram", description: "Where Gandhi wrote his commentary on the Gita; small museum and views.", durationMin: 60, category: "sightseeing" },
      { name: "Kausani Tea Estate", description: "Walk the organic Girias tea gardens and sample/buy local tea.", durationMin: 90, category: "nature" },
      { name: "Rudradhari Falls & Caves", description: "Short trek to a waterfall and Shiva caves through terraced fields.", durationMin: 180, category: "activity" },
    ],
  },
  almora: {
    recommendedDays: 1,
    famousFor: ["Horseshoe-shaped bazaar", "Kasar Devi (hippie trail)", "Bal mithai", "Kumaoni temples"],
    localFood: ["Bal mithai & singori", "Baal mithai at Khim Singh Mohan Singh", "Bhatt ki churkani", "Madua roti"],
    foodPlaces: [
      { name: "Khim Singh Mohan Singh Rautela", dish: "Original bal mithai", note: "Almora's iconic sweet shop" },
      { name: "Glory Restaurant", dish: "Kumaoni & North-Indian" },
    ],
    spots: [
      { name: "Kasar Devi Temple", description: "Ancient hilltop temple on a famous geomagnetic ridge with cult following.", durationMin: 90, category: "spiritual" },
      { name: "Lala Bazaar walk", description: "Stone-paved heritage market with carved wooden facades and sweet shops.", durationMin: 75, category: "sightseeing" },
      { name: "Nanda Devi Temple", description: "Town-centre temple to Kumaon's presiding goddess.", durationMin: 45, category: "spiritual" },
      { name: "Bright End Corner", description: "Classic sunset/sunrise point over the Himalayan range.", durationMin: 60, category: "nature" },
      { name: "Jageshwar Dham (day trip)", description: "Cluster of 100+ ancient stone temples in a deodar grove, ~35 km away.", durationMin: 180, category: "spiritual" },
    ],
  },
  ranikhet: {
    recommendedDays: 1,
    famousFor: ["Cantonment greenery", "Golf course at 1,800 m", "Jhula Devi temple", "Pine-clad ridges"],
    localFood: ["Aloo ke gutke", "Madua roti", "Kumaoni raita", "Bal mithai"],
    foodPlaces: [
      { name: "Moutain Pavilion", dish: "Multi-cuisine with valley views" },
      { name: "Cafe Hideout", dish: "Snacks & coffee" },
    ],
    spots: [
      { name: "Jhula Devi Temple", description: "Bell-covered Durga temple famed for granting wishes.", durationMin: 45, category: "spiritual" },
      { name: "Ranikhet Golf Course", description: "One of Asia's highest 9-hole courses amid deodar forest.", durationMin: 90, category: "activity" },
      { name: "Chaubatia Gardens", description: "Apple and fruit orchards with a Himalayan viewpoint.", durationMin: 90, category: "nature" },
      { name: "Bhalu Dam", description: "Small scenic reservoir near the orchards, good for a quiet walk.", durationMin: 60, category: "nature" },
    ],
  },
  mukteshwar: {
    recommendedDays: 1,
    famousFor: ["360° Himalayan views", "Chauli Ki Jali cliffs", "Adventure activities", "Apple orchards"],
    localFood: ["Apple & plum jams", "Bhatt ki churkani", "Aloo gutke", "Wood-fired pizza at cafes"],
    foodPlaces: [
      { name: "Nature's Cafe", dish: "Wood-fired pizza with valley views" },
      { name: "Mukteshwar dhabas", dish: "Kumaoni thali" },
    ],
    spots: [
      { name: "Mukteshwar Dham (Shiva temple)", description: "350-year-old hilltop temple with sweeping snow-peak vistas.", durationMin: 60, category: "spiritual" },
      { name: "Chauli Ki Jali", description: "Dramatic rock cliffs and a natural rock window — rappelling & rock climbing.", durationMin: 120, category: "activity" },
      { name: "Sunrise / sunset point", description: "Panorama of Nanda Devi, Trishul and Panchachuli ranges.", durationMin: 60, category: "nature" },
      { name: "Orchard & forest walk", description: "Ramble through apple orchards and oak forest around the village.", durationMin: 90, category: "nature" },
    ],
  },
  lansdowne: {
    recommendedDays: 1,
    famousFor: ["Quiet cantonment town", "Garhwal Rifles heritage", "Bhulla Lake", "Untouched pine forests"],
    localFood: ["Garhwali thali", "Aloo gutke", "Bun-maska", "Hot pakoras"],
    foodPlaces: [
      { name: "Blue Pine Cafe", dish: "Snacks & coffee" },
      { name: "Lansdowne dhabas", dish: "Garhwali home-style thali" },
    ],
    spots: [
      { name: "Bhulla Lake", description: "Small landscaped lake with paddle boating, run by the Garhwal Rifles.", durationMin: 60, category: "nature" },
      { name: "Tip-in-Top (Tiffin Top)", description: "Viewpoint over Shivalik ranges, especially at sunrise.", durationMin: 75, category: "nature" },
      { name: "Garhwali Mess & War Memorial", description: "Regimental museum tracing the Garhwal Rifles' history.", durationMin: 60, category: "sightseeing" },
      { name: "St. Mary's Church", description: "Restored 1896 colonial church with a small history gallery.", durationMin: 45, category: "sightseeing" },
    ],
  },
  munsiyari: {
    recommendedDays: 2,
    famousFor: ["Panchachuli peaks base", "Trekking gateway", "Tribal Bhotia culture", "Pristine remoteness"],
    localFood: ["Bhatt ki churkani", "Madua roti", "Local rajma", "Buransh (rhododendron) juice"],
    foodPlaces: [
      { name: "Zara's Resort restaurant", dish: "Kumaoni & North-Indian" },
      { name: "Munsiyari dhabas", dish: "Hot thali with Panchachuli views" },
    ],
    spots: [
      { name: "Panchachuli viewpoint", description: "Front-row dawn views of the five-peaked Panchachuli massif.", durationMin: 60, category: "nature" },
      { name: "Khaliya Top trek", description: "High-meadow day trek (~8 km) with 360° Himalayan panoramas.", durationMin: 300, category: "activity" },
      { name: "Birthi Falls", description: "126 m waterfall on the approach road, a scenic stop.", durationMin: 75, category: "nature" },
      { name: "Tribal Heritage Museum", description: "Private museum of Bhotia artefacts and mountaineering history.", durationMin: 60, category: "sightseeing" },
    ],
  },
  dhanaulti: {
    recommendedDays: 1,
    famousFor: ["Eco parks", "Quiet deodar forests", "Snowfall in winter", "Apple orchards"],
    localFood: ["Aloo ke gutke", "Maggi at view points", "Garhwali thali", "Hot momos"],
    foodPlaces: [
      { name: "Apple Orchard Cafe", dish: "Snacks & local apples" },
      { name: "Dhanaulti dhabas", dish: "Garhwali thali" },
    ],
    spots: [
      { name: "Eco Park (Amber & Dhara)", description: "Twin forest parks with zip-lining, swings and deodar trails.", durationMin: 120, category: "nature" },
      { name: "Surkanda Devi Temple", description: "Hilltop Shakti Peeth (~8 km) with a short ropeway and big views.", durationMin: 150, category: "spiritual" },
      { name: "Potato farms viewpoint", description: "Terraced fields and pine ridges, popular for quiet walks.", durationMin: 60, category: "nature" },
    ],
  },
  gangotri: {
    recommendedDays: 1,
    famousFor: ["Source shrine of the Ganga", "Char Dham site", "Gaumukh glacier trek", "Bhagirathi peaks"],
    localFood: ["Sattvic temple thali", "Aloo gutke", "Hot khichdi", "Ginger tea"],
    foodPlaces: [
      { name: "GMVN canteen", dish: "Simple pilgrim thali" },
      { name: "Gangotri bazaar dhabas", dish: "Veg North-Indian" },
    ],
    spots: [
      { name: "Gangotri Temple", description: "18th-century shrine to Goddess Ganga beside the roaring Bhagirathi.", durationMin: 90, category: "spiritual" },
      { name: "Bhagirath Shila & Surya Kund", description: "Sacred rock and powerful waterfall right by the temple.", durationMin: 60, category: "spiritual" },
      { name: "Gaumukh trek (permit)", description: "19 km trek to the Gangotri glacier snout, the Ganga's true source.", durationMin: 360, category: "activity" },
    ],
  },
};

/** Match a place name to curated data, allowing suffixes like "National Park". */
export function lookupCuratedCity(name: string): CuratedCity | null {
  const key = name.toLowerCase().trim();
  if (CURATED_CITIES[key]) return CURATED_CITIES[key];
  for (const k of Object.keys(CURATED_CITIES)) {
    if (key.includes(k) || k.includes(key)) return CURATED_CITIES[k];
  }
  return null;
}
