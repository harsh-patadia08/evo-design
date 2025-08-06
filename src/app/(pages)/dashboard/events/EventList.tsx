import React, { useState } from "react";
import { EventCategory, Events } from "@/interfaces/events";
import Button from "@/app/components/Button";
import {
  LucideLayoutGrid,
  LucideLayoutList,
  LucideListFilter,
  PlusIcon,
} from "lucide-react";

export default function EventList({
  events,
  event_category,
}: {
  events: Events[];
  event_category: EventCategory[];
}): React.ReactElement {
  const [cardListView, setCardListView] = useState(true);
  return (
    <React.Fragment>
      <section className="flex flex-col mt-8 gap-3 justify-between items-center sm:flex-row">
        <div>
          <h3 className="text-2xl font-semibold">Events</h3>
          <p className="text-[#06060680] text-[16px] font-normal leading-[100%]">
            View and manage every events of the future.
          </p>
        </div>
        <div className="hidden sm:flex gap-2 h-10 justify-between items-center sm:justify-center">
          <Button
            title={
              <>
                <span className="hidden sm:flex text-[#06060680] text-[16px] justify-center items-center gap-2.5 py-2 font-semibold">
                  <LucideListFilter size={16} /> Filter
                </span>

                <span className="flex sm:hidden text-[#06060680] text-[16px] justify-center items-center font-semibold">
                  <LucideListFilter size={18} />
                </span>
              </>
            }
            type="button"
            className="bg-transparent border-[#06060680] border-[1px] px-3 sm:px-6"
          />
          <Button
            title={
              <>
                <span className="hidden sm:flex text-[#06060680] text-[16px] justify-center items-center gap-2.5 py-2">
                  {cardListView ? (
                    <LucideLayoutGrid size={18} />
                  ) : (
                    <LucideLayoutList size={18} />
                  )}
                  {cardListView ? "Card View" : "List View"}
                </span>
                <span className="sm:hidden text-[#06060680] text-[16px] justify-center items-center">
                  {cardListView ? (
                    <LucideLayoutGrid size={18} />
                  ) : (
                    <LucideLayoutList size={18} />
                  )}
                </span>
              </>
            }
            type="button"
            className="bg-transparent border-[#06060680] border-[1px] px-3 sm:px-6"
            events={{
              onClick: () => {
                setCardListView(!cardListView);
                console.log("Card/List view toggled:", cardListView);
              },
            }}
          />
          <Button
            title={
              <span className="flex text-white text-[16px] px-6 py-2 justify-center items-center gap-2.5">
                <PlusIcon size={14} /> Add New Event
              </span>
            }
            type="button"
          />
        </div>
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
                      <LucideLayoutList size={18} />
                    )}
                  </span>
                </>
              }
              type="button"
              className="bg-transparent border-[#06060680] border-[1px] px-2.5 py-2.5"
              events={{
                onClick: () => {
                  setCardListView(!cardListView);
                  console.log("Card/List view toggled:", cardListView);
                },
              }}
            />
          </div>

          <Button
            title={
              <span className="flex text-white text-[16px] px-6 py-2 justify-center items-center gap-2.5">
                <PlusIcon size={14} /> Add New Event
              </span>
            }
            type="button"
          />
        </div>
      </section>
      <section></section>
    </React.Fragment>
  );
}
