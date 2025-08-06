"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Link href="/login" >Go to login page</Link>
      </div>
    </>
  );
}
