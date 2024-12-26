import * as React from "react";
import Gallery from "@/components/Gallery";
import { getProductDetails } from "@/lib/actions/actions";
import Specifications from "@/components/Specifications";
import Title from "@/components/Title";
import Description from "@/components/Description";
import Features from "@/components/Features";

const ProductDetails = async (props: { params: Promise<{ productId: string }>}) => {
  const params = await props.params;

  const productDetails = await getProductDetails(params.productId);

  return (
    <>

    <div >
            <div className="justify-items-center gap-16 py-10 px-5 md:px-10 lg:px-20">
                <div className="flex justify-center w-full mt-0 mb-10 gap-12 md:gap-2 text-[24px]">
                  <Title productInfo={productDetails} />
                </div>

                <div className="flex flex-wrap gap-16 px-15 lg:gap-24">
                      <div className="flex flex-col rounded-lg">
                        <Gallery productMedia={productDetails.media} />
                      </div>

                      <div className="flex flex-col px-5 gap-2 md:gap-12 lg:gap-5 border border-black-200 rounded-lg">
                        <h2 className="text-[20px] text-bold underline underline-offset-4 py-2">Specifications:</h2>
                        <Specifications productInfo={productDetails} />
                      </div>

                      <div className="flex flex-col px-5 gap-2 md:gap-12 lg:gap-5 border border-black-200 rounded-lg ">
                        <h2 className="text-[20px] text-bold underline underline-offset-4 py-2">Features:</h2>
                        <Features productInfo={productDetails} />
                      </div>

                      <div className="flex flex-col px-5 gap-2 md:gap-12 lg:gap-5 border border-black-200 rounded-lg">
                      <h2 className="text-bold underline underline-offset-4 text-[24px] py-2">Description:</h2>
                      <Description productInfo={productDetails} />
                    </div>
                </div>


            </div>
    </div>

    </>
  );
};

export const dynamic = "force-dynamic";

export default ProductDetails;