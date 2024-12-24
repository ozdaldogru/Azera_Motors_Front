"use client";
import { FaCheck } from "react-icons/fa6";

const Description = ({ productInfo }: { productInfo: ProductType }) => {


  return (

    <div className="flex flex-col w-full items-center gap-2">

        <p>{productInfo.description}</p>

    </div>  
  );
};

export default Description;
