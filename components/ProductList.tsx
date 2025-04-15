import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const products = await getProducts();

  // Sort products by status: "Available", "Pending", "Sold", "Archived"
  const sortedProducts = products.sort((a: ProductType, b: ProductType) => {
    const statusOrder = ["Available", "Pending", "Sold", "Archived"];
    return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
  });

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <h1 className="text-[35px] text-heading1-bold border-b-[3px] border-black max-[431px]:text-[20px]">Inventory List</h1> 

      {!sortedProducts || sortedProducts.length === 0 ? (
        <p className="text-body-bold">No products found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">
          {sortedProducts.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
