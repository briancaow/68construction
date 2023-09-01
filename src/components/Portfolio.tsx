import Image from "next/image";
export default function Portfolio() {
  const size = 600;
  return (
    <div className="flex flex-col items-center px-8 py-4 bg-slate-300 max-w-[1300px]">
      <h2>Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Image
          alt="Deck Picture 1"
          src={"/deck_1.jpeg"}
          width={size}
          height={size}
        />
        <Image
          alt="Deck Picture 1"
          src={"/deck_1.jpeg"}
          width={size}
          height={size}
        />
        <Image
          alt="Deck Picture 1"
          src={"/deck_1.jpeg"}
          width={size}
          height={size}
        />
        <Image
          alt="Deck Picture 1"
          src={"/deck_1.jpeg"}
          width={size}
          height={size}
        />
        <Image
          alt="Deck Picture 1"
          src={"/deck_1.jpeg"}
          width={size}
          height={size}
        />
      </div>
    </div>
  );
}
