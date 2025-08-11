import Button from "@/app/components/Button";
import DatePicker from "@/components/ui/date-picker";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import DropdownCustom from "@/components/ui/dropdown-custom";
import { EventCategory, Events } from "@/interfaces/events";
import React, { Dispatch, DragEvent, ReactElement, Ref, SetStateAction, useEffect, useRef, useState } from "react";

interface AddEventProps {
  eventRef: Ref<HTMLButtonElement>;
  setEventList: Dispatch<SetStateAction<Events[]>>;
  eventCategories: EventCategory[];
  selectedEvent: Events | null;
}



export default function AddEvent({eventRef, eventCategories, selectedEvent, setEventList }: AddEventProps): ReactElement {
  const [eventData, setEventData] = useState<Events>(selectedEvent || {id: Date.now()} as Events);
  const [isOpen, setIsOpen] = useState(false);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log("Drag over event triggered", eventData);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    console.log("image file.", file);
    const reader = new FileReader();
    reader.onload = () => {
      setEventData((data) => {
        return {
          ...data,
          image_url: reader.result as string,
        };
      });
    };
    reader.readAsDataURL(file);
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setEventData((data) => ({
          ...data,
          image_url: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    if (selectedEvent) {
      console.log("selectedEvent", selectedEvent);
      setEventData(selectedEvent);
    }

    return () => {
      setEventData({} as Events);
    };
  }, [selectedEvent]);

  useEffect(() => {
    if(isOpen == false) {
      console.log("eventData updateing id dialog is closed", eventData);
      setEventData({} as Events);
    }
  },[isOpen])
  function handleSubmit(e: React.FormEvent): void {
    console.log("eventData", eventData);
    e.preventDefault();
    setEventList((list) => {
      if (selectedEvent) {
        const updatedList = list.map((item) => {
          if (item.id === eventData.id) {
            return eventData;
          }
          return item;
        });
        return updatedList;
      } else {
        return [...list, {...eventData, id: Date.now(), date: eventData.date.toLocaleString("default").split(",")[0] }];
      } 
    });
    setIsOpen(false);
  }

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {/* here we used dialogRef to trigger the click event for the dialog */}
        <DialogTrigger ref={eventRef}></DialogTrigger>
        <form className="" onSubmit={handleSubmit}>
          <DialogContent className="p-4 bg-white">
            <DialogHeader className="grid-start-1 gap-2">
              <DialogTitle className="mb-2">{selectedEvent? "Edit Event" : "New Event"}</DialogTitle>
            </DialogHeader>
            <div className={`flex flex-col justify-center items-center gap-3 h-[240px] rounded-md ${!eventData?.image_url && "dashed-border-2" }`}
              style={{ backgroundImage: `url(${eventData.image_url})`, backgroundSize: "cover", backgroundPosition: "center"}}
              onDragOver={handleDragOver} onDrop={handleDrop} onClick={() => inputFileRef.current?.click()} >
              <input type="file" className="hidden" ref={inputFileRef} onClick={(e) => e.stopPropagation()} onChange={handleImageChange} />
              {eventData.image_url ? ( <Button title="Change Image"
               type="button"
               className="button-secondary py-1.5 px-4 text-center" />
              ) : (
                <>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <rect x="34.6675" y="18.6666" width="10.6667" height="10.6667" rx="5.33333" stroke="#060606" strokeOpacity="0.5" strokeWidth="2"/>
                    <path stroke="#060606" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      d="M12.5825 45.8703L17.2196 41.2332C21.5529 36.8999 28.5787 36.8999 32.9121 41.2332L37.5491 45.8703M37.5491 45.8703L39.4274 43.992C42.8877 40.5316 48.5724 40.7895 51.7053 44.5489L52.8064 45.8703M37.5491 45.8703L44.4842 52.8054M8.94198 40.1322C7.68731 34.7833 7.68731 29.2167 8.94198 23.8678C10.6793 16.4613 16.4623 10.6783 23.8688 8.94097C29.2177 7.6863 34.7843 7.6863 40.1332 8.94097C47.5396 10.6783 53.3227 16.4613 55.06 23.8678C56.3146 29.2167 56.3146 34.7833 55.06 40.1321C53.3227 47.5386 47.5396 53.3216 40.1332 55.059C34.7843 56.3136 29.2177 56.3136 23.8688 55.059C16.4623 53.3216 10.6793 47.5386 8.94198 40.1322Z"/>
                  </svg>
                  <div>Drop an image here or click to upload !</div>
                </>
              )}
            </div>
            <div className="grid-start-1">
              <label htmlFor="event_name" className="text-[16px] font-normal text-[#06060680]"> Event Name </label>
              <input type="text" id="event_name" name="event_name" value={eventData.event_name} onChange={(e) => setEventData({ ...eventData, [e.target.name]: e.target.value })} placeholder="Ex. jhondoe@mailsample.com" 
              className="input-field px-2 py-2 sm:py-3" />
            </div>
            <div className="grid-start-1 ">
              <label htmlFor="event_name" className="text-[16px] font-normal text-[#06060680]" >Event Date </label>
              <DatePicker date={eventData.date} setDate={setEventData} label="Event Date" />
            </div>
            <div className="grid-start-1">
              <label htmlFor="event_name" className="text-[16px] font-normal text-[#06060680]" > Event Category</label>
              <DropdownCustom dropdownItems={eventCategories} setEventData={setEventData}  eventData={eventData}/>
            </div>
            <DialogFooter className="grid grid-cols-2 gap-4">
              <DialogClose className="button-secondary py-2.5 px-10">
                Cancel
              </DialogClose>
              <Button title="Save" type="submit" events={{ onClick: handleSubmit }} className="font-medium text-lg text-white button-primary rounded-sm py-2.5 px-10" /> 
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}