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
        "mx-auto w-full max-w-4xl bg-white px-6 dark:bg-black",
        className,
      )}
    >
      {children}
    </div>
  );
};
