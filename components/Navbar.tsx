"use client";

import { FaHome } from "react-icons/fa";
import { FcPhone } from "react-icons/fc";
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

            <div className="flex flex-wrap justify-between px-4 py-4 gap-8">


                 <div className="flex gap-4 justify-items-center items-stretch sm:h-min-[96px] ">
                    <Link href="/">
                      <Image src="/logo.png" alt="logo" width={300} height={300} />
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

                  <div className="flex flex-row align-item-center gap-1 text-[30px]">

                      <FcPhone className="w-[50px] h-[40px] hover:text-teal-700"/> <a href="tlf:+14375056334" className="text-center text-[24px] text-red-700 sm:text-[10]">437-505-63-34</a>
                  
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