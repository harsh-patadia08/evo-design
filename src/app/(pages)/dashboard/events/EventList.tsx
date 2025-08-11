import Button from "@/app/components/Button";
import { event_category, events } from "@/constants";
import { Events } from "@/interfaces/events";
import {
  LucideLayoutGrid,
  LucideListFilter,
  LucideStretchHorizontal,
  PlusIcon
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import AddEvent from "./dialogs/AddEvent";
import EventsGridView from "./layouts/EventsGridView";
import EventsListView from "./layouts/EventsListView";
import Pagination from "./layouts/Pagination";
import SearchNotFound from "./layouts/SearchNotFound";
import EventsGridViewSkeleton from "./skeletons/EventsGridViewSkeleton";
import EventsListViewSkeleton from "./skeletons/EventsListViewSkeleton";
import PaginationSkeleton from "./skeletons/PaginationSkeleton";

export default function EventList(): React.ReactElement {
  // State to manage the view type (card or list)
  const [cardListView, setCardListView] = useState(false);
  const [eventList, setEventList] = useState<Events[]>(events);
  const [paginatedEvents, setPaginatedEvents] = useState<Events[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPagesArray, setTotalPagesArray] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // other necessary imports and state utilities
  const searchParams = useSearchParams();
  const router = useRouter();
  const layout = searchParams.get("layout");
  const searchQuery = searchParams.get("query")?.toString().trim() || "";

  // Reference to the dialog component
  const eventRef = React.useRef<HTMLButtonElement>(null);
  const [selectedEvent, setSelectedEvent] = useState<Events | null>({} as Events);

  // function to set the initial pagination of events and show 6 events per page
  function initialPagination(event: Events[] = eventList): void {
     setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const startIndex = (currentPage - 1) * 6;
      const endIndex = startIndex + 6;
      setPaginatedEvents(event.slice(startIndex, endIndex));
    }, 500);
  }
  // useEffect to set the initial view based on the layout query parameter
  useEffect(():void => {
    // Filter events based on the search query
    setIsLoading(true);
      if (searchQuery === "") {
        setEventList(events);
      } else {
        const filteredEvents = events.filter((event) => event.event_name.toLowerCase().includes(searchQuery.toLowerCase()) );
        setEventList(filteredEvents);
      }
      initialPagination();
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, [searchQuery]);

  useEffect(() => {
    setIsLoading(true);
    if (layout === "list") {
      setCardListView(true);
    } else if (layout === "grid") {
      setCardListView(false);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [layout]);

  //Function to do client side pagination of the events and per page show 6 events and change the page on type [next, previous]
  const handlePageChange = (type: string) => {
    if (type === "previous" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (type === "next" && currentPage < totalPagesArray.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  // useEffect to set the eventList based on the current page and show 6 events per page
  useEffect((): void => {
   initialPagination();
  }, [currentPage]);

  //useEffect to make total pages array when there is change in events and set the current page to 1
  useEffect((): void => {
    setIsLoading(true);
    const totalPages = Math.ceil(eventList.length / 6);
    setTotalPagesArray(Array.from({ length: totalPages }, (_, index) => index + 1));
    setCurrentPage(1);
    initialPagination();

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [eventList]);

  function handleEventUpdate(event: Events): void {
    setSelectedEvent(event);
    eventRef.current?.click();
  }
  if (eventList.length === 0 && !isLoading) {
    return <SearchNotFound />;
  }
  return (
    <React.Fragment>
      <section className="flex flex-col mt-8 gap-3 justify-between sm:flex-row">
        {/* Events title and description */}
        <div>
          <h3 className="text-2xl font-semibold">Events</h3>
          <p className="text-[#06060680] text-[16px] font-normal leading-[100%]">
            View and manage every events of the future.
          </p>
        </div>

        {/* Filter and view type buttons for web */}
        <div className="hidden gap-2 h-10 justify-between text-[12px] sm-flex-center sm:shrink-0 lg:text-[16px]">
          <Button
            title={
              <span className="sm-flex-center gap-2.5 py-2 font-semibold">
                <LucideListFilter size={16} /> Filter
              </span>
            }
            type="button"
            className="text-[#06060680] bg-transparent border-[#06060680] border-[1px] px-3 sm:px-6 button-primary-hover"
          />
          <Button
            title={
              <span className="sm-flex-center gap-2.5 py-2 font-semibold">
                {cardListView ? (
                  <LucideLayoutGrid size={18} />
                ) : (
                  <LucideStretchHorizontal size={20} />
                )}
                {cardListView ? "Card View" : "List View"}
              </span>
            }
            type="button"
            className="bg-transparent text-[#06060680] border-[#06060680] border-[1px] px-3 sm:px-6 button-primary-hover"
            events={{
              onClick: () => {
                router.push(`?layout=${cardListView ? "grid" : "list"}`);
                console.log("Card/List view toggled:", cardListView);
              },
            }}
          />
          <Button
            title={
              <span className="sm-flex-center text-white px-6 py-2 items-center gap-2.5">
                <PlusIcon size={14} /> Add New Event
              </span>
            }
            events={{
              onClick: () => eventRef.current?.click()
            }}
            type="button"
          />
        </div>

        {/* Filter and view type buttons for mobile/tablet */}
        <div className="flex sm:hidden gap-2 w-full justify-between items-center">
          <div className="h-full flex gap-2">
            <Button
              title={
                <>
                  <span className="text-[#06060680]">
                    <LucideListFilter size={20} />
                  </span>
                </>
              }
              type="button"
              className="bg-transparent border-[#06060680] border-[1px] px-2.5 py-2.5"
            />
            <Button
              title={
                <>
                  <span className="text-[#06060680]">
                    {cardListView ? (
                      <LucideLayoutGrid size={18} />
                    ) : (
                      <LucideStretchHorizontal size={18} />
                    )}
                  </span>
                </>
              }
              type="button"
              className="bg-transparent border-[#06060680] border-[1px] px-2.5 py-2.5"
              events={{
                onClick: () => {
                  router.push(`?layout=${cardListView ? "grid" : "list"}`);
                  console.log("Card/List view toggled:", cardListView);
                },
              }}
            />
          </div>

          <Button
            title={
              <span className="flex-center text-white text-[16px] px-6 py-2 gap-2.5">
                <PlusIcon size={14} /> Add New Event
              </span>
            }
            type="button"
          />
        </div>
      </section>     
      {/* Events list section */}
      <section className=" mt-6 min-h-[80vh]">
        {cardListView ? (
          isLoading ? (
            <EventsListViewSkeleton />
          ) : (
            <EventsListView
              handleEventUpdate={handleEventUpdate}
              events={paginatedEvents}
              event_category={event_category}
            />
          )
        ) : isLoading ? (
          <EventsGridViewSkeleton />
        ) : (
          <EventsGridView
          handleEventUpdate={handleEventUpdate} 
          events={paginatedEvents} 
          event_category={event_category} />
        )}
        {/* Pagination section */}
        {isLoading ? (
          <PaginationSkeleton cardListView={cardListView} />
        ) : (
          <Pagination
            cardListView={cardListView}
            handlePageChange={handlePageChange}
            totalPagesArray={totalPagesArray}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </section>
      <AddEvent eventRef={eventRef} eventCategories={event_category} setEventList={setEventList} selectedEvent={selectedEvent} />
    </React.Fragment>
  );
}
