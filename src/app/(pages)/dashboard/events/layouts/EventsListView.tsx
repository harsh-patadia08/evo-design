import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EventCategory, Events } from "@/interfaces/events";
import { formatDate } from "@/lib/utils";
import { LucideSquarePen, LucideTrash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
interface  EventsListViewProps {
  events: Events[];
  event_category: EventCategory[];
}
//This component is used to render the events list view by using the shadcn table component 
export default function EventsListView({ events, event_category }: EventsListViewProps ): React.ReactElement{

    return (
        <React.Fragment>
            <div className="grid gap-6 h-full bg-white rounded-t-lg">
                {/* shadcn table component start */}
                <Table className="w-full">
                    <TableHeader >
                        <TableRow>
                            <TableHead >Event Name</TableHead>
                            <TableHead >Date</TableHead>
                            <TableHead >Event type</TableHead>
                            <TableHead ></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="text-[#06060680]">
                        {events.map((event) => (
                            <TableRow key={event.id}>
                                <TableCell className="font-medium py-5">
                                    <div className="flex items-center ">
                                        <Image src={event.image_url} alt={event.event_name} width={50} height={50} className="w-12 h-12 object-cover rounded-md mr-2"/>
                                        <span className="text-[#060606] text-[16px] font-medium pr-10 sm:pr-0 sm:text-[18px] ">
                                            {event.event_name}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-sm">{formatDate( event.date)}</TableCell>
                                <TableCell className="text-sm">
                                    {event_category.find(category => category.id === event.event_category_id)?.event_category_name || "Unknown"}
                                </TableCell>
                                <TableCell className="text-sm">
                                    <div className="flex-center gap-2">
                                        <LucideTrash2 size={20} color="#475467" />
                                        <LucideSquarePen size={20} color="#475467" />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </div>
        </React.Fragment>
    )
}