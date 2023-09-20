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
      <Modal.Header>
        <h1 className="w-full text-center">Portfolio</h1>
      </Modal.Header>
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
                  <div className="flex items-center justify-center w-[1100px] h-[1000px] bg-black">
                    <div className="relative">
                      <Image
                        className="custom-img"
                        alt={`portfolio photo: ${image.name}`}
                        src={`https://storage.googleapis.com/68construction-photos/${image.name}`}
                        layout="fill"
                        sizes="80vw"
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
