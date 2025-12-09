import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const items = [
  "- Innovation in Digital Solutions",
  "- Shaping the Future of Technology",
  "- Empowering Businesses",
  "- Creativity, Technology & Innovation",
  "- Building Next-Gen Experiences",
];

const MarqueeSlider = () => {
  return (
    <div className='py-[2%] flex justify-center items-center'>
          <div className='w-full overflow-hidden border-t border-white border-b flex justify-center items-center h-full'>
    <Splide
      options={{
        type: "loop",
        drag: "free",
        autoWidth: true,
        arrows: false,
        pagination: false,
        gap: "3rem",
        speed: 300000, // speed of the loop
        autoplay: true, // enable autoplay
        interval: 0,     // 0 for continuous motion
        pauseOnHover: false,
      }}
    >
      {items.map((text, index) => (
        <SplideSlide key={index}>
          <div
            className="text-[6vw] md:text-[4vw] font-bold uppercase whitespace-nowrap"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px #fff",
            }}
          >
            {text}
          </div>
        </SplideSlide>
      ))}
    </Splide>
    </div>
    </div>
  );
};

export default MarqueeSlider;
