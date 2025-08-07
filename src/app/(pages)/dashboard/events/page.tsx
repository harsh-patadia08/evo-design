"use client";
import React from "react";
import EventsNotFound from "./EventsNotFound";
import { events } from "@/constants";
import EventList from "./EventList";
export default function EventPage() {
  return (
    <React.Fragment>
      {events.length > 0 ? (
          <EventList />
        ) : <EventsNotFound />
      }
    </React.Fragment>
  );
}
