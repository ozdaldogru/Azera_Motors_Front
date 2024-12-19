"use client";
import { FaCheck } from "react-icons/fa6";

const Description = ({ productInfo }: { productInfo: ProductType }) => {


  return (

    <div>

        <p>{productInfo.description}</p>

    </div>  
  );
};

export default Description;
