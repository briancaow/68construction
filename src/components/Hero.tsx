import Image from "next/image";
import { Rating } from "react-simple-star-rating";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
      <Image
        className="z-0 brightness-50"
        src={
          "https://lh3.googleusercontent.com/pw/AIL4fc9FAi95gInjD54RxJBTFPyEtcyRlatmPyVyhp-c1R9_cEigQgNSqqW2lORTFObccw7SVZaGgEkqIhC2VbH51fXr0kU9HMsmLt4tlmu3IftyUarPeNba=w2400"
        }
        alt="deck"
        fill
        objectFit="cover"
      />
      <div className="z-10 flex flex-col justify-center items-center">
        <h2 className="lg:text-5xl text-xl whitespace-nowrap text-white">
          Your Vision, Our Expertise
        </h2>
        <div className="flex flex-col">
          <a href="https://www.facebook.com/68constructionllc/reviews">
            <p className="text-white">(5.0 Client Ratings)</p>
            <Rating readonly initialValue={5} />
          </a>
        </div>
        <div className="lg:mt-20 flex flex-col lg:flex-row items-center">
          <a className="m-2" href="https://calendly.com/68construction/30min">
            <div className="whitespace-nowrap bg-red-950 text-white p-2 lg:text-3xl text-xl">
              Get Free Consultation
            </div>
          </a>
          <a
            className="m-2"
            href="https://calendly.com/68construction/estimate"
          >
            <div className="whitespace-nowrap bg-red-950 text-white p-2 lg:text-3xl text-xl">
              Schedule Estimate
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
