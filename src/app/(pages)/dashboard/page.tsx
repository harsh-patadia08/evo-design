"use client";
import Header from "@/app/(pages)/dashboard/Header";
import EventsNotFound from "@/app/(pages)/dashboard/EventsNotFound";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="h-screen w-full flex sm:p-2 selection:bg-[#FFB48C] selection:text-amber-50">
      <main className="mx-auto sm:w-[1200px] p-3">
        <Header search={search} setSearch={setSearch} />
        <EventsNotFound />
      </main>
    </div>
  );
}