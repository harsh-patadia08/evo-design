"use client";
import React, { DOMAttributes } from "react";
import Button from "./components/Button";

export default function NotFound() {
  const buttonEvents: DOMAttributes<HTMLButtonElement> = {
    onClick: () => {
      window.history.back();
    },
  };

  return (
    <section className="h-screen bg-[#FFF1EA] flex flex-col justify-center items-center">
      <h3 className="font-bold text-4xl sm:text-5xl news-reader-italic">
        <span className="text-[#FD5900]">404</span> | Nothing interesting here
      </h3>
      <div className="pt-5">
        <Button
          title={<span className="text-white py-1 sm:py-2 block px-6">Go Back</span>}
          type="button"
          events={buttonEvents}
        />
      </div>
    </section>
  );
}
