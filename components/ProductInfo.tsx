"use client";

import Specifications  from "./Specifications";
import Title  from "./Title";
import Description  from "./Description";
import Features  from "./Features";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {


  return (

<div>
<div><Title productInfo={productInfo}/></div>
<div><Specifications productInfo={productInfo}/></div>
<div><Features productInfo={productInfo}/></div>
<div><Description productInfo={productInfo}/></div>






</div>  
  );
};

export default ProductInfo;
