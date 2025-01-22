import * as React from "react";
import Gallery from "@/components/Gallery";
import { getProductDetails } from "@/lib/actions/actions";
import Specifications from "@/components/Specifications";
import Summary from "@/components/Summary";
import Title from "@/components/Title";
import Description from "@/components/Description";
import Features from "@/components/Features";

const ProductDetails = async (props: { params: Promise<{ productId: string }>}) => {
  const params = await props.params;

  const productDetails = await getProductDetails(params.productId);

  return (
    <>


            <div className="items-center flex flex-col gap-16 py-10 px-5 md:px-10 lg:px-20 w-1290 h-725">
                <div className="flex justify-center mt-0 mb-10 gap-12 md:gap-2 text-[24px]">
                  <Title productInfo={productDetails} />
                </div>

                <div className="max-w-[1290px] w-full h-full flex flex-col gap-2 md:gap-12 lg:gap-5 ">
                      <div className="flex flex-col">
                        <Gallery productMedia={productDetails.media} />
                      </div>

                      <br />

                      <div className="flex flex-col gap-2 md:gap-12 lg:gap-5 ">
                        <Summary productInfo={productDetails} />
                      </div>

                      <div className="flex flex-col gap-2 md:gap-12 lg:gap-5 ">
                        <h2 className=" text-[35px] text-bold text-center py-2 border-b-2 border-[#E5E5E5] py-5">Specifications</h2>
                        <Specifications productInfo={productDetails} />
                      </div>

                      <div className="flex flex-col gap-2 md:gap-12 lg:gap-5 ">
                      <h2 className=" text-[35px] text-bold text-center py-2 border-b-2 border-[#E5E5E5] py-5">Features</h2>
                        <div className="justify-between">
                        <Features productInfo={productDetails} />
                        </div>
                        
                      </div>

                      <div className="text-center flex flex-col gap-2 md:gap-12 lg:gap-5 ">
                      <h2 className=" text-[35px] text-bold text-center py-2 border-b-2 border-[#E5E5E5] py-5">Description</h2>
                      <Description productInfo={productDetails} />
                    </div>
                </div>


            </div>


    </>
  );
};

export const dynamic = "force-dynamic";

export default ProductDetails;