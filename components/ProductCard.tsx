"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useAnimation,
  useInView,
} from "framer-motion"
import { useEffect, useRef } from "react"

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps ) => {
  const containerRef = useRef(null)

  const isInView = useInView(containerRef, { once: true })
  const mainControls = useAnimation()



  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <>
      <section ref={containerRef}>
        <motion.h1
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ delay: 0.5 }}
        >


  <Link
      href={`/products/${product._id}`}
      className="w-[400px] max-[431px]:w-[360px] flex flex-col bg-[#F5F5F5] border border-[#8F95A0] shadow-lg hover:shadow-2xl rounded-md "
    >
            <div
              className="w-full h-[300px] max-[431px]:h-[200px] bg-center bg-cover relative rounded-md"
              style={{ backgroundImage: `url(${product.media[0]})` }}
            >

              <span className="absolute bottom-0 left-0 w-full bg-black opacity-50 text-white text-center text-[30px] max-[431px]:text-[20px] rounded-md">
                      {product.status === "Pending" ? (
                  
                        <p className="text-orange-500 text-bold " >{product.status}</p>
               
                      ) : (
                      
                      product.status === "Archived"  ? (
                        
                            <p className="text-blue-500 text-bold" >{product.status}</p>
                       
                  ) : (
                      
                    product.status === "Sold"  ? (
                      
                          <p className="text-red-500 text-bold" >{product.status}</p>
                    
                ) :
                (
                     <p className="text-green-500 text-bold" >{product.status}</p>
                 )))
                }
              </span>

		    	</div>

    
      


      <div className="flex flex-col  w-full border-b border-[#8F95A0]">


        <div className="flex flex-col w-full py-2 max-[431px]:flex-row max-[431px]:flex-col max-[431px]:items-start px-4">
        <div className="flex flex-row justify-between py-2 text-left text-[20px] max-[431px]:flex-col max-[431px]:items-start max-[431px]:text-[20px] w-full ">
        <p className=" text-black">{product.make} {product.model}</p>
        </div>
        <div className="flex flex-col" >
        <p className="text-body-bold text-[#8F95A0] max-[431px]:text-[15px]">${product.price.toLocaleString()}</p>
        <p className="text-[8px] text-[#8F95A0] max-[431px]:text-[8px]">+ HST & Licensing</p>
        </div>

        </div>

        <div className="flex flex-row items-center w-full max-[431px]:text-[13px] px-4">
        <p className="text-[#8F95A0]">{product.categories}</p>
        <p className="text-[#8F95A0]"> • </p>
        <p className="text-[#8F95A0]">{product.year}</p>
        </div>

       </div>

      <div className="flex flex-row text-center w-full py-2 px-2 text-[#8F95A0] max-[431px]:text-[11px]">
        <div className="flex flex-col items-center text-center w-full px-2">
        <Image src="/mileage.svg" alt="carfax car history logo" width={50} height={50} style={{ height: "auto" }}/>
        <p className="text-[#8F95A0]">{product.mileage.toLocaleString()}KM</p>

        </div>
        <div className="flex flex-col items-center text-center w-full text-[#8F95A0]">
        <Image src="/engine.svg" alt="carfax car history logo" width={50} height={50} style={{ height: "auto" }}/>
        <p className="">{product.engineSize}</p>

        </div>
        <div className="flex flex-col items-center text-center w-full">
        <Image src="/fueltype.svg" alt="carfax car history logo" width={50} height={50} style={{ height: "auto" }}/>
        <p className="">{product.fuelType}</p>

        </div>
        <div className="flex flex-col items-center text-center w-full">
        <Image src="/drivetype.svg" alt="carfax car history logo" width={50} height={50} style={{ height: "auto" }}/>
        <p className="">{product.transmission}</p>

        </div>

       </div>

      <div className="flex flex-row justify-center items-center items-center text-center gap-2 w-full border-t border-[#8F95A0] py-4">

          {product.history   === '' ? ("") : (  
          <Image src="/carfax.svg" alt="carfax car history logo" width={92} height={50} style={{ height: "auto" }} className="max-[431px]:w-[66px]"/>
          )}
          {product.lowmileage === "Yes" || product.lowmileage === "yes" ? (
          <p className="text-[#8F95A0] font-bold py-2 px-4 border rounded-md max-[431px]:text-[9px]">Low Mileage</p>
          ) : ("")}

          {product.numberofowner === 1 || product.numberofowner < 2 ? (
          <p className="text-[#8F95A0] font-bold py-2 px-4 border rounded-md max-[431px]:text-[9px]">{product.numberofowner} Owner</p>
          ) : ("")}
      </div>
    </Link>

    
        </motion.h1>

      </section>
    </>
  );
};



export default ProductCard;
