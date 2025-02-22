import Image from "next/image";

const Summary = ({ productInfo }: { productInfo: ProductType }) => {


    return (

        <div className="flex flex-col border-t"> 


        
       <div className="text-[50px] max-[431px]:text-[30px] flex flex-row justify-between items-center gap-2 max-[564px]:flex-col">
            <div className="flex flex-row items-center gap-2">
            <p className="text-[#424A5]">{productInfo.make}</p>
            </div>

            <div className="flex flex-row items-center gap-2 max-[431px]:text-[25px] max-[431px]:flex-col text-[#6A7281]">
            <p >${productInfo.price.toLocaleString()} </p> <span className="text-[20px] max-[431px]:text-[15px]">+ HST & Licensing</span>
            </div>
        </div>

        <div className="text-[20px] flex flex-row gap-2 items-center gap-2 max-[564px]:justify-center max-[431px]:text-[15px]">
   
            
            <p className="text-[#8F95A0]">{productInfo.year}</p>
            
        </div>

        <div className="flex flex-row justify-between text-center gap-2 w-full py-2 max-[564px]:items-center max-[564px]:flex-col">

                {productInfo.history === "" ? ("") : (  
                    <a href={productInfo.history}><Image src="/carfax.svg" alt="carfax car history logo" width={115} height={50} style={{ height: "auto" }}/></a>
               
                
                )}
                {productInfo.lowmileage === "Yes" || productInfo.lowmileage === "yes" ? (
                <button className="bg-[#8F95A0]  w-[115px] text-white py-2 px-4 border rounded">Low KM</button>
                ) : ("")}

                {productInfo.numberofowner === 1 || productInfo.numberofowner < 2 ? (
                <button className="bg-[#8F95A0] w-[115px] text-white py-2 px-4 border  rounded">{productInfo.numberofowner} Owner</button>
                ) : ("")}

        </div>

        
        
        </div>
    )}

    export default Summary;