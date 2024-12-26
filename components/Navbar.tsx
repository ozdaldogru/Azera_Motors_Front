"use client";

import { FaHome } from "react-icons/fa";
import { HiPhoneMissedCall } from "react-icons/hi";
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
                      placeholder="Search..."
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

                   <div className="flex flex-wrap justify-center align-items-center gap-8 w-300px">
                     <div className="flex flex-wrap justify-center gap-8">
                       <a href="tel:14375056334" className="text-center text-[24px] text-red-700 hover:text-green-700"><HiPhoneMissedCall /></a>
                      </div>
                      <div className="flex flex-wrap justify-center gap-8">
                       <a href="/" className="text-center text-[24px] text-black-700 hover:text-green-700"><FaHome/></a>
                      </div>
              </div>


            </div>
 
           </div>
   

  );
};

export default Navbar;

/*
                  <div className="flex gap-4 px-8 justify-items-center align-item-center sm:h-min-[96px] sm:w-min-full">
                    <Link
                      href="/"
                      className={`hover:text-red-1 ${
                        pathname === "/"
                      }`}
                    >
                      <FaHome className="w-[30px] h-[30px] sm:w-[50px] h-[50px]"/>
                    </Link>
                  </div>

*/