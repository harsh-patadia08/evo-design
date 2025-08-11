import { EventCategory, Events } from '@/interfaces/events';
import { formatDate } from '@/lib/utils';
import { LucideSquarePen, LucideTrash2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface EventsGridViewProps { 
    events: Events[];
    event_category: EventCategory[];
    handleEventUpdate: (event: Events) => void;
}
export default function EventsGridView( { events, event_category,handleEventUpdate }: EventsGridViewProps ): React.ReactElement {

    // Function to find the category name based on the category ID
    function findCategory(category_id: number): EventCategory | undefined {
        return event_category.find((category) => category.id === category_id);
    }
  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
    {events.map((event) => (
        <div key={event.id} className="bg-white p-4 rounded-lg h-72">
        <Image src={event.image_url} alt={event.event_name} width={350} height={180} className="w-full h-40 object-cover rounded-md mb-4" />
        <div className="flex justify-between">
            <h4 className="text-xl smtext-2xl font-normal">{event.event_name}</h4>
            <div className="flex-center gap-2">
            <LucideTrash2 size={20} color="#06060680" />
            <LucideSquarePen onClick={() => handleEventUpdate(event)} size={20} color="#06060680" />
            </div>
        </div>
        <div className="mt-2 flex gap-2 items-center">
            <p className="text-[12px] text-[#FD5900] bg-[#FFF1EA] px-2 py-1 rounded-[8px]">{findCategory(event.event_category_id)?.event_category_name}</p>
            <p className="text-sm text-gray-500">{formatDate(event.date)}</p>
        </div>
        </div>
    ))}
    </div>
  )
}

