"use client";

import { useEffect, useState } from "react";
import { images } from "./SliderConstants";
import SliderDescription from "./SliderDescription";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage(activeImage === images.length - 1 ? 0 : activeImage + 1);
  };

  const clickPrev = () => {
    setActiveImage(activeImage === 0 ? images.length - 1 : activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 6000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <main className="w-full flex flex-col">
      <div
        className="
          w-full
          h-[500px]
          max-[900px]:h-[350px]
          max-[600px]:h-[260px]
          max-[431px]:h-[200px]
          bg-center bg-cover
          flex items-center justify-center flex-col
          relative
        "
        style={{
          backgroundImage: `url(${images[activeImage].src})`
        }}
      >
        {/* Arrow Buttons */}
        <button
          onClick={clickPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black text-white bg-opacity-80 rounded-full p-2 shadow-lg hover:bg-white hover:text-black transition-colors duration-200 z-10 flex items-center justify-center"
          aria-label="Previous image"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.1"/>
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={clickNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black text-white bg-opacity-80 rounded-full p-2 shadow-lg hover:bg-white hover:text-black transition-colors duration-200 z-10 flex items-center justify-center"
          aria-label="Next image"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.1"/>
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <SliderDescription
          activeImage={activeImage}
          clickNext={clickNext}
          clickPrev={clickPrev}
        />
      </div>
    </main>
  );
};

export default Slider;