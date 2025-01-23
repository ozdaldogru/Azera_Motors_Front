"use client";

import Image from "next/image";
import Link from "next/link";


interface Product {
  _id: string;
  createdAt: string;
  media: string[];
  status: string;
  title: string;
  price: number;
  categories: string;
  year: number;
  mileage: number;
  engineSize: string;
  fuelType: string;
  transmission: string;
  history: string;
  lowmileage: string;
  numberofowner: number;
}

const ProductCard = ({ product }: { product: Product }) => {


interface ProductCardProps {
  product: Product;
}


  const createdAtDate = new Date(product.createdAt);
  return (
    <>
    {product.status === "Archived" ? (""
) : (

  <Link
      href={`/products/${product._id}`}
      className="w-[365px] flex flex-col gap-2 bg-[#F5F5F5] border border-[#E4E4E4] p-2 shadow-lg hover:shadow-2xl rounded-md "
    >
            <div
              className="w-full h-[300px] bg-center bg-cover relative rounded-md"
              style={{ backgroundImage: `url(${product.media[0]})` }}
            >

              <span className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center text-[30px] rounded-md">
                      {product.status === "Pending" ? (
                  
                        <p className="text-orange-500 text-bold " >{product.status}</p>
               
                      ) : (
                      
                      product.status === "Archived"  ? (
                        
                            <p className="text-blue-500 text-bold" >{product.status}</p>
                       
                  ) : (
                      
                    product.status === "Sold Out"  ? (
                      
                          <p className="text-red-500 text-bold" >{product.status}</p>
                    
                ) :
                (
                     <p className="text-green-500 text-bold" >{product.status}</p>
                 )))
                }
              </span>

		    	</div>

    
      


      <div className="flex flex-col gap-2 w-full border-b border-[#E4E4E4] py-4">
        <div className="flex flex-row justify-between items-center text-left text-[30px] gap-2 w-full ">
        <p className=" text-black">{product.title}</p>
        </div>
        <div>
        <p className="text-body-bold text-[#8F95A0]">${product.price.toLocaleString()}</p>
        </div>
        <div className="flex flex-row items-center text-center gap-2 w-full">
        <p className="text-[#8F95A0]">{product.categories}</p>
        <p className="text-[#8F95A0]">•</p>
        <p className="text-[#8F95A0]">{product.year}</p>
        </div>
       </div>

      <div className="flex flex-row text-center gap-2 w-full py-4 text-[#8F95A0]">
        <div className="flex flex-col items-center text-center gap-2 w-full">
        <Image src="/mileage.svg" alt="carfax car history logo" width={50} height={50} style={{ height: "auto" }}/>
        <p className="text-[#8F95A0]">{product.mileage.toLocaleString()}KM</p>

        </div>
        <div className="flex flex-col items-center text-center gap-2 w-full text-[#8F95A0]">
        <Image src="/engine.svg" alt="carfax car history logo" width={50} height={50} style={{ height: "auto" }}/>
        <p className="">{product.engineSize}</p>

        </div>
        <div className="flex flex-col items-center text-center gap-2 w-full">
        <Image src="/fueltype.svg" alt="carfax car history logo" width={50} height={50} style={{ height: "auto" }}/>
        <p className="">{product.fuelType}</p>

        </div>
        <div className="flex flex-col items-center text-center gap-2 w-full">
        <Image src="/drivetype.svg" alt="carfax car history logo" width={50} height={50} style={{ height: "auto" }}/>
        <p className="">{product.transmission}</p>

        </div>

       </div>

      <div className="flex flex-row justify-center items-center items-center text-center gap-2 w-full border-t border-[#E4E4E4] py-4">

          {product.history === "" ? ("") : (  
          <Image src="/carfax.svg" alt="carfax car history logo" width={92} height={50} style={{ height: "auto" }}/>
          )}
          {product.lowmileage === "Yes" || product.lowmileage === "yes" ? (
          <p className="text-[#8F95A0] font-bold py-2 px-4 border rounded-md">Low Mileage</p>
          ) : ("")}

          {product.numberofowner === 1 || product.numberofowner < 2 ? (
          <p className="text-[#8F95A0] font-bold py-2 px-4 border rounded-md">{product.numberofowner} Owner</p>
          ) : ("")}
      </div>
      <div className="flex flex-row justify-center items-center items-center text-center gap-2 w-full border-t border-[#E4E4E4] py-4">

            <p className="text-[#8F95A0] font-bold py-2 px-4 ">Added:{createdAtDate.toDateString()}</p>
      </div>


    </Link>

    )}
    </>
  );
};



export default ProductCard;

//          