"use client";
import { FaCheck } from "react-icons/fa6";

const Features = ({ productInfo }: { productInfo: ProductType }) => {


  return (

<div>

        <div className="flex flex-col gap-2 grid grid-cols-2 ">

        <div className="flex flex-col gap-2">     
            {productInfo.features.length > 0 && (
                <div className="flex flex-col gap-8 md:grid-cols-3 ">
                  {productInfo.features.map((feature, index) => (
                    <div className="flex gap-2 items-center" key={index}>
                      <FaCheck className="text-lg p-1 rounded-full bg-blue-100 text-primary" />
                      <h2>{feature.title}</h2>
                    </div>
                  ))}
                </div>

            )}
        </div>

        </div>



</div>  
  );
};

export default Features;
