import { EventCategory, Events } from "@/interfaces/events";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Check, ChevronDown } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "./button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command";

interface DropdownCustomProps {
  dropdownItems: EventCategory[];
  eventData: Events;
  setEventData: React.Dispatch<React.SetStateAction<Events>>;
}

export default function DropdownCustom({ dropdownItems, eventData, setEventData }: DropdownCustomProps) {
  const [value, setValue] = React.useState<number | null>(null);
  const [open, setOpen] = React.useState(false);

  function handleSelect(value: string) {
    console.log(value, "value of select");
    setValue(parseInt(value));
    setEventData((data: Events) => ({ ...data, event_category_id: parseInt(value) }));
    setOpen(false);
  }
  useEffect(() => {
    console.log("use Effect working")
    if (eventData?.event_category_id) {
      setValue(eventData?.event_category_id);
    }
  }, [eventData]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="input-field py-3.5! h-full">
        <Button role="button" className="justify-between"> {value ? dropdownItems[value - 1].event_category_name : "Select a option.."} <ChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="grid h-full p=0!" >
        <Command className="w-full" >
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup className="w-full h-full">
              {dropdownItems.map((item: EventCategory) => (
                <CommandItem
                  key={item.id}
                  value={item.id.toString()}
                  onSelect={handleSelect}
                  aria-selected={value === item.id}
                >
                  {item.event_category_name}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
