
import * as React from "react";
import { cn } from "@/lib/utils";

const ChatMessageList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-4", className)}
    {...props}
  />
));
ChatMessageList.displayName = "ChatMessageList";

export { ChatMessageList };
