import React, { DOMAttributes } from "react";
import Button from "@/app/components/Button";
import { PlusIcon } from "lucide-react";
import Image from "next/image";

export default function EventsNotFound() {
    
  const ButtonEvents: DOMAttributes<HTMLButtonElement> = {
    onClick: (event) => {
        event.preventDefault();
      console.log("the event triggered is:", event.type);
    },
    onChange:()=>{
        console.log();
        
    }
  };

  return (
    <>
      <section className="flex flex-col mt-8">
        <h3 className="text-2xl font-semibold">Events</h3>
        <p className="text-[#06060680] text-[16px] font-normal leading-[100%]">
          View and manage every events of the future.
        </p>
      </section>
      <section className="flex flex-col gap-3.5 mt-5 leading-9 h-[30rem] justify-center">
        <div className="flex flex-col justify-center items-center">
          <Image src="/img/bird.png" alt="bird" width={180} height={180} />
          <p className="text-[#06060680] text-center text-2xl font-normal leading-9 sm:w-[500px] max-w-[380px]">
            No Event’s to show yet ! add new event here...
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Button
            title={
              <span className="flex text-white text-[16px] px-6 justify-center items-center gap-2.5">
                <PlusIcon size={18} className="hidden sm:block" /> Add New Event
              </span>
            }
            type="button"
            events={ButtonEvents}
          />
        </div>
      </section>
    </>
  );
}
