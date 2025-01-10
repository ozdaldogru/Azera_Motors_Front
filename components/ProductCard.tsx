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
      className="w-[400px] flex flex-col gap-2 border border-grey-2 rounded-lg p-2 hover:shadow-2xl"
    >
      {product.status === "Pending" ? (
            <div className="flex flex-col text-center rounded-lg gap-2 bg-orange-400">
                 <p className="text-bold text-[35px] rounded-sm" >{product.status}</p>
            </div>
      ) : (
      
      product.status === "Archived"  ? (
        <div className="flex flex-col text-center rounded-lg gap-2 bg-blue-500">
             <p className="text-bold text-[35px] rounded-sm" >{product.status}</p>
        </div>
  ) : (
      
    product.status === "Sold Out"  ? (
      <div className="flex flex-col text-center rounded-lg gap-2 bg-red-500">
           <p className="text-bold text-[35px] rounded-sm" >{product.status}</p>
      </div>
) :
(
    <div className="flex flex-col text-center rounded-lg gap-2 bg-green-300">
        <p className="text-bold text-[35px] rounded-sm" >{product.status}</p>
   </div>
  )))
}



      <Image
        src={product.media[0]}
        alt="product"
        width={390}
        height={300}
        className="w-[100%] h-[300px] rounded-lg object-cover"
      />
      <div className="flex flex-col text-center gap-2 w-full">
        <p className="text-bold text-[30px] underline" >{product.title}</p>
        <p className="text-small-medium text-gold-2">{product.categories}</p>
        <p className="text-small-medium text-grey-2">{product.make}</p>
        <p className="text-small-medium text-grey-2">{product.mileage} KM</p>
        <p className="text-small-medium text-grey-2">{product.year}</p>
        <p className="text-small-medium text-grey-2">${product.price}</p>
        {product.lowmileage === "Yes" || product.lowmileage === "yes" ? (
        <p className="text-body-bold border border-solid rounded-md bg-green-300">Low Mileage</p>
      ) : ("")}

         {product.numberofowner === 1 || product.numberofowner < 2 ? (
        <p className="text-body-bold border border-solid rounded-md bg-green-300">{product.numberofowner} Owner</p>
      ) : ("")}

      </div>
    </Link>

    )}
    </>
  );
};



export default ProductCard;
