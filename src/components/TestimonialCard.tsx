import { Rating } from "react-simple-star-rating";

export default function TestimonialCard(props: any) {
  return (
    <div className="flex flex-col items-center bg-slate-200 rounded-xl p-4">
      <div className="text-2xl">{props.name}</div>
      <div>{props.date}</div>
      <Rating readonly initialValue={props.rating} />
      <div className="text-lg mt-4">{props.testimonial}</div>
    </div>
  );
}
