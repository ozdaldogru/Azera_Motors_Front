import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";


export default function Home() {
  return (
    <>
      <div>
        <div className="w-full">
          <Slider />
        </div>
        <div className="items-center justify-center">
          <ProductList />
        </div>
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";

