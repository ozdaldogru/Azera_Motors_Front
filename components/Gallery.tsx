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
  return (
    <div className="flex flex-col gap-3 ">
      <div className="flex justify-center w-auto">
      <Image
        src={mainImage}
        width={1000}
        height={720}
        alt="product image"
        className="w-900 h-720 rounded-lg shadow-xl object-cover"
      />
      </div>

    <div className="flex flex-wrap gap-2 overflow-auto tailwind-scrollbar-hide">
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
      {productMedia.map((image, idx) => (
        <img
          key={idx}
          src={image}
          alt={`Product image ${idx + 1}`}
          onClick={() => setIndex(idx)} 
          className="cursor-pointer w-36 h-24 rounded-md"
        />
      ))}
      </div>
    </div>
  );
};

export default Gallery;
