import ProductCard from "@/components/ProductCard"
import { getSearchedProducts } from "@/lib/actions/actions"

const SearchPage = async (props: { params: Promise<{ query: string }>}) => {
  const params = await props.params;
  const searchedProducts = await getSearchedProducts(params.query)
  const decodedQuery = decodeURIComponent(params.query)

  return (

    <>

     <head>
        {/* Google Analytics Tag */}
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
      </head>
      
          <div className="px-10 py-5">
      <p className="text-heading3-bold my-10">Search results for {decodedQuery}</p>
      {!searchedProducts || searchedProducts.length === 0 && (
        <p className="text-body-bold my-5">No result found</p>
      )}
      <div className="flex flex-wrap justify-center gap-8 ">
        {searchedProducts?.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>

    </>
  )
}

export const dynamic = "force-dynamic";

export default SearchPage