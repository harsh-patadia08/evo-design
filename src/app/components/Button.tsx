import { LucidePlus } from "lucide-react";
import React, { DOMAttributes } from "react";

export default function Button({
  title,
  type,
  events,
  className = "bg-gradient-to-r from-[#FD5900] to-[#FFB48C] shadow-[4px_4px_12px_0px_#00000040_inset] hover:shadow-[0_8px_20px_0px_#EA520229] active:shadow-[0_8px_20px_0px_#EA520229]"
}: {
  title: string | React.ReactElement | React.ReactNode;
  type: "reset" | "button" | "submit";
  events?: DOMAttributes<HTMLButtonElement> ;
  className?: string;
}): React.ReactElement {
  return (
    <button
      id="login_button"
      name="login_button"
      type={type}
      { ...events}
      className={"rounded-[8px] " + className}
    >
      {title}
    </button>
  );
}
