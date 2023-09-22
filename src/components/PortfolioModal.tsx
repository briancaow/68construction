import { useState } from "react";
import { Button, Carousel, Modal } from "react-bootstrap";
import { Pic } from "./Portfolio";
import Image from "next/image";

export default function PortfolioModal(props: any) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="w-full h-full bg-red-500">
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
                  {/* <div className="w-full h-full"> */}
                  <div className="relative w-full h-[50vh] lg:h-[90vh] bg-black">
                    <Image
                      //   className="custom-img"
                      src={`https://storage.googleapis.com/68construction-photos/${image.name}`}
                      alt={`portfolio photo: ${image.name}`}
                      fill={true}
                      objectFit="contain"
                      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                  </div>
                  {/* </div> */}
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
      </Modal.Body>
    </Modal>
  );
}
