const getProducts = async () => {
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  return products.json()
}

const getProductDetails = async (productId: string) => {
  const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
  return await product.json()
}

 const getSearchedProducts = async (query: string) => {
  const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return searchedProducts.json()
}


const getRelatedProducts = async (productId: string) => {
  const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`)
  return relatedProducts.json()
}


export {getProducts, getProductDetails, getSearchedProducts, getRelatedProducts };

