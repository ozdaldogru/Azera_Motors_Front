"use client";

import Image from "next/image";
import Link from "next/link";


interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps ) => {
  return (
    <>
    {product.status === "Archived" ? (""
) : (

  <Link
      href={`/products/${product._id}`}
      className="w-[360px] flex flex-col gap-2 bg-[#F5F5F5] border border-[#E4E4E4] rounded-sm p-2 shadow-lg hover:shadow-2xl"
    >
      <Image
        src={product.media[0]}
        alt="product"
        width={390}
        height={300}
        className="w-[100%] h-[300px] rounded-lg object-cover"
        loading="lazy"
      />
            {product.status === "Pending" ? (
            <div className="flex flex-col text-center rounded-lg gap-2 bg-orange-500">
                 <p className="text-bold text-[20px] rounded-sm" >{product.status}</p>
            </div>
              ) : (
              
              product.status === "Archived"  ? (
                <div className="flex flex-col text-center rounded-lg gap-2 bg-blue-500">
                    <p className="text-bold text-[20px] rounded-sm" >{product.status}</p>
                </div>
          ) : (
              
            product.status === "Sold Out"  ? (
              <div className="flex flex-col text-center text-white rounded-lg gap-2 bg-red-500 ">
                  <p className="text-bold text-[20px] rounded-sm" >{product.status}</p>
              </div>
        ) :
        (
            <div className="flex flex-col text-center text-white rounded-lg gap-2 bg-green-700">
                <p className="text-bold text-[20px] rounded-sm" >{product.status}</p>
          </div>
          )))
        }
      <div className="flex flex-col text-center gap-2 w-full">
        <p className="text-bold text-[30px] underline" >{product.title}</p>
        <p className="text-body-bold text-grey-2">{product.categories}</p>
        <p className="text-body-bold text-grey-2">{product.make}</p>
        <p className="text-body-bold text-grey-2">{product.mileage} KM</p>
        <p className="text-body-bold text-grey-2">{product.year}</p>
        <p className="text-body-bold text-grey-2">${product.price}</p>


        <div className="flex flex-row justify-center items-center items-center text-center gap-2 w-full border-t border-[#E4E4E4] py-2">

        {product.history === "" ? ("") : (  

             
                    <Image src="/carfax.svg" alt="carfax car history logo" width={100} height={50} style={{ height: "auto" }}/>
           
        )}
        {product.lowmileage === "Yes" || product.lowmileage === "yes" ? (
        <button className="bg-green-500  text-white py-2 px-4 border rounded">Low Mileage</button>
      ) : ("")}

         {product.numberofowner === 1 || product.numberofowner < 2 ? (
        <button className="bg-blue-500 text-white py-2 px-4 border  rounded">{product.numberofowner} Owner</button>
      ) : ("")}

        </div>


      </div>
    </Link>

    )}
    </>
  );
};



export default ProductCard;
