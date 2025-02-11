import Image from "next/image";
import Service from "./Service";

export default function Services() {
  const columnWidth = 800;
  const rowHeight = 600;
  // TODO: Add more services from yelp
  return (
    <div className="relative flex flex-col justify-start items-center w-full space-y-4">
      <h2 className="text-5xl text-center">We Offer the Following Services:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-4 w-full">
        <Service
          columnWidth={columnWidth}
          rowHeight={rowHeight}
          service={"Full-House Remodeling and Renovation "}
          src="/portfolio/pavements/pavement_6.JPG"
        />
        <Service
          columnWidth={columnWidth}
          rowHeight={rowHeight}
          service={"Shower Remodeling"}
          src="/portfolio/showers/E4FF55E0-4016-4520-876E-120E0D6C8835.jpeg"
        />
        <Service
          columnWidth={columnWidth}
          rowHeight={rowHeight}
          service={"Bathroom Remodeling"}
          src="/portfolio/bathrooms/Bathroom 1.jpeg"
        />
        <Service
          columnWidth={columnWidth}
          rowHeight={rowHeight}
          service={"Kitchen Remodeling"}
          src="/portfolio/kitchens/087EFF61-474D-4367-A446-8D1663E50E14.jpeg"
        />
        <Service
          columnWidth={columnWidth}
          rowHeight={rowHeight}
          service={"New HVAC & Water Heaters Installation"}
          src="/portfolio/pavements/pavement_6.JPG"
        />
        <Service
          columnWidth={columnWidth}
          rowHeight={rowHeight}
          service={"Siding"}
          src="/portfolio/pavements/pavement_6.JPG"
        />
        <Service
          columnWidth={columnWidth}
          rowHeight={rowHeight}
          service={"Roofing"}
          src="/portfolio/pavements/pavement_6.JPG"
        />
        <Service
          columnWidth={columnWidth}
          rowHeight={rowHeight}
          service={"Flooring"}
          src="/portfolio/floorings/IMG_0611.JPG"
        />
        <Service
          columnWidth={columnWidth}
          rowHeight={rowHeight}
          service={"Decks, Railing, Patio Build"}
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
          service={"Pavement"}
          src="/portfolio/pavements/pavement_6.JPG"
        />
        <Service
          columnWidth={columnWidth}
          rowHeight={rowHeight}
          service={"Fire Places"}
          src="/portfolio/fireplaces/fireplace_1.JPG"
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
