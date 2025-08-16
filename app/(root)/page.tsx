import Slider from "@/components/Slider";
import ProductListFiltered from "@/components/ProductListFiltered";
import CustomCookieConsent from "@/components/CustomCookieConsent";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Slider />
      </div>
      <div className="items-center justify-center grid grid-col-3">
        <ProductListFiltered />
      </div>
      <CustomCookieConsent />
    </>
  );
}

export const dynamic = "force-dynamic";

