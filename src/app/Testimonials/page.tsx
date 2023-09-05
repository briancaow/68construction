"use client";
import { SizeMe } from "react-sizeme";
import TestimonialCard from "@/components/TestimonialCard";
import { useEffect, useRef } from "react";
import StackGrid, { Grid } from "react-stack-grid";

export default function TestimonialPage() {
  const testimonials = [
    {
      name: "Toan Nguyen",
      date: "August 8, 2023",
      rating: 5,
      testimonial:
        "I was looking for someone to fix the deck and railing that was not done properly by the previous contractor and found Hung (Henry) through Home Depot Home service. Henry came to check out the project. He told me the best way was to tear down the current deck and rebuild a new one since the current one would not last. He understood that I want to save money and agreed to reuse materials as much as possible. Henry was able to fit me in earlier than previously discussed and he got everything done less than a week which I really appreciated. He knew I was really stressed out from the bad experience with the previous contractor so he made sure I was updated regularly. I am very happy with the results. NO more wavy deck and rattling railings. And The new bench is beautiful. Definitely recommend Henry and will use him again for future projects.",
    },
    {
      name: "Lisa Fox",
      date: "February 14, 2022",
      rating: 5,
      testimonial:
        "I appreciate Henry’s communication. He and his team did a beautiful job building my new deck. My family will enjoy it for years to come.Competitive pricing along with excellent work- I would highly recommend 68Constructionllc.",
    },
    {
      name: "David Fruchter",
      date: "Augest 26, 2021",
      rating: 5,
      testimonial:
        "Henry installed an induction cooktop for us on 08/26. He was incredibly helpful and profession and charged a fair price. He knows his craft and I would definitely hire him again.",
    },
    {
      name: "Andreas Laursen",
      date: "February 12, 2020",
      rating: 5,
      testimonial:
        "I highly recommend Henry & his team who are experts in their field.  Their speed and quality of work was impressive to behold, and Henry's a great guy that's very personable and pleasant to work with.  5/5 stars!",
    },
    {
      name: "Wenling Liao",
      date: "August 19, 2019",
      rating: 5,
      testimonial:
        "I was looking for someone to fix the deck and railing that was not done properly by the previous contractor and found Hung (Henry) through Home Depot Home service. Henry came to check out the project. He told me the best way was to tear down the current deck and rebuild a new one since the current one would not last. He understood that I want to save money and agreed to reuse materials as much as possible. Henry was able to fit me in earlier than previously discussed and he got everything done less than a week which I really appreciated. He knew I was really stressed out from the bad experience with the previous contractor so he made sure I was updated regularly. I am very happy with the results. NO more wavy deck and rattling railings. And The new bench is beautiful. Definitely recommend Henry and will use him again for future projects.",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      gridRef.current?.updateLayout();
    }, 1000);
    setTimeout(() => {
      gridRef.current?.updateLayout();
    }, 5000);
  }, []);
  const gridRef = useRef<Grid>();

  return (
    <SizeMe>
      {({ size }) => (
        <div className="mt-20 w-full justify-start items-center mb-10">
          <StackGrid
            gridRef={(grid) => (gridRef.current = grid)}
            monitorImagesLoaded={true}
            columnWidth={
              size.width == null
                ? 300
                : size.width < 640
                ? 300
                : size.width < 1024
                ? 350
                : 600
            }
            gutterHeight={20}
            gutterWidth={20}
          >
            {testimonials.map((value, i) => (
              <TestimonialCard
                key={i}
                name={value.name}
                date={value.date}
                rating={value.rating}
                testimonial={value.testimonial}
              />
            ))}
          </StackGrid>
        </div>
      )}
    </SizeMe>
  );
}
