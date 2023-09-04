import Image from "next/image";

export default function Service(props: any) {
  return (
    <div className="flex flex-col items-center">
      <div className="transition overflow-hidden">
        <Image
          className="hover:scale-125 duration-300"
          alt={`bathrooms`}
          src={props.src}
          width={props.columnWidth}
          height={props.rowHeight}
        />
      </div>
      <div className="text-xl">{props.service}</div>
    </div>
  );
}
