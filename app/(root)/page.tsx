import Slider from "@/components/Slider";
import ProductListFiltered from "@/components/ProductListFiltered";
import CustomCookieConsent from "@/components/CustomCookieConsent";
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <div>

      <Head>
        <script async src={process.env.YOUR_GOOGLE_TAG_SCRIPT_URL}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZD6CDE1XEZ');
            `,
          }}
        />
      </Head>

        <div className="w-full" >
          <Slider />
        </div>
        <div className="items-center justify-center grid grid-col-3">
          <ProductListFiltered />
        </div>
        <CustomCookieConsent />
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";

