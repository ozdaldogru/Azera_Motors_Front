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
      className="w-[400px] flex flex-col gap-2 border border-grey-2 rounded-lg p-2 hover:shadow-md"
    >
      <Image
        src={product.media[0]}
        alt="product"
        width={390}
        height={300}
        className="h-[300px] rounded-lg object-cover"
      />
      <div className="flex flex-col text-center gap-2 hover:shadow-md">
        <p className="text-base-bold text-white border border-black bg-red-500 rounded-sm" >{product.title}</p>
        <p className="text-small-medium text-grey-2">{product.categories}</p>
        <p className="text-small-medium text-grey-2">{product.make}</p>
        <p className="text-small-medium text-grey-2">{product.mileage} KM</p>
        <p className="text-small-medium text-grey-2">{product.year}</p>
        <p className="text-small-medium text-grey-2">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
