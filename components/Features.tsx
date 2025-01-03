"use client";
import { FaCheck } from "react-icons/fa6";

const Features = ({ productInfo }: { productInfo: ProductType }) => {


  return (

        <div className="flex flex-wrap w-full items-center gap-2 ">

            <div className="flex flex-wrap gap-2 py-2 ">     
                {productInfo.features.length > 0 && (
                    <div className="flex flex-wrap gap-8 grid grid-cols-2 sm:grid grid-cols-2 ">
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
  );
};

export default Features;
