const getProducts = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

const getProductDetails = async (productId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const product = await response.json();
    return product;
  } catch (error) {
    console.error(`Failed to fetch product details for ID ${productId}:`, error);
    return null;
  }
};

const getSearchedProducts = async (query: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const searchedProducts = await response.json();
    return searchedProducts;
  } catch (error) {
    console.error(`Failed to fetch searched products for query "${query}":`, error);
    return [];
  }
};

const getRelatedProducts = async (productId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const relatedProducts = await response.json();
    return relatedProducts;
  } catch (error) {
    console.error(`Failed to fetch related products for ID ${productId}:`, error);
    return [];
  }
};

export { getProducts, getProductDetails, getSearchedProducts, getRelatedProducts };