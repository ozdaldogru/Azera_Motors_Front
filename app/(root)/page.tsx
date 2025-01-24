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
          <ProductList limit={3} />
        </div>
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";

