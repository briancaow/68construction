import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen bg-purple-600">
      <Image
        src={
          "https://lh3.googleusercontent.com/pw/AIL4fc9FAi95gInjD54RxJBTFPyEtcyRlatmPyVyhp-c1R9_cEigQgNSqqW2lORTFObccw7SVZaGgEkqIhC2VbH51fXr0kU9HMsmLt4tlmu3IftyUarPeNba=w2400"
        }
        alt="deck"
        fill
        objectFit="cover"
      />
    </div>
  );
}
