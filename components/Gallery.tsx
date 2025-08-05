"use client"

import Image from "next/image";
import React, { useState } from "react";
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {Fullscreen,Thumbnails, Zoom} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
  const [mainImage, setMainImage] = useState(productMedia[0]);
  const [index, setIndex] = useState<number>(-1);

  // Find the current index of mainImage
  const currentIndex = productMedia.findIndex(img => img === mainImage);

  // Handlers for arrows
const handlePrev = () => {
  if (currentIndex > 0) {
    setMainImage(productMedia[currentIndex - 1]);
  } else {
    setMainImage(productMedia[productMedia.length - 1]); // Go to last image
  }
};

const handleNext = () => {
  if (currentIndex < productMedia.length - 1) {
    setMainImage(productMedia[currentIndex + 1]);
  } else {
    setMainImage(productMedia[0]); // Go to first image
  }
};

  return (
                <div className="w-full flex flex-col gap-3 w-[1280px]">
                  <div className="flex justify-center max-w-[1280] max-h-[720px] relative">
                    <Lightbox
                      open={index >= 0}
                      close={() => setIndex(-1)}
                      slides={productMedia.map((image) => ({ src: image }))}
                      plugins={[Fullscreen, Zoom, Thumbnails]}
                      captions={{
                        showToggle: true,
                        descriptionTextAlign: 'end',
                      }}
                    />
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 text-white -translate-y-1/2 bg-opacity-00 rounded-full p-3 shadow-lg hover:bg-white hover:text-black transition-colors duration-200 z-10 flex items-center justify-center"
              aria-label="Previous image"
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.1"/>
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Image
              src={mainImage}
              width={1280}
              height={720}
              alt="product image"
              className="
                w-full
                max-w-[1280px]
                h-auto
                max-h-[70vh]
                rounded-lg
                cursor-pointer
                shadow-xl
                object-cover
                max-[431px]:w-[431px]
                max-[431px]:h-[220px]
                max-[600px]:h-[260px]
                max-[900px]:h-[320px]
              "
              onClick={() => setIndex(currentIndex)} 
            />
            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 text-white -translate-y-1/2 bg-opacity-00 rounded-full p-3 shadow-lg hover:bg-white hover:text-black transition-colors duration-200 z-10 flex items-center justify-center"
              aria-label="Next image"
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.1"/>
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center overflow-auto tailwind-scrollbar-hide">
                    {productMedia.map((image, idx) => (
                      <Image
                        key={idx}
                        src={image}
                        height={40}
                        width={40}
                        alt="product"
                        className={`cursor-pointer w-36 h-24 rounded-lg ${mainImage === image ? 'border-2 border-black' : ''}`}
                        onClick={() => setMainImage(image)}
                      />
                    ))}
                  </div>
                </div>
  );
};

export default Gallery;