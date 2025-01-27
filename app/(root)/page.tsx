import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import CustomCookieConsent from "@/components/CustomCookieConsent";


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
        <CustomCookieConsent />
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";

