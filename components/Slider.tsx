"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "./SliderConstants";
import SliderDescription from "./SliderDescription";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 6000);
    return () => {
      clearTimeout(timer);
    };
  }, );
  return (
    <main className="w-full lg:h-screen flex flex-col">
      <div
        className={`w-full h-[700px] bg-center bg-cover flex items-center justify-center flex-col lg:py-5 py-5`}
        style={{ 
          backgroundImage: `url(${images[activeImage].src})`
        }}

      >
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
