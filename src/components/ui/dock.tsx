
import * as React from "react";
import { cn } from "@/lib/utils";

interface DockProps extends React.HTMLAttributes<HTMLDivElement> {}
interface DockItemProps extends React.HTMLAttributes<HTMLDivElement> {}
interface DockLabelProps extends React.HTMLAttributes<HTMLDivElement> {}
interface DockIconProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex h-16 items-end gap-4 rounded-2xl bg-white/20 px-4 backdrop-blur dark:bg-black/20",
          className
        )}
        {...props}
      />
    );
  }
);
Dock.displayName = "Dock";

export const DockItem = React.forwardRef<HTMLDivElement, DockItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex aspect-square h-12 items-center justify-center rounded-lg bg-white/50 transition-all duration-300 ease-in-out hover:h-14 dark:bg-white/10",
          className
        )}
        {...props}
      />
    );
  }
);
DockItem.displayName = "DockItem";

export const DockLabel = React.forwardRef<HTMLDivElement, DockLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute -top-10 rounded-lg bg-black/50 px-3 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white/10",
          className
        )}
        {...props}
      />
    );
  }
);
DockLabel.displayName = "DockLabel";

export const DockIcon = React.forwardRef<HTMLDivElement, DockIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("h-8 w-8 transition-all group-hover:h-10 group-hover:w-10", className)}
        {...props}
      />
    );
  }
);
DockIcon.displayName = "DockIcon";
