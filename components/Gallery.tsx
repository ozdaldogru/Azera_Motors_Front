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
    <div className="w-full flex flex-col gap-3 w-[1280px]">
      <div className="flex justify-center max-w-[1280] max-h-[720px] ">

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
      <Image
        src={mainImage}
        width={1280}
        height={720}
        alt="product image"
        className="flex flex-wrap flex-col w-[1280px] h-[720px] rounded-lg cursor-pointer shadow-xl object-cover max-[431px]:w-[431px] max-[431px]:h-[300px]"
        onClick={() => setIndex(0)} 
      />
      </div>

    <div className="flex flex-wrap gap-2 justify-center overflow-auto tailwind-scrollbar-hide">

    {productMedia.map((image, index) => (
          <Image
            key={index}
            src={image}
            height={40}
            width={40}
            alt="product"
            className="cursor-pointer w-36 h-24 rounded-md"
            onClick={() => setMainImage(image)}
          />
        ))}

      </div>
    </div>
  );
};

export default Gallery;
