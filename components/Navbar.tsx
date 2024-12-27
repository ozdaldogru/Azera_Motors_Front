"use client";

import { FaHome } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { HiPhoneMissedCall } from "react-icons/hi";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaCommentSms } from "react-icons/fa6";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [query, setQuery] = useState("");

  return (
          <div className="bg-[#ccc] flex flex-col gap-2 w-full sm:w-full">

            <div className="flex flex-wrap justify-between align-items-center px-4 py-4 gap-8">


                 <div className="flex gap-4 items-stretch sm:h-min-[96px] ">
                    <Link href="/">
                      <Image src="/logo.png" alt="logo" width={300} height={300} style={{ height: "auto" }}/>
                    </Link>
                  </div>

                  <div className="flex gap-4 border border-grey-2 px-10  items-stretch rounded-lg bg-white h-[40px]">
                    <input
                      className="outline-none w-full"
                      placeholder="Type and Click On Button"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                      disabled={query === ""}
                      onClick={() => router.push(`/search/${query}`)}
                    >
                      <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
                    </button>
                  </div>

                  <div className="flex flex-col justify-center gap-4">   

                <div className="flex flex-wrap justify-center gap-8">   
                  <a href="tel:14375056334" className="text-center text-[30px] text-red-700 hover:text-[45px] hover:text-green-700" target="blank"><p><HiPhoneMissedCall /></p></a>    
                  <a href="sms:14375056334" className="text-center text-[30px] text-black-600 hover:text-[45px] hover:text-blue-700 " target="blank"><FaCommentSms /></a> 
                  <a href="https://wa.me/14375056334" className="text-center text-[30px] text-green-600 hover:text-[45px]" target="blank"><RiWhatsappFill /></a>
                  <a href="mailto:ozdaldogru@gmail.com" className="text-center text-[30px] text-black-600 hover:text-[45px]" target="blank"><IoMailOpenOutline /></a>
                  <a href="/" className="text-center text-[30px] text-black-600 hover:text-[45px] hover:text-green-700" target="blank"><FaHome/></a>
 
              </div>


            </div>


            </div>
 
           </div>
   

  );
};

export default Navbar;

