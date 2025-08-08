import Link from "next/link";
import React from "react";

export default function Dashboard():React.ReactElement {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 mt-8"> Dashboard</h1>
      <Link href="/dashboard/events" className="text-[#FD5900] hover:underline">
        Go to Events
      </Link>
    </div>
  );
}
