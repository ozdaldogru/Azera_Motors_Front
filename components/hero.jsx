"use client";

import Image from "next/image";


const Hero = () => {


  return (

		<div className="w-full lg:h-screen flex flex-col">
			<div
				className="w-full h-[700px] bg-center bg-cover flex items-center justify-center flex-col lg:py-5 py-5 "
				style={{ backgroundImage: `url(/banner.png)` }}
			>
				<br />
				<br />
				<br />
				<span className="text-red-300 font-bold lg:text-[63px] text-[52px] lg:text-left text-center">
					Best Affordable Cars In Mississauga
				</span>

				<span className="text-red-300 font-bold lg:text-[50px] text-[52px] lg:text-left text-center">
					Come and Get Yours Today
				</span>

				<div className="flex flex-col gap-5 lg:px-[310px] pl-5 pr-7 w-full mt-10">
	
					



				</div>
			</div>
		</div>
   

  );
};

export default Hero;

