"use client";

const Title = ({ productInfo }: { productInfo: ProductType }) => {


  return (

<div>

  <div className="w-full grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-16">

 
        <h1 className="text-[20px] text-bold underline underline-offset-2 gap-16">{productInfo.title}</h1>
 

  </div>


</div>  
  );
};

export default Title;
