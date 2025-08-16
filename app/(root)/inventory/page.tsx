import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-6 gap-10">
      <ProductList />
    </div>
  );
}

export const dynamic = "force-dynamic";
