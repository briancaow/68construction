import Image from "next/image";
import Service from "./Service";

export default function Services() {
  const columnWidth = 800;
  const rowHeight = 600;
  // TODO: Add more services from yelp
  return (
    <div className="relative flex flex-col justify-start items-center w-full space-y-4">
      <h2 className="text-5xl">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 gap-4">
        <Service
          columnWidth={columnWidth}
          rowHeight={rowHeight}
          service={"Decks & Railing"}
          src="/portfolio/decks/deck_3.JPG"
        />
        <Service
          columnWidth={columnWidth}
          rowHeight={rowHeight}
          service={"Fences & Gates"}
          src="/portfolio/fences/fence_3.JPG"
        />
        <Service
          columnWidth={columnWidth}
          rowHeight={rowHeight}
          service={"Kitchens"}
          src="/portfolio/kitchens/kitchen_1.JPG"
        />
        <Service
          columnWidth={columnWidth}
          rowHeight={rowHeight}
          service={"Flooring"}
          src="/portfolio/floorings/flooring_1.JPG"
        />
        <Service
          columnWidth={columnWidth}
          rowHeight={rowHeight}
          service={"Showers"}
          src="/portfolio/showers/shower_5.JPG"
        />
        <Service
          columnWidth={columnWidth}
          rowHeight={rowHeight}
          service={"Bathrooms"}
          src="/portfolio/bathrooms/bathroom_5.JPG"
        />
        <Service
          columnWidth={columnWidth}
          rowHeight={rowHeight}
          service={"Fire Places"}
          src="/portfolio/fireplaces/fireplace_1.JPG"
        />
        <Service
          columnWidth={columnWidth}
          rowHeight={rowHeight}
          service={"Pavement"}
          src="/portfolio/pavements/pavement_6.JPG"
        />
      </div>
    </div>
  );
}
// bathrooms = "bathrooms",
// decks = "decks",
// fences = "fences",
// fireplaces = "fireplaces",
// floorings = "floorings",
// kitchens = "kitchens",
// pavements = "pavements",
