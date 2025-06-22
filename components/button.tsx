import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  as?: "button" | "a";
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({
  children,
  type = "submit",
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        "rounded-[6px] border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-sm text-neutral-700 shadow-buttonLightInset transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-buttonDarkInset",
        className,
      )}
    >
      {children}
    </button>
  );
};
