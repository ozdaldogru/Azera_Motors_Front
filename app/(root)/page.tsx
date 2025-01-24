import ProductList from "@/components/ProductList";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <div>
        <div className="w-full">
          <Hero />
        </div>
       
        <div className="items-center justify-center"> 
          <ProductList />
        </div>
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";

