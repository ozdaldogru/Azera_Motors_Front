"use client"

import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ProductLightbox = dynamic(
  async () => {
    const [{ default: Lightbox }, { Fullscreen, Thumbnails, Zoom }] = await Promise.all([
      import("yet-another-react-lightbox"),
      import("yet-another-react-lightbox/plugins"),
    ]);

    return function DynamicLightbox({
      open,
      close,
      slides,
      index,
      fullscreen,
    }: {
      open: boolean;
      close: () => void;
      slides: { src: string }[];
      index?: number;
      fullscreen?: {
        auto?: boolean;
      };
    }) {
      return (
        <Lightbox
          open={open}
          close={close}
          slides={slides}
          index={index}
          plugins={[Fullscreen, Zoom, Thumbnails]}
          fullscreen={fullscreen}
          render={{
            buttonZoom: () => null,
          }}
        />
      );
    };
  },
  { ssr: false }
);

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    setSelectedIndex(0);
    setIsLightboxOpen(false);
  }, [productMedia]);

  const hasMedia = productMedia.length > 0;
  const mainImage = productMedia[selectedIndex] ?? "";
  const slides = productMedia.map((image) => ({ src: image }));

  // Handlers for arrows
  const handlePrev = () => {
    if (!hasMedia) {
      return;
    }

    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else {
      setSelectedIndex(productMedia.length - 1);
    }
  };

  const handleNext = () => {
    if (!hasMedia) {
      return;
    }

    if (selectedIndex < productMedia.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else {
      setSelectedIndex(0);
    }
  };

  return (
                <div className="w-full flex flex-col gap-3 w-[1280px]">
                  <div className="flex justify-center max-w-[1280px] max-h-[720px] relative">
                    {hasMedia ? (
                      <ProductLightbox
                        open={isLightboxOpen}
                        close={() => setIsLightboxOpen(false)}
                        slides={slides}
                        fullscreen={{ auto: true }}
                        index={selectedIndex}
                      />
                    ) : null}
                    {!hasMedia ? (
                      <div className="flex h-[320px] w-full items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500">
                        No product images available
                      </div>
                    ) : null}
                    {hasMedia ? (
                      <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 text-white -translate-y-1/2 bg-transparent rounded-full p-3 shadow-lg hover:bg-white hover:text-black transition-colors duration-200 z-10 flex items-center justify-center"
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
                onClick={() => setIsLightboxOpen(true)}
            />
            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 text-white -translate-y-1/2 bg-transparent rounded-full p-3 shadow-lg hover:bg-white hover:text-black transition-colors duration-200 z-10 flex items-center justify-center"
              aria-label="Next image"
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.1"/>
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
                      </>
                    ) : null}
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
                        onClick={() => setSelectedIndex(idx)}
                      />
                    ))}
                  </div>
                </div>
  );
};

export default Gallery;