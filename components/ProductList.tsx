'use client';

import { useState, useEffect, lazy, Suspense } from "react";
import { getProducts } from "@/lib/actions/actions";

const ProductCard = lazy(() => import("./ProductCard"));

interface ProductListProps {
  limit: number;
}

const ProductList: React.FC<ProductListProps> = ({ limit }) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      let displayedProducts = allProducts;

      // Sort products by creation date
      displayedProducts.sort((a: ProductType, b: ProductType) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      if (limit) {
        displayedProducts = displayedProducts.slice(0, limit);
      }

      setProducts(displayedProducts);
    };

    fetchProducts();
  }, [limit]);

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5 bg-gray-100">
      <p className="text-heading1-bold border-b-[3px] border-black">Inventory</p>
      {!products || products.length === 0 ? (
        <p className="text-body-bold">No products found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16">
          {products.map((product: ProductType) => (
            <Suspense fallback={<div>Loading...</div>} key={product._id}>
              <ProductCard product={product} />
            </Suspense>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;