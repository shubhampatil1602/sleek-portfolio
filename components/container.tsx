import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "relative mx-auto h-full w-full max-w-4xl bg-white dark:bg-black",
        className,
      )}
    >
      {children}
    </div>
  );
};
