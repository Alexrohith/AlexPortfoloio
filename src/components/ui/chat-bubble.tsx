
import * as React from "react";
import { cn } from "@/lib/utils";

interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "sent" | "received";
}

export const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ className, variant = "received", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex w-max max-w-[80%] items-start gap-2 rounded-lg px-4 py-2",
        variant === "sent" ? "ml-auto" : "mr-auto",
        variant === "sent"
          ? "bg-primary text-primary-foreground"
          : "bg-muted",
        className
      )}
      {...props}
    />
  )
);
ChatBubble.displayName = "ChatBubble";

interface ChatBubbleAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  fallback: string;
}

export const ChatBubbleAvatar = React.forwardRef<HTMLDivElement, ChatBubbleAvatarProps>(
  ({ className, src, fallback, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted",
        className
      )}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={fallback}
          className="rounded-full object-cover"
        />
      ) : (
        <span className="text-xs font-medium">{fallback}</span>
      )}
    </div>
  )
);
ChatBubbleAvatar.displayName = "ChatBubbleAvatar";

interface ChatBubbleMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "sent" | "received";
  isLoading?: boolean;
}

export const ChatBubbleMessage = React.forwardRef<HTMLDivElement, ChatBubbleMessageProps>(
  ({ className, variant = "received", isLoading, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    >
      {isLoading ? (
        <div className="flex gap-1">
          <div className="h-2 w-2 animate-bounce rounded-full bg-current"></div>
          <div className="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:0.2s]"></div>
          <div className="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:0.4s]"></div>
        </div>
      ) : (
        children
      )}
    </div>
  )
);
ChatBubbleMessage.displayName = "ChatBubbleMessage";
