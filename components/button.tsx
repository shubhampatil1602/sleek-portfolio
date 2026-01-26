import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  as?: "button" | "a";
  active?: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({
  children,
  type = "submit",
  className,
  active = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        "relative overflow-hidden rounded-[6px] border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-sm text-neutral-700 shadow-buttonLightInset transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-buttonDarkInset",
        className,
        active && "font-semibold",
      )}
      {...props}
    >
      {active && (
        <span className="absolute inset-0 border-neutral-500 bg-[image:repeating-linear-gradient(315deg,_rgba(38,_38,_38,_0.12)_0,_rgba(38,_38,_38,_0.12)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] dark:border-neutral-400 dark:bg-[image:repeating-linear-gradient(315deg,_rgba(250,_250,_250,_0.09)_0,_rgba(250,_250,_250,_0.09)_1px,_transparent_0,_transparent_50%)]" />
      )}
      {children}
    </button>
  );
};
