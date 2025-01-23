"use client";
import { FaCheck } from "react-icons/fa6";

const Features = ({ productInfo }: { productInfo: ProductType }) => {


  return (

      

            <div >     
                {productInfo.features.length > 0 && (
                    <div className="text-[20px] justify-between py-2 gap-2 grid grid-cols-3 max-[960px]:grid-cols-2 max-[720px]:grid-cols-1">
                      {productInfo.features.map((feature, index) => (
                        <div className="flex gap-2 items-center" key={index}>
                          <FaCheck className="text-25 p-1 rounded-full bg-transparent-300 text-green-500" />
                          <h2 className="text-[#8F95A0]">{feature.title}</h2>
                        </div>
                      ))}
                    </div>

                )}
            </div>
       
  );
};

export default Features;
