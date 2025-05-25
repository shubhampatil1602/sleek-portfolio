import { cn } from "@/lib/utils";

export const Button = ({
  children,
  type = "submit",
  className,
}: {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  as?: "button" | "a";
}) => {
  return (
    <button
      type={type}
      className={cn(
        "shadow-buttonLightInset dark:shadow-buttonDarkInset rounded-[6px] border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-sm text-neutral-700 transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200",
        className,
      )}
    >
      {children}
    </button>
  );
};
