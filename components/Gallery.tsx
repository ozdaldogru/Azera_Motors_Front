"use client"

import Image from "next/image";
import React, { useState } from "react";

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
  const [mainImage, setMainImage] = useState(productMedia[0]);

  return (
    <div className="flex-col gap-32 py-10 px-5 " >
      <Image
        src={mainImage}
        width={900}
        height={720}
        alt="product image"
        className="w-900 h-[720px] object-cover rounded-xl"
      />
      <div className="flex gap-32 py-10 px-5 overflow-auto ">
        {productMedia.map((image, index) => (
          <Image
            key={index}
            src={image}
            height={40}
            width={40}
            alt="product"
            className={`w-40 h-40 rounded-lg object-cover cursor-pointer ${mainImage === image ? "border-2 border-black" : ""}`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
