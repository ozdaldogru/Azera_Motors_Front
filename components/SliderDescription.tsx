import React from "react";
import { images } from "./SliderConstants";
import left from "../public/left.svg";
import right from "../public/right.svg";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const SliderDescription = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className="place-items-start w-full relative md:rounded-tr-3xl md:rounded-br-3xl">
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <p className="text-white text-[50px] text-center">{elem.title}</p>
            <p className="text-white text-[50px] text-center py8">{elem.title2}</p>
          </motion.div>


          <div className="">
            <div
              className="absolute bottom-0 left-0 items-center cursor-pointer px-4"
              onClick={clickPrev}
            >
              <Image src={left} alt="" />
            </div>

            <div
              className="absolute bottom-0 right-0 items-center cursor-pointer px-4"
              onClick={clickNext}
            >
              <Image src={right} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderDescription;
