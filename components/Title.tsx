"use client";

const Title = ({ productInfo }: { productInfo: ProductType }) => {


  return (

<div>

  <div className="w-full text-[45px] mt-10 gap-16">

 
        <h1>{productInfo.title}-({productInfo.status})</h1>
 

  </div>


</div>  
  );
};

export default Title;
