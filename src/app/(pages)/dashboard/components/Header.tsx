"use client";
import { LucideArrowLeft, LucideSearch, LucideX, User } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, {useEffect, useState } from "react";

export default function Header(): React.ReactElement {
  // function to debounce the search on change
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchActive, setSearchActive] = useState<boolean>(false);

  // states to manage the search params
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams);

  // Function to handle search input change with debounce
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();
    setSearchInput(inputValue);
  };

  useEffect(() => {
    if (searchInput === "") {
      params.delete('query');
      setSearchInput("");
    } else {
      params.set('query', searchInput);
    }
    replace(`${pathName}?${params.toString()}`);
  }, [searchInput]);

  function SarchField(): React.ReactElement {
    return (
      <div className="flex justify-around items-center py-1.5 w-full sm:hidden">
          <span onClick={() => setSearchActive(false)}>
            <LucideArrowLeft size={16} color="black" className="text-black"
            />
          </span>
          {/* show this input only on large screen */}
          <input
            className="flex text-[#06060680] py-2.5 focus:outline-0 sm:hidden"
            onChange={handleSearch}
            value={searchInput}
            type="text"
          />
          {/* show this icon only on small screen */}
          <span className="cursor-pointer" onClick={() => setSearchInput("")}>
            <LucideX size={16} color="black" className="text-black"
            />
          </span>
      </div>
    );
  }
  return (
    <>
      <header className="bg-white rounded-2xl shadow-[4px_4px_12px_0px_#00000040]">
          { searchActive ? <SarchField /> :
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
                {/* show this input only on large screen */}
                <input
                  className="hidden sm:flex text-[#06060680] rounded-[12px] border-[#EAEAEA] border-2 pl-12 py-2.5 sm:w-[320px] sm:h-[40px] placeholder:text-[16px]:font-[400] placeholder:text-[#06060680] focus:outline-1 focus:outline-[#FFB48C] focus:border-[#FFB48C] caret-[#FD5900]"
                  onChange={handleSearch}
                  value={searchInput}
                  placeholder="Search here...."
                  type="text"
                />
                {/* show this icon only on large screen */}
                <LucideSearch
                  size={24}
                  color="black"
                  className="hidden sm:block absolute top-2 left-3"
                />
                {/* show this icon only on small screen */}
                <div
                  onClick={() => setSearchActive(true)}
                  className="flex sm:hidden p-2 rounded-[12px] border-[#EAEAEA] border-2"
                >
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
        }
      </header>
    </>
  );
}
