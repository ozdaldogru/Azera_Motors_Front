"use client";
import HTMLReactParser from "html-react-parser";


const Description = ({ productInfo }: { productInfo: ProductType }) => {


  return (

    <div className="flex flex-col w-full items-center gap-2 grid grid-cols-2">

      <div>{HTMLReactParser(productInfo.description)}</div>
      
    </div>  
  );
};

export default Description;
