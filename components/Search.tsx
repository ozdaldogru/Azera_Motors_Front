'use client';

import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Search, X } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search/${encodeURIComponent(searchQuery)}`);
    }
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
    <>
      <div>
        <div className="">
          <Slider />
        </div>
        <div className="flex items-center justify-center">
          {isSearchOpen ? (
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
              <button
                onClick={() => setIsSearchOpen(false)}
                className="px-4 py-3 bg-red-500 text-white border-gray-300 rounded-r-md"
              >
                <X className="cursor-pointer h-4 w-4 hover:text-red-1" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-500"
            >
              <Search size={24} />
            </button>
          )}
        </div>

      </div>
    </>
  );
}

export const dynamic = "force-dynamic";