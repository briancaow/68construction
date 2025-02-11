import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col justify-start items-center px-4 space-y-4">

      <div className="max-w-[1000px] flex flex-col justify-center space-y-4 items-center lg:px-4">
        <h2 className="text-5xl">About Us</h2>
        <p className="lg:px-4 text-xl">
          Welcome to 68 Construction & Mechanical! Founded in 2018 by Henry Nguyen, 68 Construction & Mechanical is built on a foundation of experience, dedication, and a passion for turning construction dreams into reality.  Henry's journey began at Renton Technical College (RTC), where he honed his construction skills.  His hands-on experience includes appliance installation and HVAC work at Albert Lee, where he learned the importance of precision and detail.  He further developed his expertise working with Nuview Landscaping, a renowned general contractor in Renton, gaining invaluable knowledge in both technical skills and client satisfaction.  This experience paved the way for Henry to establish 68 Construction & Mechanical, a company committed to providing high-quality craftsmanship and exceptional customer service.  We are more than just a construction company; we are a team of dedicated professionals passionate about bringing your vision to life.
        </p>
      </div>

      <div className="max-w-[1000px] flex flex-col justify-center space-y-4 items-center lg:px-4">
        <h2 className="text-5xl">Why Choose 68 Construction & Mechanical?</h2>
        <p className="lg:px-4 text-xl">
          At 68 Construction & Mechanical, we understand that choosing the right contractor is crucial.  Our commitment to excellence, attention to detail, and dedication to customer satisfaction set us apart.  Since 2018, we have successfully completed a wide range of projects, from residential renovations to entire top-to-bottom home remodels, earning a reputation for quality and reliability.  Our work is rooted in integrity, ensuring the highest quality, maximum value for our customers, and honoring the trust they place in us to realize their dreams.  We leverage our extensive experience, from initial consultation to final walk-through, to ensure a smooth and stress-free process.  We believe in open communication and collaboration, working closely with our clients to understand their needs and exceed their expectations.
        </p>
      </div>

      <div className="max-w-[1000px] flex flex-col justify-center space-y-4 items-center lg:px-4">
        <h2 className="text-5xl">What Makes Us The Best</h2>
        <p className="lg:px-4 text-xl">
          68 Construction & Mechanical is driven by a passion for delivering exceptional results.  We believe in building strong relationships with our clients, based on trust and mutual respect.  Our team of skilled professionals is committed to providing superior craftsmanship and meticulous attention to detail in every project we undertake.  We are not just building structures; we are building lasting relationships and creating spaces that our clients will cherish for years to come.  We are proud of our work and stand behind our commitment to quality.  When you choose 68 Construction & Mechanical, you're choosing a partner dedicated to making your construction vision a reality.
        </p>
      </div>

      <div>
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
