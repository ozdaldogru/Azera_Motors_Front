import * as React from "react";
import Gallery from "@/components/Gallery";
import { getProductDetails } from "@/lib/actions/actions";
import Specifications from "@/components/Specifications";
import Summary from "@/components/Summary";
import Title from "@/components/Title";
import Description from "@/components/Description";
import Features from "@/components/Features";
import CustomCookieConsent from "@/components/CustomCookieConsent";

const ProductDetails = async (props: { params: Promise<{ productId: string }>}) => {
  const params = await props.params;
  const productDetails = await getProductDetails(params.productId);

  return (
    <div className="flex flex-wrap items-center flex flex-col gap-5 py-5 px-5">
      <div className="flex justify-center md:gap-2 text-[24px] max-[431px]:text-[20px]">
        <Title productInfo={productDetails} />
      </div>
      <div className="max-w-[1290px] w-full h-full flex flex-col gap-2">
        <Gallery productMedia={productDetails.media} />
        <br />
        <div className="flex flex-col gap-2">
          <Summary productInfo={productDetails} />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-[35px] max-[431px]:text-[20px] text-bold text-center py-2 border-b-2 border-[#E5E5E5] py-5">Specifications</h2>
          <Specifications productInfo={productDetails} />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-[35px] max-[431px]:text-[20px] text-bold text-center py-2 border-b-2 border-[#E5E5E5] py-5">Features</h2>
          <div className="justify-between">
            <Features productInfo={productDetails} />
          </div>
        </div>
        <div className="text-center flex flex-col gap-2">
          <h2 className="text-[35px] max-[431px]:text-[20px] text-bold text-center py-2 border-b-2 border-[#E5E5E5] py-5">Description</h2>
          <Description productInfo={productDetails} />
        </div>
      </div>
      <CustomCookieConsent />

    </div>
  );
};

export const dynamic = "force-dynamic";
export default ProductDetails;