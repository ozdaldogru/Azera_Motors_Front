"use client";

const Title = ({ productInfo }: { productInfo: ProductType }) => {


  return (

<div>

  <div className="w-full text-[50px] mt-10 gap-16">

 
        <h1>[{productInfo.status}] - {productInfo.title}</h1>
 

  </div>


</div>  
  );
};

export default Title;
