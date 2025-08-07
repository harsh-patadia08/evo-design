import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatDate(dateString: string): string {
  // dateString will be in the format "15-10-2023" Convert the date string to a Ex:- 2, december 2023
  const date = new Date(dateString.split("-").reverse().join("-"));
  
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  let formatedDate: string =  date.toLocaleDateString('en-US', options);
  // format the date like Ex: "2, December 2023" currently it is "december, 15 2023"
  formatedDate = formatedDate.split(",")[0].split(" ").reverse().join(", ") + formatedDate.split(",")[1];

  return formatedDate;
}