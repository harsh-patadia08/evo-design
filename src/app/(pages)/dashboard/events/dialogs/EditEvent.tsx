import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EventCategory, Events } from "@/interfaces/events";

interface EditEventProps {
  dialogRef: React.Ref<HTMLButtonElement>;
  eventData?: Events;
  categories?: EventCategory[];
}

export default function EditEvent({ dialogRef }: EditEventProps): React.ReactElement {
  return (
    <Dialog>
    {/* here we used dialogRef to trigger the click event for the dialog */}
      <DialogTrigger ref={dialogRef}></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Events</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
