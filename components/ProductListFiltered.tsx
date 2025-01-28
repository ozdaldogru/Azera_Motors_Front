import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const ProductListFiltered = async () => {
  const products = await getProducts();

  // Filter out products with "Archived" and "Pending" statuses
  const filteredProducts = products.filter(
    (product: ProductType) => product.status !== "Archived" && product.status !== "Pending"
  );

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      
      <p className="text-heading1-bold border-b-[3px] border-black max-[431px]:text-[20px]">Inventory</p> 

      {!filteredProducts || filteredProducts.length === 0 ? (
        <p className="text-body-bold">No products found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">
          {filteredProducts.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListFiltered;
