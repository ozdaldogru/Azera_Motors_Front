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
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 5, ease: "easeIn", delay: 0, repeat: Infinity, repeatDelay: 1}}
          >
            <p className="text-white font-bold text-[60px] text-center max-[431px]:text-[18px] max-[431px]:font-bold">{elem.title}</p>

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
