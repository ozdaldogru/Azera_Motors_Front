import Image from "next/image";

const Specifications = ({ productInfo }: { productInfo: ProductType }) => {


    return (

        <div className="justify-between py-2 gap-2 grid grid-cols-3 w-1290 h-725"> 

        <div className="flex flex-row items-center gap-2">
        <p className="text-[#8F95A0]">Status:</p>
        <p className="text-[#424A5]">{productInfo.status}</p>
        </div>

        <div className="flex flex-row items-center gap-2">
        <p className="text-[#8F95A0]">Condition:</p>
        <p className="text-[#424A5]">{productInfo.condition}</p>
        </div>


        <div className="flex flex-row items-center gap-2">
        <p className="text-[#8F95A0]">Mileage:</p>
        <p className="text-[#424A5]">{productInfo.mileage} KM</p>
        </div>



        <div className="flex flex-row items-center gap-2">
        <p className="text-[#8F95A0]">Drive Type:</p>
        <p className="text-[#424A5]">{productInfo.driveType}</p>
        </div>

        <div className="flex flex-row items-center gap-2">
        <p className="text-[#8F95A0]">Fuel Type:</p>
        <p className="text-[#424A5]">{productInfo.fuelType}</p>
        </div>

        <div className="flex flex-row items-center gap-2">
        <p className="text-[#8F95A0]">Consumption:</p>
        <p className="text-[#424A5]">{productInfo.consumption}</p>
        </div>

        <div className="flex flex-row items-center gap-2">
        <p className="text-[#8F95A0]">Transmission:</p>
        <p className="text-[#424A5]">{productInfo.transmission}</p>
        </div>

        <div className="flex flex-row items-center gap-2">
        <p className="text-[#8F95A0]">Engine Size:</p>
        <p className="text-[#424A5]">{productInfo.engineSize}</p>
        </div>

        <div className="flex flex-row items-center gap-2">
        <p className="text-[#8F95A0]">Cylinder:</p>
        <p className="text-[#424A5]">{productInfo.cylinder}</p>
        </div>

        <div className="flex flex-row items-center gap-2">
        <p className="text-[#8F95A0]">Color:</p>
        <p className="text-[#424A5]">{productInfo.color}</p>
        </div>

        <div className="flex flex-row items-center gap-2">
        <p className="text-[#8F95A0]">Interior Color:</p>
        <p className="text-[#424A5]">{productInfo.interiorColor}</p>
        </div>

        <div className="flex flex-row items-center gap-2">
        <p className="text-[#8F95A0]">VIN:</p>
        <p className="text-[#424A5]">{productInfo.vin}</p>
        </div>

        
        </div>
    )}

    export default Specifications;