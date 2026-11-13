/* ------------------------------------------------------------------
   Portfolio data
   Location: src/data/portfolioSections.js

   Images are collected automatically from src/assets using Vite's
   import.meta.glob, so you no longer need one import per image.
   - To add a photo: drop it in src/assets using the same prefix and
     next number (e.g. H7.jpg) and it appears automatically.
   - The first image in each section is used as the square cover.
   - Patterns like "H[0-9]*.*" match H1, H2 ... H10 with any extension
     (.jpg, .JPEG, .png) and will NOT match files like HM1.jpg.
------------------------------------------------------------------- */

const fileNumber = (path) => {
  const match = path.match(/\/[A-Za-z]+(\d+)[^/]*$/);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
};

// Turns the glob result into an array of image URLs ordered 1, 2, 3 ... 10
const collect = (modules) =>
  Object.entries(modules)
    .sort(([a], [b]) => fileNumber(a) - fileNumber(b))
    .map(([, url]) => url);

const portraits = collect(
  import.meta.glob("../assets/H[0-9]*.*", { eager: true, import: "default" }),
);
const weddings = collect(
  import.meta.glob("../assets/W[0-9]*.*", { eager: true, import: "default" }),
);
const birthdays = collect(
  import.meta.glob("../assets/B[0-9]*.*", { eager: true, import: "default" }),
);
const outreach = collect(
  import.meta.glob("../assets/C[0-9]*.*", { eager: true, import: "default" }),
);
const fashion = collect(
  import.meta.glob("../assets/F[0-9]*.*", { eager: true, import: "default" }),
);
const foodAndProduct = collect(
  import.meta.glob("../assets/P[0-9]*.*", { eager: true, import: "default" }),
);
const events = collect(
  import.meta.glob("../assets/Pr[0-9]*.*", { eager: true, import: "default" }),
);

// The order here is the order the squares appear on the page.
const sections = [
  { id: "portraits", title: "Portraits", images: portraits },
  { id: "weddings", title: "Weddings", images: weddings },
  { id: "birthdays", title: "Birthdays", images: birthdays },
  { id: "outreach-and-brands", title: "Outreach and Brands", images: outreach },
  { id: "fashion", title: "Fashion", images: fashion },
  { id: "food-and-product", title: "Food and Product", images: foodAndProduct },
  { id: "events", title: "Events", images: events },
];

export default sections;
