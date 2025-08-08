import Button from "@/app/components/Button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { EventCategory, Events } from "@/interfaces/events";
import React, { Dispatch, DragEvent, ReactElement, Ref, SetStateAction, useRef } from "react";

interface AddEventProps {
  addEventRef: Ref<HTMLButtonElement>;
  eventData: Events;
  
  setEventData: Dispatch<SetStateAction<Events>>;
  eventCategories?: EventCategory[];
}



export default function AddEvent({ addEventRef, eventData, setEventData, eventCategories }: AddEventProps): ReactElement {

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

  return (
    <div>
      <Dialog>
        {/* here we used dialogRef to trigger the click event for the dialog */}
        <DialogTrigger ref={addEventRef}></DialogTrigger>
        <form className="">
          <DialogContent className="p-4 bg-white">
            <DialogHeader className="grid grid-cols-1 gap-2">
              <DialogTitle className="mb-2">New Event</DialogTitle>
              <DialogDescription className="flex flex-col gap-3">
                  <div
                    className="flex flex-col justify-center items-center gap-3 h-[240px] border-dashed border-[#06060680] border-[2px] rounded-md"
                    style={{ backgroundImage: `url(${eventData.image_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    onDragOver={handleDragOver} onDrop={handleDrop}  onClick={() => inputFileRef.current?.click()}>
                      <input type="file" className="hidden" ref={inputFileRef} onClick={(e) => e.stopPropagation()} onChange={handleImageChange} />
                      {!eventData.image_url && 
                      <>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="34.6675" y="18.6666" width="10.6667" height="10.6667" rx="5.33333" stroke="#060606" strokeOpacity="0.5" strokeWidth="2" />
                        <path d="M12.5825 45.8703L17.2196 41.2332C21.5529 36.8999 28.5787 36.8999 32.9121 41.2332L37.5491 45.8703M37.5491 45.8703L39.4274 43.992C42.8877 40.5316 48.5724 40.7895 51.7053 44.5489L52.8064 45.8703M37.5491 45.8703L44.4842 52.8054M8.94198 40.1322C7.68731 34.7833 7.68731 29.2167 8.94198 23.8678C10.6793 16.4613 16.4623 10.6783 23.8688 8.94097C29.2177 7.6863 34.7843 7.6863 40.1332 8.94097C47.5396 10.6783 53.3227 16.4613 55.06 23.8678C56.3146 29.2167 56.3146 34.7833 55.06 40.1321C53.3227 47.5386 47.5396 53.3216 40.1332 55.059C34.7843 56.3136 29.2177 56.3136 23.8688 55.059C16.4623 53.3216 10.6793 47.5386 8.94198 40.1322Z" stroke="#060606" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div>Drop an image here or click to upload !</div>
                      </>}
                  </div>
                  <div className="grid grid-cols-1 items-start gap-0.5">
                    <label htmlFor="event_name" className="text-[16px] font-normal text-[#06060680]" >
                      Event Name</label>
                    <input type="text" id="event_name" name="event_name" placeholder="Ex. jhondoe@mailsample.com"
                      className="text-[#06060680] border-[#06060680] border-[1.5px] px-2 bg-white py-2 sm:py-3 rounded-[8px] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#06060680] pr-18 focus:outline-1 focus:outline-[#FFB48C] focus:border-[#FFB48C]"/>
                  </div>
                  <div className="grid grid-cols-1 items-start gap-0.5">
                    <label htmlFor="event_name" className="text-[16px] font-normal text-[#06060680]" >
                      Event Date</label>
                    <input type="text" id="event_name" name="event_name" placeholder="Ex. jhondoe@mailsample.com"
                      className="text-[#06060680] border-[#06060680] border-[1.5px] px-2 bg-white py-2 sm:py-3 rounded-[8px] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#06060680] pr-18 focus:outline-1 focus:outline-[#FFB48C] focus:border-[#FFB48C]"/>
                  </div>
                  <div className="grid grid-cols-1 items-start gap-0.5">
                  <label htmlFor="event_name" className="text-[16px] font-normal text-[#06060680]" >
                    Event Category</label>
                  <select id="event_category" name="event_category" className="appearance-none text-[#06060680] border-[#06060680] border-[1.5px] px-2 bg-white py-2 sm:py-3 rounded-[8px] focus:outline-1 focus:outline-[#FFB48C] focus:border-[#FFB48C]  after:text-black after:block">
                    {eventCategories?.map((category) => (
                      <option className=" appearance-none text-[#06060680] bg-white flex py-2 sm:py-30 rounded-[8px]" key={category.id} value={category.id}>
                        {category.event_category_name}
                      </option>
                    ))}
                  </select>
                </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button title="Cancel" type="reset" className="font-medium text-lg rounded-sm py-2.5 px-10 text-[#06060680] bg-[#EAEAEA]"/>
                    <Button title="Save" type="submit" className="font-medium text-lg rounded-sm py-2.5 px-10 text-white bg-gradient-to-br from-[#FD5900] to-[#FFB48C] bg-[#FD5900]"/>
                  </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}