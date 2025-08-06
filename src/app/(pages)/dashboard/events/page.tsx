"use client";
import React from "react";
import EventsNotFound from "./EventsNotFound";
import { events, event_category } from "@/constants";
import EventList from "./EventList";
export default function EventPage() {
  return (
    <React.Fragment>
      {events.length > 0 ? (
          <EventList events={events} event_category={event_category} />
        ) : <EventsNotFound />
      }
    </React.Fragment>
  );
}
