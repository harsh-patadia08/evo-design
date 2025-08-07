import { Events, EventCategory } from "@/interfaces/events";

export const event_category: EventCategory[] = [
  {
    id: 1,
    event_category_name: "birthday party",
  },
  {
    id: 2,
    event_category_name: "movie show",
  },
  {
    id: 3,
    event_category_name: "singing contest",
  },
  {
    id: 4,
    event_category_name: "Dance performance",
  },
  {
    id: 5,
    event_category_name: "Stand-up comedy",
  },
  {
    id: 6,
    event_category_name: "Magic show",
  },
];

export const events: Events[] = [
  {
    id: 1,
    event_name: "John's Birthday Party",
    date: "15-10-2023",
    image_url: "/img/events/img-1.png",
    event_category_id: 1,
  },
  {
    id: 2,
    event_name: "the red one movie show",
    image_url: "/img/events/img-2.png",
    date: "15-10-2023",
    event_category_id: 2,
  },
  {
    id: 3,
    event_name: "Singing Contest",
    image_url: "/img/events/img-3.png",
    date: "15-10-2023",
    event_category_id: 3,
  },
  {
    id: 4,
    event_name: "Dance Performance",
    image_url: "/img/events/img-4.png",
    date: "15-10-2023",
    event_category_id: 4,
  },
  {
    id: 5,
    event_name: "Stand-up Comedy Night",
    image_url: "/img/events/img-5.png",
    date: "15-10-2023",
    event_category_id: 5,
  },
  {
    id: 6,
    event_name: "Magic Show Extravaganza",
    image_url: "/img/events/img-6.png",
    date: "15-10-2023",
    event_category_id: 6,
  },
  {
    id: 7,
    event_name: "John's Birthday Party",
    date: "15-10-2023",
    image_url: "/img/events/img-1.png",
    event_category_id: 1,
  }
];
