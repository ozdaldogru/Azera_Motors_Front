import Image from "next/image";

const Specifications = ({ productInfo }: { productInfo: ProductType }) => {


    return (

        <div className="flex flex-col w-full text-center items-center py-2 gap-2 grid grid-cols-2"> 

        {productInfo.history === "" ? ("") : (
        <div className="flex flex-col w-full text-center items-center py-2 gap-2"> 
        <p className="text-base-medium text-grey-2">History:</p>
        <p className="text-base-bold ">
            <a href={productInfo.history} target="_blank" >      
                    <Image src="/carfax.svg" alt="carfax car history logo" width={100} height={50} style={{ height: "auto" }}/>
              </a></p>
        </div>)}
        
        <div className="gap-16">
        <p className="text-base-medium text-grey-2">Make:</p>
        <p className="text-base-bold">{productInfo.make}</p>
        </div>

        <div className=" gap-16">
        <p className="text-base-medium text-grey-2">Category:</p>
        <p className="text-base-bold">{productInfo.categories}</p>
        </div>

        <div className=" gap-16">
        <p className="text-base-medium text-grey-2">Price:</p>
        <p className="text-base-bold">${productInfo.price}</p>
        </div>

        <div className=" gap-16">
        <p className="text-base-medium text-grey-2">Status:</p>
        <p className="text-base-bold">{productInfo.status}</p>
        </div>

        <div className=" gap-16">
        <p className="text-base-medium text-grey-2">Condition:</p>
        <p className="text-base-bold">{productInfo.condition}</p>
        </div>

        {productInfo.numberofowner === 1 || productInfo.numberofowner < 2 ? (
        <div className=" gap-16">
        <p className="text-base-medium text-grey-2">Number Of Owner(s):</p>
        <p className="text-base-bold">{productInfo.numberofowner}</p>
        </div>) : ("")}

        <div className=" gap-16">
        <p className="text-base-medium text-grey-2">Year:</p>
        <p className="text-base-bold">{productInfo.year}</p>
        </div>

        <div className=" gap-16">
        <p className="text-base-medium text-grey-2">Mileage:</p>
        <p className="text-base-bold">{productInfo.mileage}</p>
        </div>

        {productInfo.lowmileage === "Yes" || productInfo.lowmileage === "yes" ? (
        <div className=" gap-16">
        <p className="text-base-medium text-grey-2">Low Mileage?:</p>
        <p className="text-base-bold">{productInfo.lowmileage}</p>
        </div>) : ("")}

        <div className=" gap-16">
        <p className="text-base-medium text-grey-2">Drive Type:</p>
        <p className="text-base-bold">{productInfo.driveType}</p>
        </div>

        <div className=" gap-16">
        <p className="text-base-medium text-grey-2">Fuel Type:</p>
        <p className="text-base-bold">{productInfo.fuelType}</p>
        </div>

        <div className=" gap-16">
        <p className="text-base-medium text-grey-2">Consumption:</p>
        <p className="text-base-bold">{productInfo.consumption}</p>
        </div>

        <div className=" gap-16">
        <p className="text-base-medium text-grey-2">Transmission:</p>
        <p className="text-base-bold">{productInfo.transmission}</p>
        </div>

        <div className=" gap-16">
        <p className="text-base-medium text-grey-2">Engine Size:</p>
        <p className="text-base-bold">{productInfo.engineSize}</p>
        </div>

        <div className=" gap-16">
        <p className="text-base-medium text-grey-2">Cylinder:</p>
        <p className="text-base-bold">{productInfo.cylinder}</p>
        </div>

        <div className=" gap-16">
        <p className="text-base-medium text-grey-2">Color:</p>
        <p className="text-base-bold">{productInfo.color}</p>
        </div>

        <div className=" gap-16">
        <p className="text-base-medium text-grey-2">Interior Color:</p>
        <p className="text-base-bold">{productInfo.interiorColor}</p>
        </div>

        <div className=" gap-16">
        <p className="text-base-medium text-grey-2">VIN:</p>
        <p className="text-base-bold">{productInfo.vin}</p>
        </div>

        
        </div>
    )}

    export default Specifications;