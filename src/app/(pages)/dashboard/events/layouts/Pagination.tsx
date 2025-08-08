import Button from '@/app/components/Button';
import { LucideArrowLeft, LucideArrowRight } from 'lucide-react';
import React from 'react';


interface PaginationProps {
  cardListView: boolean;
  handlePageChange: (type: string) => void;
  totalPagesArray: number[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}
export default function Pagination({
     cardListView,
     handlePageChange,
     totalPagesArray,
     setCurrentPage,
     currentPage,
    }: PaginationProps):React.ReactElement {
      const classes = `flex justify-between items-center  ${cardListView? "rounded-b-lg bg-white p-4 border-t border-[#EAEAEA]": 'my-4'}`;
      return (
        <div className={classes}>
          <Button
            title={
              <>
                <span className="hidden sm-flex-center gap-2.5 py-2 px-6 font-semibold">
                  <LucideArrowLeft size={16} /> Previous
                </span>
                <span className="flex sm:hidden font-semibold px-2.5 py-2.5">
                  <LucideArrowLeft size={16} />
                </span>
              </>
            }
            events={{
              onClick: () => handlePageChange("previous"),
            }}
            type="button"
            className="bg-transparent text-[16px] text-[#06060680] font-medium border-[#EAEAEA] border-[1px] rounded-md hover:bg-[#FD5900] hover:text-white"
          />
          <div className="flex gap-2">
            {totalPagesArray.map((page) => (
              <Button
                key={page}
                title={page.toString()}
                type="button"
                className={`${
                  currentPage === page
                    ? "bg-[#FD5900] text-white"
                    : "bg-transparent text-[#06060680]"
                }
                text-[16px] font-medium border-[#EAEAEA] border-[1px] rounded-md py-1.5 px-4 hover:bg-[#FD5900] hover:text-white`}
                events={{
                  onClick: () => {
                    setCurrentPage(page);
                  },
                }}
              />
            ))}
          </div>
          <Button
            title={
              <>
                <span className="hidden sm-flex-center gap-2.5 py-2 px-6 font-semibold">
                  <LucideArrowRight size={16} /> Next
                </span>
                <span className="flex sm:hidden font-semibold px-2.5 py-2.5">
                  <LucideArrowRight size={16} />
                </span>
              </>
            }
            events={{
              onClick: () => handlePageChange("next"),
            }}
            type="button"
            className="bg-transparent text-[16px] text-[#06060680] font-medium border-[#EAEAEA] border-[1px] rounded-md hover:bg-[#FD5900] hover:text-white"
          />
        </div>
      )
}