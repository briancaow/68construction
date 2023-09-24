import { useState } from "react";
import { Button, Carousel, Modal } from "react-bootstrap";
import { Pic } from "./Portfolio";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PortfolioModal(props: any) {
  //   const [index, setIndex] = useState(props.selectedIndex);

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="w-full h-full">
          <Carousel
            activeIndex={props.selectedIndex}
            onSelect={props.handleSelect}
            interval={null}
            slide={false}
            touch={true}
            prevLabel={null}
            nextLabel={null}
          >
            {props.images &&
              props.images.map((image: Pic) => (
                <Carousel.Item key={image.id}>
                  <div className="relative w-full h-[50vh] lg:h-[90vh] bg-black">
                    <Image
                      src={`https://storage.googleapis.com/68construction-photos/${image.name}`}
                      alt={`portfolio photo: ${image.name}`}
                      fill={true}
                      objectFit="contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                    />
                  </div>
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
      </Modal.Body>
    </Modal>
  );
}
