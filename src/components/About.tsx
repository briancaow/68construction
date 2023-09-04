import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col justify-start space-y-4 items-center py-20 px-4">
      <h2 className="text-red-700">About Us</h2>
      <div className="max-w-[1200px] flex flex-col lg:flex-row justify-start space-y-4 items-center lg:items-start px-4">
        <Image
          src={"/HenryAboutMePhoto.JPG"}
          height={600}
          width={300}
          alt="Photo of Henry"
        />
        <p className="px-4">
          Welcome to 68Construction, where craftsmanship, trust, and excellence
          are not just words, but the very foundation of our work. I&apos;m
          Henry, and I founded this company in Renton with a passion for
          building and a commitment to delivering exceptional construction
          services. At 68Construction, we blend the traditional values of hard
          work and precision with modern construction techniques to bring you
          the best of both worlds. We firmly believe that trust is the
          cornerstone of any successful project. When you choose us, you&apos;re
          not just hiring a construction company; you&apos;re welcoming a
          partner who values your dreams and investments as much as you do. We
          are committed to open communication, transparency, and delivering on
          our promises, every step of the way.
        </p>
      </div>
    </div>
  );
}
