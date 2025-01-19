"use client";

import { FaHome } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { HiPhoneMissedCall } from "react-icons/hi";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaCommentSms } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search/${encodeURIComponent(searchQuery)}`);
    }
  };

  interface KeyPressEvent extends KeyboardEvent {
    key: string;
  }

  const handleKeyPress = (event: KeyPressEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [searchQuery]);

  return (
          <div className="bg-[#d4dce2] sticky top-0  flex flex-col gap-2 w-full sm:w-full">

            <div className="flex flex-wrap justify-between align-items-center px-4 py-4 gap-8">


                 <div className="flex gap-4 items-stretch sm:h-min-[96px] ">
                    <Link href="/">
                      <Image src="/logo.png" alt="logo" width={300} height={300} style={{ height: "auto" }}/>
                    </Link>
                  </div>

                  <div className="flex items-center">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="px-4 py-2 rounded-l-md border border-gray-300"
                      />
                      <button
                        onClick={handleSearch}
                        className="px-4 py-3 bg-green-500 text-white border-gray-300 rounded-r-md"
                      >
                         <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
                      </button>
                </div>

                  <div className="flex flex-col justify-center gap-4">   

                <div className="flex flex-wrap justify-center gap-8">   
                  <a href="tel:14375056334" className="text-center text-[30px] text-red-700  hover:text-green-700" target="blank"><p><HiPhoneMissedCall /></p></a>    
                  <a href="sms:14375056334" className="text-center text-[30px] text-black-600  hover:text-blue-700 " target="blank"><FaCommentSms /></a> 
                  <a href="https://wa.me/14375056334" className="text-center text-[30px] text-green-600 hover:text-orange-500" target="blank"><RiWhatsappFill /></a>
                  <a href="mailto:ozdaldogru@gmail.com" className="text-center text-[30px] text-black-600 hover:text-red-700" target="blank"><IoMailOpenOutline /></a>
                  <a href="/" className="text-center text-[30px] text-black-600  hover:text-green-700" target="blank"><FaHome/></a>
 
              </div>


            </div>


            </div>
 
           </div>
   

  );
};

export default Navbar;

