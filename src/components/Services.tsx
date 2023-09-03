import Image from "next/image";

export default function Services() {
  const columnWidth = 800;
  const rowHeight = 600;
  return (
    <div className="flex flex-col justify-start items-center w-full bg-gray-200 py-4">
      <h2 className="">Services</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 px-4 gap-4">
        <div className="flex flex-col items-center">
          <div className="transition overflow-hidden">
            <Image
              className="hover:scale-125 duration-300"
              alt={`bathrooms`}
              src={`/portfolio/bathrooms/bathroom_11.JPG`}
              width={columnWidth}
              height={rowHeight}
            />
          </div>
          <div className="text-xl">Showers</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="transition overflow-hidden">
            <Image
              className="hover:scale-125 duration-300"
              alt={`bathrooms`}
              src={`/portfolio/bathrooms/bathroom_6.JPG`}
              width={columnWidth}
              height={rowHeight}
            />
          </div>
          <div className="text-xl">Bathrooms</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="transition overflow-hidden">
            <Image
              className="hover:scale-125 duration-300"
              alt={`bathrooms`}
              src={`/portfolio/decks/deck_3.JPG`}
              width={columnWidth}
              height={rowHeight}
            />
          </div>
          <div className="text-xl">Decks</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="transition overflow-hidden">
            <Image
              className="hover:scale-125 duration-300"
              alt={`bathrooms`}
              src={`/portfolio/fences/fence_3.JPG`}
              width={columnWidth}
              height={rowHeight}
            />
          </div>
          <div className="text-xl">Fences</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="transition overflow-hidden">
            <Image
              className="hover:scale-125 duration-300"
              alt={`bathrooms`}
              src={`/portfolio/fireplaces/fireplace_1.JPG`}
              width={columnWidth}
              height={rowHeight}
            />
          </div>
          <div className="text-xl">Fire Places</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="transition overflow-hidden">
            <Image
              className="hover:scale-125 duration-300"
              alt={`bathrooms`}
              src={`/portfolio/floorings/flooring_1.JPG`}
              width={columnWidth}
              height={rowHeight}
            />
          </div>
          <div className="text-xl">Flooring</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="transition overflow-hidden">
            <Image
              className="hover:scale-125 duration-300"
              alt={`bathrooms`}
              src={`/portfolio/kitchens/kitchen_1.JPG`}
              width={columnWidth}
              height={rowHeight}
            />
          </div>
          <div className="text-xl">Kitchens</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="transition overflow-hidden">
            <Image
              className="hover:scale-125 duration-300"
              alt={`bathrooms`}
              src={`/portfolio/pavements/pavement_6.JPG`}
              width={columnWidth}
              height={rowHeight}
            />
          </div>
          <div className="text-xl">Pavement</div>
        </div>
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
