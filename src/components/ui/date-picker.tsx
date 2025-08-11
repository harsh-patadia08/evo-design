import { Events } from '@/interfaces/events'
import { formatDate } from '@/lib/utils'
import { Calendar1Icon } from 'lucide-react'
import React from 'react'
import { Button } from './button'
import { Calendar } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

interface DatePickerProps {
    date?: any,
    setDate: React.Dispatch<React.SetStateAction<Events>>,
    label: string
    className?: string
}

export default function DatePicker({ date, setDate, label}: DatePickerProps) {

  console.log("date", date);
    function handleSelect(selectedDate:Date) {
      console.log("selectedDate", formatDate(selectedDate.toString()));
        setDate(
            (prev) => (
                {
                    ...prev,
                    date: selectedDate
                })
        )
    }
  return (
    <Popover>
      <PopoverTrigger asChild className='input-field h-full py-3.5' >
        <Button data-empty={!date} className=" justify-between text-left " >
          {date ? date.toLocaleString("default").split(",")[0] : <span>{label}</span>}
          <Calendar1Icon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={new Date(date)} onSelect={handleSelect} required />
      </PopoverContent>
    </Popover>
  )
}
