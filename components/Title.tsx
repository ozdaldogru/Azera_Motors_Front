"use client";

const Title = ({ productInfo }: { productInfo: ProductType }) => {


  return (

<div>

  <div className="w-full text-[45px] mt-10 gap-16 max-[431px]:text-[30px]">

 
        <h1>{productInfo.make} {productInfo.model} - {productInfo.year} [{productInfo.status}]</h1>
 

  </div>


</div>  
  );
};

export default Title;
