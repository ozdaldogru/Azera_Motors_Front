"use client";

import Image from "next/image";
import Link from "next/link";


interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps ) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[400px] flex flex-col gap-2 border border-grey-2 rounded-lg p-2 hover:shadow-2xl"
    >
       <div className="flex flex-col text-center gap-2">
        <p className="text-base-bold text-[25px] rounded-sm" >{product.status}</p>
      </div>
      <Image
        src={product.media[0]}
        alt="product"
        width={390}
        height={300}
        className="w-[100%] h-[300px] rounded-lg object-cover"
      />
      <div className="flex flex-col text-center gap-2 w-full">
        <p className={product.title[0]} >{product.title}</p>
        <p className="text-small-medium text-grey-2">{product.categories}</p>
        <p className="text-small-medium text-grey-2">{product.make}</p>
        <p className="text-small-medium text-grey-2">{product.mileage} KM</p>
        <p className="text-small-medium text-grey-2">{product.year}</p>
        <p className="text-small-medium text-grey-2">${product.price}</p>
        {product.lowmileage === "Yes" || product.lowmileage === "yes" ? (
        <p className="text-body-bold border border-solid bg-green-300">Low Mileage</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16 ">

        <p className="text-body-bold">Not Low Mileage</p>
        </div>
      )}

         {product.numberofowner === 1 || product.numberofowner < 2 ? (
        <p className="text-body-bold border border-solid bg-green-300">{product.numberofowner} Owner</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16 ">
        <p className="text-body-bold ">{product.numberofowner} Owners</p>
        </div>
      )}

      </div>
    </Link>
  );
};

export default ProductCard;
