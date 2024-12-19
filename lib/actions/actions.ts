 const getCollections = async () => {
  const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`)
  return collections.json()
} 

const getCollectionDetails = async (collectionId: string) => {
  const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`)
  return collection.json()
}

const getProducts = async () => {
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  return products.json()
}

const getProductDetails = async (productId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`);
    if (!response.ok) {
      throw new Error(`Error fetching product details: ${response.statusText}`);
    }
    const product = await response.json();
    return product;
  } catch (error) {
    console.error("Failed to fetch product details:", error);
    throw error;
  }
};

 const getSearchedProducts = async (query: string) => {
  const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return searchedProducts.json()
}


const getRelatedProducts = async (productId: string) => {
  const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`)
  return relatedProducts.json()
}

export {getCollections, getCollectionDetails, getProducts, getProductDetails, getSearchedProducts, getRelatedProducts };