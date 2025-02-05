import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

interface ProductCardProps {
  product: ProductType;
}

const ProductListFiltered = async () => {
  const products = await getProducts();

  // Filter out products with "Archived" and "Pending" statuses
  const filteredProducts = products.filter(
    (product: ProductType) => !["Archived", "Sold Out", "Pending"].includes(product.status)
  );

  // Sort products by creation date (assuming `createdAt` is a valid date field)
  const sortedProducts = filteredProducts.sort(
    (a: ProductType, b: ProductType) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  // Get the latest 5 products
  const latestProducts = sortedProducts.slice(0, 6);

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
      <button className="bg-black text-white text-[30px] px-8 max-[431px]:text-[20px]"><a href="/inventory">BROWSE ALL VEHICLES</a></button>
    </div>
  );
};

export default ProductListFiltered;

