import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LucideSquarePen, LucideTrash2 } from "lucide-react";

export default function EventsListViewSkeleton(): React.ReactElement {
  return (
    <div className="grid gap-6 h-full bg-white rounded-t-lg">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Event Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Event type</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-[#06060680]">
          {Array.from({ length: 6 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell className="py-5">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#d8af9b] rounded-md mr-2 animate-pulse"></div>
                  <span className="w-24 h-4 bg-[#d8af9b] rounded-md animate-pulse"></span>
                </div>
              </TableCell>
              <TableCell className="text-sm">
                <div className="w-24 h-4 bg-[#d8af9b] rounded-md animate-pulse"></div>
              </TableCell>
              <TableCell className="text-sm">
                <div className="w-24 h-4 bg-[#d8af9b] rounded-md animate-pulse"></div>
              </TableCell>
              <TableCell className="text-sm">
                <div className="flex-center gap-2">
                    <span className="w-6 h-6 bg-[#d8af9b] rounded-full animate-pulse"></span>
                    <span className="w-6 h-6 bg-[#d8af9b] rounded-full animate-pulse"></span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
