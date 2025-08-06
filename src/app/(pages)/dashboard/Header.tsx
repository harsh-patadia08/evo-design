import { LucideSearch, User } from "lucide-react";
import React, { useCallback, useState } from "react";

export default function Header({search, setSearch}: {search: string, setSearch: React.Dispatch<React.SetStateAction<string>>}): React.ReactElement {

  // function to debounce the search on change 
  const [searchInput, setSearchInput] = useState<string>(search);
  const [debounceTimer, setDebounceTimer] = useState<number | null>(null);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === "") {
      setSearch(""); setSearchInput("");
      return;
    }
    setSearchInput(e.target.value);
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    const timeoutId = setTimeout(function (): void {
      setSearch(e.target.value);
    }, 500);
    setDebounceTimer(parseInt(timeoutId.toString()));
  };

  return (
    <>
      <header className="bg-white rounded-2xl shadow-[4px_4px_12px_0px_#00000040]">
        <div className="flex justify-between text-center px-2 py-2 ">
          {/* logo and name */}
          <div className="flex gap-2">
            <p className="flex items-center justify-center bg-gradient-to-r from-[#FD5900] to-[#FFB48C] text-white h-10 w-10 rounded-[12px]">
              <span className="text-[50px] news-reader-italic pt-2">E</span>
            </p>
            <div className="flex items-center justify-center">
              <div className="text-[#FD5900] text-4xl font-medium">
                Evo<i className="news-reader-italic">Event</i>
              </div>
            </div>
          </div>

          {/* search bar and profile */}
          <div className="flex gap-2">
            <div className="relative">
              <input
                className="hidden sm:flex text-[#06060680] rounded-[12px] border-[#EAEAEA] border-2 pl-12 py-2.5 sm:w-[320px] sm:h-[40px] placeholder:text-[16px]:font-[400] placeholder:text-[#06060680] focus:outline-1 focus:outline-[#FFB48C] focus:border-[#FFB48C]"
                value={searchInput}
                onChange={handleSearch}
                placeholder="Search here...."
                type="text"
              />
              <LucideSearch
                size={24}
                color="black"
                className="hidden sm:block absolute top-2 left-3"
              />
              <div className="flex sm:hidden p-2 rounded-[12px] border-[#EAEAEA] border-2">
                <LucideSearch
                  size={24}
                  color="black"
                  className="text-black sm:w-[320px] sm:h-[40px]"
                />
              </div>
            </div>
            <div className="bg-[#EAEAEA] sm:p-2 p-2 rounded-[12px] ">
              <User size={24} color="#06060680" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
