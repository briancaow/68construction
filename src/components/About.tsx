import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col justify-start items-center px-4 space-y-4">
      <h2 className="text-5xl">About Us</h2>
      <div className="max-w-[1000px] flex flex-col justify-center space-y-4 items-center lg:px-4">
        <p className="lg:px-4 text-xl">
          Welcome to 68Construction! I&apos;m thrilled to share my journey and
          introduce myself as the founder of this company. My name is Hung
          Nguyen, and at 28 years old, I embarked on a path that led me to where
          I am today. <br />
          <br />
          My journey in the construction industry began after graduating from
          Renton Technical College (RTC), where I honed my skills and developed
          a strong foundation in various aspects of construction. Armed with the
          knowledge I gained from RTC, I was eager to dive into the world of
          hands-on work. <br />
          <br />
          My first professional experience brought me to Albert Lee, a
          well-respected name in the appliance industry. Here, I had the
          privilege of installing appliances and working on HVAC systems. It was
          during this time that I truly grasped the importance of attention to
          detail and precision in every project. These skills would prove to be
          invaluable as I continued to grow in my career.
          <br />
          <br />
          After gaining valuable experience at Albert Lee, I decided to take my
          construction journey to the next level. I joined forces with a
          renowned general contractor in the Renton area, Nuview Landscaping,
          who became my mentor and guide in the world of construction. Under
          their tutelage, I learned not only the technical aspects of the trade
          but also the importance of professionalism and client satisfaction.
          <br />
          <br />
          Two years of working closely with Nuview Landscaping prepared me for
          my next big step. It was at that point that I decided to establish
          68Construction. With a burning passion for construction and a dream to
          create something of my own, I took the leap of faith.
          <br />
          <br />
          Fast forward to today, and 68Construction has been in business for six
          successful years. During this time, we have had the privilege of
          working on a wide range of projects, from residential renovations to
          commercial builds. Our commitment to excellence, attention to detail,
          and dedication to customer satisfaction have been the cornerstones of
          our success.
          <br />
          <br />
          As the founder of 68Construction, I am incredibly proud of how far we
          have come. We are more than just a construction company; we are a team
          of dedicated professionals who are passionate about turning your
          construction dreams into reality. Every project we undertake is a
          testament to our unwavering commitment to quality and craftsmanship.
          <br />
          <br />I am excited about the future of 68Construction and the
          opportunity to continue serving our community with the highest level
          of construction expertise. Thank you for considering us for your next
          project, and I look forward to working with you to bring your vision
          to life.
          <br />
          <br />
          Sincerely,
          <br />
          <br />
          Hung Nguyen <br />
          Founder, 68Construction
        </p>
        <Image
          src={"/HenryAboutMePhoto.JPG"}
          width={300}
          height={600}
          style={{ width: "auto", height: "auto" }}
          alt="Photo of Henry"
        />
      </div>
    </div>
  );
}
