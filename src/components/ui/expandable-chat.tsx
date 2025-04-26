
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface ExpandableChatProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  position?: "bottom-right" | "bottom-left";
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const ExpandableChat = React.forwardRef<HTMLDivElement, ExpandableChatProps>(
  ({ size = "md", position = "bottom-right", icon, children, className, ...props }, ref) => {
    const sizeClasses = {
      sm: "w-[300px]",
      md: "w-[380px]",
      lg: "w-[440px]",
    };

    const positionClasses = {
      "bottom-right": "right-4 bottom-4",
      "bottom-left": "left-4 bottom-4",
    };

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className={cn(
              "fixed z-50 h-12 w-12 rounded-full shadow-lg",
              positionClasses[position]
            )}
          >
            {icon}
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className={cn(
            "flex h-[600px] flex-col p-0",
            sizeClasses[size],
            className
          )}
          {...props}
        >
          {children}
        </SheetContent>
      </Sheet>
    );
  }
);
ExpandableChat.displayName = "ExpandableChat";

const ExpandableChatHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border-b px-6 py-4", className)}
    {...props}
  />
));
ExpandableChatHeader.displayName = "ExpandableChatHeader";

const ExpandableChatBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 overflow-y-auto p-4", className)}
    {...props}
  />
));
ExpandableChatBody.displayName = "ExpandableChatBody";

const ExpandableChatFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border-t p-4", className)}
    {...props}
  />
));
ExpandableChatFooter.displayName = "ExpandableChatFooter";

export {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
};
