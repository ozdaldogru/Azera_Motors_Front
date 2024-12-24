"use client";

import { FaHome } from "react-icons/fa";
import {  Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [query, setQuery] = useState("");

  return (
    <div>
          <div className="top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center bg-[#ccc] max-sm:px-2">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={400} height={200} />
      </Link>


      <div className="flex gap-4 border border-grey-2 px-10 py-1 items-center rounded-lg bg-white width-[500]">
        <input
          className="outline-none max-sm:max-w-[500px]"
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

      <div className="flex gap-4 text-base-bold text-[30px]">
        <Link
          href="/"
          className={`hover:text-red-1 ${
            pathname === "/"
          }`}
        >
          <FaHome className="w-[50px] h-[50px] hover:text-teal-700" />
        </Link>
      </div>
 
    </div>
    </div>

  );
};

export default Navbar;
