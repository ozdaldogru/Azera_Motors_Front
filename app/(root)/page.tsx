
import ProductList from "@/components/ProductList";
import Hero from "@/components/hero";



export default function Home() {
  return (
    <>
      <div >
        <Hero />
       
      <ProductList />

      </div>
    </>
  );
}

export const dynamic = "force-dynamic";

