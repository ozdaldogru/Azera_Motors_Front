import Image from "next/image";

const Summary = ({ productInfo }: { productInfo: ProductType }) => {

  return (
    <div className="flex flex-col border-t min-h-[250px]">
      <div className=" flex flex-row justify-between items-center gap-2 max-[975px]:flex-col max-[975px]:justify-center ">
        <div className="flex flex-row items-center text-[50px] max-[975px]:flex-col max-[450px]:text-[45px] max-[410px]:text-[40px] max-[369px]:text-[35px]">
          <p className="text-[#424A5]">{productInfo.make}</p>
          <p className="text-[#424A5]"> {productInfo.model}</p>
        </div>

        <div className="flex flex-row items-center gap-2 text-[45px] max-[450px]:text-[35px] max-[369px]:text-[32px] max-[431px]:flex-col text-[#6A7281]">
          <p>${productInfo.price.toLocaleString()} </p>{" "}
          <span className="text-[20px] max-[431px]:text-[15px]">+ HST & Licensing</span>
        </div>
      </div>

      <div className="text-[20px] flex flex-row gap-4 items-center py-4 max-[975px]:flex-col max-[564px]:justify-center max-[431px]:text-[15px]">
        <p className="text-[#8F95A0]">{productInfo.year}</p>
      </div>

        <div className="text-[20px] flex flex-row gap-4 items-center gap-4 max-[975px]:flex-col max-[564px]:justify-center max-[431px]:text-[15px]">

                {productInfo.history === "" ? ("") : (  
                    <a href={productInfo.history}><Image src="/carfax.webp" alt="carfax car history logo" width={115} height={50} style={{ height: "auto" }}/></a>


                )}
                {productInfo.lowmileage === "Yes" || productInfo.lowmileage === "yes" ? (
                <button className="bg-[#8F95A0]  w-[115px] text-white py-2 px-4 border rounded">Low KM</button>
                ) : ("")}

                {productInfo.numberofowner === 1 || productInfo.numberofowner < 2 ? (
                <button className="bg-[#8F95A0] w-[115px] text-white py-2 px-4 border  rounded">{productInfo.numberofowner} Owner</button>
                ) : ("")}

        </div>
    </div>
  );
};

export default Summary;