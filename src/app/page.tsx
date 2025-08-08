"use client";

import Link from "next/link";
import React from "react";

export default function Home(): React.ReactElement {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Link href="/login" >Go to login page</Link>
      </div>
    </>
  );
}
