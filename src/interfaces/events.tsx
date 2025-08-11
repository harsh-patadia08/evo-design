export interface Events {
  id: number;
  event_name: string;
  date: string | Date;
  image_url: string;
  event_category_id: number;
}
export interface EventCategory {
  id: number;
  event_category_name: string;
}
