import Image from "next/image";

const Specifications = ({ productInfo }: { productInfo: ProductType }) => {


    return (

        <div className="flex flex-col"> 


        
       <div className="text-[50px] flex flex-row justify-between items-center gap-2">
            <div className="flex flex-row items-center gap-2">
            <p className="text-[#424A5]">{productInfo.make}</p>
            </div>

            <div className="flex flex-row items-center gap-2">
            <p className="text-[#6A7281]">${productInfo.price.toLocaleString()}</p>
            </div>
        </div>

        <div className="text-[20px] flex flex-row  items-center gap-2">
            <div className="flex flex-row items-center gap-2">
            <p className="text-[#8F95A0]">{productInfo.categories}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
            <p className="text-[#8F95A0]">*</p>
            </div>
            <div className="flex flex-row items-center gap-2">
            <p className="text-[#8F95A0]">{productInfo.year}</p>
            </div>
        </div>

        <div className="flex flex-row justify-between items-center items-center text-center gap-2 w-full py-2">

                {productInfo.history === "" ? ("") : (  
               <Image src="/carfax.svg" alt="carfax car history logo" width={100} height={50} style={{ height: "auto" }}/>
                
                )}
                {productInfo.lowmileage === "Yes" || productInfo.lowmileage === "yes" ? (
                <button className="bg-[#8F95A0]  text-white py-2 px-4 border rounded">Low Mileage</button>
                ) : ("")}

                {productInfo.numberofowner === 1 || productInfo.numberofowner < 2 ? (
                <button className="bg-[#8F95A0] text-white py-2 px-4 border  rounded">{productInfo.numberofowner} Owner</button>
                ) : ("")}

        </div>

        
        
        </div>
    )}

    export default Specifications;