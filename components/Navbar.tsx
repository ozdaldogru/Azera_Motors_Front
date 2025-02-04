"use client"
import { AiOutlineMenu ,AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";


const Navbar = () => {
    const [isOpen, setIsOpen] =useState(false)    
    const toggleMenu = () => {setIsOpen(!isOpen); }
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const router = useRouter();
          
    const handleSearch = () => {
      if (searchQuery.trim()) {
          router.push(`/search/${encodeURIComponent(searchQuery)}`);
         }};
          
    const handleCombinedClick = () => {
     handleSearch();
     setIsOpen(!isOpen)
    };
          
    const handleKeyPress = (event: KeyboardEvent) => {
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
    <div className='bg-[#d4dce2] w-full top-0 flex flex-wrap flex-row justify-between items-center gap-4 p-4 max-[600px]:flex-row'>
                 <div className="flex gap-4 items-stretch sm:h-min-[88px] ">
                    <Link href="/">
                      <Image src="/logo.png" alt="logo" width={300} height={300} style={{ height: "auto" }} className="max-[600px]:w-[250px]"/>
                    </Link>
                 </div>


                 <div className="max-[900px]:hidden flex flex-wrap justify-center gap-8 font-bold text-[20px]">   
                <div className="flex items-center justify-center">
                      {isSearchOpen ? (
                        <div className="flex items-center">
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search..."
                            className="px-4 py-2 rounded-l-md border border-gray-300 text-[15px]"
                          />
                          <button
                            id="search" aria-label="search button"
                            onClick={handleSearch}
                            className="px-4 py-3 bg-green-500 text-white border-gray-300 rounded-r-md "
                          >
                            <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
                          </button>
                          <button
                            id="close-search" aria-label="close search button"
                            onClick={() => setIsSearchOpen(false)}
                            className="px-4 py-3 bg-[#8F95A0] text-white border-gray-300 rounded-r-md"
                          >
                            <X className="cursor-pointer h-4 w-4 hover:text-red-1" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setIsSearchOpen(true)}
                          className=""
                        >
                          <Search size={24} />
                        </button>
                      )}
                 </div>
                 <a href="/" className="hover:font-bold  hover:underline hover:text-red-500 hover:border-primary transition-colors duration-500">Home</a> 
                 <a href="/inventory" className=" hover:font-bold  hover:underline hover:text-red-500 hover:border-primary transition-colors duration-500">Inventory</a>
                 <a href="/contact" className="hover:font-bold  hover:underline hover:text-red-500 hover:border-primary transition-colors duration-500">Contact</a>
                </div>




        <button className='min-[901px]:hidden inline-block text-[30px] text-slate-500' onClick={toggleMenu}>
               {
                isOpen?  <AiOutlineClose/> : <AiOutlineMenu/>
               }
        </button>
        {isOpen && (
          
        <div className='flex flex-col justify-between items-center text-center gap-3 basis-full' >
            <Link href='/' className="w-[250px] shadow-sm rounded-md" onClick={() => setIsOpen(!isOpen)}>Home</Link>
            <Link href='/inventory' className="w-[250px] shadow-sm rounded-md" onClick={() => setIsOpen(!isOpen)}>Inventory</Link>
            <Link href='/contact' className="w-[250px] shadow-sm rounded-md" onClick={() => setIsOpen(!isOpen)}>Contact</Link>
            <div className="flex items-center justify-center">
                      
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search..."
                          className="px-2 py-2 rounded-l-md border border-gray-300  w-[200px] h-[30px]"
                        />
                        <button
                          onClick={handleCombinedClick}
                          className="px-4 py-2 bg-green-500 text-white border-gray-300 rounded-r-md h-[30px] items-center justify-center text-center"
                        >
                          <Search className="cursor-pointer items-center h-4 w-4 hover:text-red-1" />
                        </button>

                      </div>
            </div>

        </div>
         )}
    </div>
  )
}

export default Navbar