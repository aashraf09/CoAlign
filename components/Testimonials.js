import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import testimonialsData from "@/data/TestimonialsData";

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-3 md:gap-5 w-[90%] md:w-[80%] pb-10">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Testimonials
      </h2>
      <p className="text-sm md:text-lg text-center">
        People love what we do and we want to let you know
      </p>
      <div className="flex flex-row text-center items-center justify-between gap-7 overflow-x-scroll w-full py-5 md:py-10">
        {testimonialsData.map((testimonial, index) => {
          return (
            <div
              key={index}
              className="basis-[33%] flex flex-col items-center justify-between gap-4 bg-white px-4 py-6 rounded-lg hover:scale-105 min-h-[300px] min-w-[300px]"
            >
              <h3 className="font-semibold text-xl text-center md:text-2xl">
                &quot; {testimonial.feedback} &quot;
              </h3>
              <div className="flex flex-row items-center justify-between gap-3">
                {Array.from({ length: testimonial.stars }, (_, i) => {
                  return (
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#3164f5" }}
                      key={i}
                    />
                  );
                })}
              </div>
              <h3 className="font-semibold text-xl md:text-2xl">
                &quot; {testimonial.name} &quot;
              </h3>
              <p className="text-sm md:text-lg">{testimonial.designation}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
