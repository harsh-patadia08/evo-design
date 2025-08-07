import React from "react";

export default function EventsGridViewSkeleton(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="bg-[#d8af9b] animate-pulse h-72 rounded-lg"></div>
      ))}
    </div>
  );
}