import Image from "next/image";

const Specifications = ({ productInfo }: { productInfo: ProductType }) => {


    return (

        <div className="flex flex-col "> 


        
       <div className="text-[50px] flex flex-row justify-between items-center gap-2 max-[564px]:flex-col">
            <div className="flex flex-row items-center gap-2">
            <p className="text-[#424A5]">{productInfo.make}</p>
            </div>

            <div className="flex flex-row items-center gap-2">
            <p className="text-[#6A7281]">${productInfo.price.toLocaleString()}</p>
            </div>
        </div>

        <div className="text-[20px] flex flex-row gap-2 items-center gap-2 max-[564px]:justify-center">
           
            <p className="text-[#8F95A0]">{productInfo.categories}</p>
           
            
            <p className="text-[#8F95A0]">•</p>
           
            
            <p className="text-[#8F95A0]">{productInfo.year}</p>
            
        </div>

        <div className="flex flex-row justify-between text-center gap-2 w-full py-2 max-[564px]:items-center max-[564px]:flex-col">

                {productInfo.history === "" ? ("") : (  
               <Image src="/carfax.svg" alt="carfax car history logo" width={115} height={50} style={{ height: "auto" }}/>
                
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

    export default Specifications;