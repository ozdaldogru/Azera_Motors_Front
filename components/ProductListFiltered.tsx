import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const ProductListFiltered = async () => {
  const products = await getProducts();

  // Filter out products with "Archived" and "Pending" statuses
  const filteredProducts = products.filter(
    (product: ProductType) => product.status  );

  // Sort products by creation date (assuming `createdAt` is a valid date field)
  const sortedProducts = filteredProducts.sort(
    (a: ProductType, b: ProductType) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  // Get the latest 5 products
  const latestProducts = sortedProducts.slice(0, 5);

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold border-b-[3px] border-black max-[431px]:text-[20px]">Recently Added</p>

      {!latestProducts || latestProducts.length === 0 ? (
        <p className="text-body-bold">No products found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">
          {latestProducts.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        
      )}
      <button className="bg-[#f5020d] text-white border-[#f5020d] text-heading1-bold border-[3px] rounded-md max-[431px]:text-[20px]"><a href="/inventory">Go To Inventory Page</a></button>
    </div>
  );
};

export default ProductListFiltered;

