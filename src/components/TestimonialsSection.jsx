import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Icon } from "@iconify/react";

const defaultTestimonials = [
  {
    id: 1,
    text: "Their commitment to excellence is unmatched. The entire process was smooth, and their communication made everything feel effortless. We saw immediate improvements in our digital presence.",
    name: "Michael Carter",
    Company: "Marketing Director",
    rating: 4.8,
  },
  {
    id: 2,
    text: "The team exceeded our expectations. They understood our vision perfectly and delivered results that elevated our brand. I appreciate their creativity and attention to detail.",
    name: "Sophia Nguyen",
    Company: "Brand Strategist",
    rating: 4.7,
  },
  {
    id: 3,
    text: "Professional, reliable, and highly skilled. They transformed our ideas into a polished digital experience. I would gladly work with them again in the future.",
    name: "Daniel Ruiz",
    role: "Product Manager",
    rating: 4.9,
  },
  {
    id: 4,
    text: "Outstanding service from start to finish. The team delivered on time, communicated clearly, and produced exceptional results that strengthened our online engagement.",
    name: "Aisha Roberts",
    role: "Creative Director",
    rating: 4.8,
  },
];

const TestimonialsSection = ({ testimonials = defaultTestimonials }) => {
  return (
    <section className="testimonials py-[8%] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col lg:flex-row justify-between items-start gap-10">
      <div className="testimonials-content w-full lg:w-1/2 text-white">
        <h2 className="text-3xl sm:text-6xl font-semibold sm:max-w-3xl my-5 leading-tight text-white">
          Testimonials
        </h2>

        <div className="font-normal text-xl flex items-center">
          4.5
          <span className="flex items-center ml-3 gap-1">
            <Icon icon="material-symbols:star-rounded" width="24" height="24" />
            <Icon icon="material-symbols:star-rounded" width="24" height="24" />
            <Icon icon="material-symbols:star-rounded" width="24" height="24" />
            <Icon icon="material-symbols:star-rounded" width="24" height="24" />
            <Icon icon="ic:round-star-half" width="24" height="24" />
          </span>
          <span className="ml-3 text-gray-300">rating from all clients</span>
        </div>
      </div>

      <div className="w-full lg:w-1/2 no-border no-border-white/20 pl-10">
        <Splide
          options={{
            type: "fade",
            rewind: true,
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            arrows: false,
            pagination: false,
            speed: 800,
          }}
        >
          {testimonials.map((t) => (
            <SplideSlide key={t.id}>
              <div className="text-white">
                <p className="text-white text-2xl md:text-3xl max-w-2xl leading-tight mb-6 font-medium">
                  {t.text}
                </p>

                <h3 className="text-white md:text-2xl font-normal ">
                  {t.name}
                </h3>
                <p className="text-gray-300 text-lg">{t.role}</p> 
                <p className="text-gray-300 text-lg">{t.Company}</p> 
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default TestimonialsSection;
