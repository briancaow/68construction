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
        <div className="flex items-center justify-center w-full">
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
                  <div className="popup-img">
                    <div className="relative bg-red-500">
                      <Image
                        className="custom-img"
                        alt={`portfolio photo: ${image.name}`}
                        src={`https://storage.googleapis.com/68construction-photos/${image.name}`}
                        layout="fill"
                        sizes="100vw"
                      />
                    </div>
                  </div>
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
      </Modal.Body>
    </Modal>
  );
}
