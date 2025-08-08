import React from "react";
import Image from "next/image";

export default function SearchNotFound() {
  return (
    <>
      <section className="flex flex-col gap-3.5 mt-5 leading-9 h-[85vh] justify-center lg:h-[30rem] ">
        <div className="flex flex-col justify-center items-center">
          <Image src="/img/search-not-found.png" alt="bird" width={180} height={180} />
          <p className="text-[#06060680] text-center text-2xl font-normal leading-9 sm:w-[500px] max-w-[380px]">
            No events found !
          </p>
          <p className="text-[#06060680] text-center text-2xl font-normal leading-9 sm:w-[500px] max-w-[380px]">
            try searching with different word.
          </p>
        </div>
      </section>
    </>
  );
}
