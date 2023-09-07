import Image from "next/image";
import { Rating } from "react-simple-star-rating";

export default function Hero() {
  const getExperience = () => {
    const now = new Date();
    const start = new Date(2015, 1, 1);
    var diff = (now.getTime() - start.getTime()) / 1000;
    diff /= 60 * 60 * 24;
    return Math.floor(diff / 365.25);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
      <Image
        className="z-0 brightness-[0.40]"
        src={"/portfolio/decks/deck_3.JPG"}
        alt="deck"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="z-10 flex flex-col justify-center items-center">
        {/* <h1 className="lg:text-8xl md:text-6xl text-4xl text-red-600">
          68CONSTRUCTION
        </h1> */}
        <h2 className="lg:text-5xl text-xl whitespace-nowrap text-white">
          Your Vision, Our Expertise
        </h2>
        <div className="flex flex-col lg:text-2xl text-white items-center">
          {getExperience() + " years of building stunning projects"}
          <a className="lg:mt-5" href="/Testimonials">
            <p className="text-white">(5.0 Client Ratings)</p>
            <Rating readonly initialValue={5} />
          </a>
        </div>
        <div className="lg:mt-20 flex flex-col md:flex-row items-center">
          <a className="m-2" href="https://calendly.com/68construction/30min">
            <div className="whitespace-nowrap bg-red-800 text-white p-2 lg:text-3xl text-xl">
              Get A Free Consultation
            </div>
          </a>
          <a
            className="m-2"
            href="https://calendly.com/68construction/estimate"
          >
            <div className="whitespace-nowrap bg-red-800 text-white p-2 lg:text-3xl text-xl">
              Schedule An Estimate
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
