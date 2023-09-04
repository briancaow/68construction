import Image from "next/image";

export default function Service(props: any) {
  return (
    <div className="group shadow-lg flex flex-col items-center bg-white">
      <div className="transition overflow-hidden">
        <Image
          className="group-hover:scale-125 duration-300"
          alt={`bathrooms`}
          src={props.src}
          width={props.columnWidth}
          height={props.rowHeight}
        />
      </div>
      <div className="group-hover:scale-110 duration-300 text-3xl p-2">
        {props.service}
      </div>
    </div>
  );
}
