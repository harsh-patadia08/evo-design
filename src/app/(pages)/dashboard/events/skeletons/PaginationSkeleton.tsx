import Button from "@/app/components/Button";
import React from "react";

interface PaginationSkeletonProps {
  cardListView: boolean;
}
export default function PaginationSkeleton({cardListView}: PaginationSkeletonProps ): React.ReactElement {
    const classes = `flex justify-between items-center  ${cardListView? "rounded-b-lg bg-white p-4 border-t border-[#EAEAEA]": 'my-4'}`;
    return (
        <div className={classes}>
            <Button title={<span className="w-2 h-2 px-3"></span>} type="button"
            className={`bg-[#d8af9b] rounded-sm  py-1.5 px-12 animate-pulse`}/>
            <div className="flex gap-2">
                {[1,2,3,4].map((i) => (
                    <Button key={i} title={<span className="w-2 h-2 px-3"></span>} type="button"
                    className="bg-[#d8af9b] rounded-sm py-1.5 px-1.5 animate-pulse"/>
                    ))}
            </div>
            <Button title={<span className="w-2 h-2 px-3"></span>} type="button"
            className={`bg-[#d8af9b] rounded-sm  py-1.5 px-12 animate-pulse`}/>
        </div>
  );
}