import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[90vh] bg-purple-600 flex flex-col justify-center items-center">
      <Image
        className="z-0 brightness-50"
        src={
          "https://lh3.googleusercontent.com/pw/AIL4fc9FAi95gInjD54RxJBTFPyEtcyRlatmPyVyhp-c1R9_cEigQgNSqqW2lORTFObccw7SVZaGgEkqIhC2VbH51fXr0kU9HMsmLt4tlmu3IftyUarPeNba=w2400"
        }
        alt="deck"
        fill
        objectFit="cover"
      />
      <h2 className="flex flex-row justify-start items-center z-10 text-5xl whitespace-nowrap text-white">
        Your Vision, Our Expertise
      </h2>
    </div>
  );
}
