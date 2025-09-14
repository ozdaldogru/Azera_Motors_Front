"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    id: 1,
    src: "/banner.webp",
    title: "Family-owned dealership excellence",
  },
  {
    id: 2,
    src: "/banner2.webp",
    title: "Quality cars at unbeatable prices",
  },
  {
    id: 3,
    src: "/banner3.webp",
    title: "Experience hassle-free car buying",
  },
  {
    id: 4,
    src: "/banner4.webp",
    title: "We value your satisfaction always",
  },
];

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
      <div className="w-full h-[500px] max-[900px]:h-[350px] max-[600px]:h-[260px] max-[431px]:h-[200px] flex items-center justify-center flex-col relative overflow-hidden">
        <Image
          src={images[activeImage].src}
          alt={images[activeImage].title}
          fill
          priority={activeImage === 0}
          style={{ objectFit: "cover", zIndex: 0 }}
          sizes="100vw"
        />
        {/* Arrow Buttons */}
        <button
          onClick={clickPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 text-white bg-opacity-80 rounded-full p-2 shadow-lg hover:bg-white hover:text-black transition-colors duration-200 z-10 flex items-center justify-center"
          aria-label="Previous image"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.1" />
            <path
              d="M15 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={clickNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 text-white bg-opacity-80 rounded-full p-2 shadow-lg hover:bg-white hover:text-black transition-colors duration-200 z-10 flex items-center justify-center"
          aria-label="Next image"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.1" />
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* Animated Description */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 w-full">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <p className="text-white font-bold text-[60px] text-center max-[450px]:text-[18px] max-[450px]:font-bold">
              {images[activeImage].title}
            </p>
          </motion.div>
          <div className="flex gap-2 mt-3">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() =>
                  idx < activeImage
                    ? clickPrev()
                    : idx > activeImage
                    ? clickNext()
                    : undefined
                }
                className={`w-3 h-3 rounded-full ${
                  activeImage === idx ? "bg-white" : "bg-gray-400"
                } border border-white`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Slider;