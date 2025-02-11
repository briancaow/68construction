import Image from "next/image";

export default function Service(props: any) {
  return (
    <div className="group shadow-lg flex flex-col items-center justify-start bg-white h-[400px]">
      <div className="overflow-hidden w-[95%] h-[70%] m-3"> {/* Adjust width & height as needed */}
        <Image
          className="group-hover:scale-110 duration-300 w-full h-full object-cover"
          alt="bathrooms"
          src={props.src}
          width={400} // Fixed width
          height={300} // Fixed height
        />
      </div>
      <div className="flex items-center justify-center h-[10%] w-full group-hover:scale-110 duration-300 text-2xl text-center">
        {props.service}
      </div>
    </div>
  );
}
