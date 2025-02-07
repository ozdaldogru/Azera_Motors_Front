import Slider from "@/components/Slider";
import ProductListFiltered from "@/components/ProductListFiltered";
import CustomCookieConsent from "@/components/CustomCookieConsent";


export default function Home() {
  return (
    <>
      <div>
        <div className="w-full" >
          <Slider />
        </div>
        <br />
        <br />
        <div className="items-center justify-center py-4 grid grid-col-3">
          <ProductListFiltered />
        </div>
        <CustomCookieConsent />
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";

