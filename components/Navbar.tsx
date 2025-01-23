"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";


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

  const [dropdownMenu, setDropdownMenu] = useState(false);

  return (
          <div className="bg-white ">

            <div className="bg-[#d4dce2] sticky top-0 flex flex-wrap flex-row justify-between items-center gap-4 p-4 max-[600px]:flex-col  sm:items-center sm:gap-8">


                 <div className="flex gap-4 items-stretch sm:h-min-[88px] ">
                    <Link href="/">
                      <Image src="/logo.png" alt="logo" width={300} height={300} style={{ height: "auto" }}/>
                    </Link>
                 </div>



               <div className=" flex flex-col justify-center gap-4">   

                <div className="max-[600px]:hidden flex flex-wrap justify-center gap-8 font-bold ">   
                    <a href="/inventory" className="hover:font-bold  hover:underline hover:text-red-500 hover:border-primary transition-colors duration-500">Inventory</a>
                    <a href="/contact" className="hover:font-bold  hover:underline hover:text-red-500 hover:border-primary transition-colors duration-500">Contact</a>
                    <a href="/" className="hover:font-bold  hover:underline hover:text-red-500 hover:border-primary transition-colors duration-500">Home</a> 
                </div>

                <div className="min-[601px]:hidden relative flex gap-4 items-center">
                <Menu
                  className=" cursor-pointer "
                  onClick={() => setDropdownMenu(!dropdownMenu)}
                />
                {dropdownMenu && (
                  <div className="absolute top-10 right-6 flex flex-col gap-8 p-5 bg-white shadow-xl rounded-lg w-240">
              
                          <a href="/inventory" className="hover:font-bold  hover:underline hover:text-red-500 hover:border-primary transition-colors duration-500">Inventory</a>
                            <a href="/contact" className="hover:font-bold  hover:underline hover:text-red-500 hover:border-primary transition-colors duration-500">Contact</a>
                            <a href="/" className="hover:font-bold  hover:underline hover:text-red-500 hover:border-primary transition-colors duration-500">Home</a> 

                  </div>
                )}

              </div>
               </div>


            </div>
 
           </div>
   

  );
};

export default Navbar;


/*
                  <div className="flex items-center sm:w-full">
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
*/