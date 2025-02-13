import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import sizeMe from "react-sizeme";
import StackGrid, { Grid } from "react-stack-grid";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import PortfolioModal from "./PortfolioModal";

export interface Pic {
  id: string;
  name: string;
}

function Portfolio(props: any) {
  enum Category {
    FullHouseRemodelingAndReno = "Full-House Remodeling and Renovation",
    Showers = "Showers",
    Bathrooms = "Bathrooms",
    Kitchens = "Kitchens",
    HVAC = "HVAC",
    Siding = "Siding",
    Roofing = "Roofing",
    Floorings = "Floorings",
    Decks = "Decks",
    Fences = "Fences",
    Pavements = "Pavements",
    Fireplaces = "Fireplaces",
  }

  const [category, setCategory] = useState(Category.Kitchens);
  const [images, setImages] = useState<[Pic]>();
  const [modalShow, setModalShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { width } = props;
  const columnWidth =
    width < 780 ? width - 80 : width < 1200 ? width / 2 - 80 : width / 3 - 40;

  useEffect(() => {
    async function getImages() {
      const res = await fetch(
        "https://storage.googleapis.com/storage/v1/b/68construction-photos/o?prefix=portfolio/" +
        category.toLowerCase().replace(/\s+/g, '') +
        "&fields=items(name,id)"
      );
      const data = await res.json();
      console.log(data.items);

      // remove any non-images
      data.items = data.items.filter((item:any)=> !item.id.includes("//"))
      setImages(data.items);
    }
    getImages();
    setTimeout(() => {
      gridRef.current?.updateLayout();
    }, 1000);
    setTimeout(() => {
      gridRef.current?.updateLayout();
    }, 5000);
  }, [category]);

  const gridRef = useRef<Grid>();

  return (
    <div className="flex flex-col items-center px-10 w-full space-y-2">
      <h2 className="text-5xl">Check Out Our Latest Remodeling Projects</h2>
      <Dropdown className="bg-gray-500">
        <Dropdown.Toggle size="lg" variant="secondary">
          <div className="flex flex-row space-x-2">
            <div>{category}</div>
            <img
              className="fill-white"
              src="/dropdown.png"
              alt="dropdown"
              width={30}
              height={20}
            />
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {Object.values(Category).map((key, i) => (
            <Dropdown.Item
              key={i}
              onClick={() => {
                setCategory(key);
                setTimeout(() => {
                  gridRef.current?.updateLayout();
                }, 1000);
                setTimeout(() => {
                  gridRef.current?.updateLayout();
                }, 5000);
              }}
            >
              <div className="text-2xl">{key}</div>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <div className="w-full">
        <StackGrid
          gridRef={(grid) => (gridRef.current = grid)}
          monitorImagesLoaded={true}
          columnWidth={columnWidth}
        >
          {images &&
            images.map((image, i) => (
              <div
                key={image.id}
                className="transition overflow-hidden w-full h-full"
                onClick={() => {
                  setSelectedIndex(i);
                  setModalShow(true);
                }}
              >
                <div className="relative">
                  <Image
                    className="custom-img hover:scale-125 duration-300"
                    alt={`portfolio photo: ${image.name}`}
                    src={`https://storage.googleapis.com/68construction-photos/${image.name}`}
                    layout="fill"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
        </StackGrid>
      </div>
      <PortfolioModal
        images={images}
        selectedIndex={selectedIndex}
        handleSelect={(index: number) => {
          setSelectedIndex(index);
        }}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default sizeMe()(Portfolio);
