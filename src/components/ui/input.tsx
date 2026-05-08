import * as React from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelFor?: string;
  wrapperStyles?: string;
  labelStyles?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      labelFor,
      wrapperStyles = "",
      labelStyles = "",
      icon,
      iconPosition = "left",
      ...props
    },
    ref
  ) => {
    const { t } = useTranslation();

    return (
      <div className={cn("flex flex-col gap-2", wrapperStyles)}>
        {label && (
          <label
            htmlFor={labelFor}
            className={cn("text-base font-semibold", labelStyles)}
          >
            {t(label)}
          </label>
        )}
        <div className="relative flex items-center">
          {icon && iconPosition === "left" && (
            <div
              className={cn(
                "absolute text-muted dark:text-white",
                "left-4"
              )}
            >
              {icon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              "flex w-full flex-1 font-medium rounded-3xl border border-input dark:border-background-dark bg-transparent py-2 px-4 text-base shadow-sm transition-colors placeholder:text-input dark:placeholder:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
              icon ? (iconPosition === "left" ? "pl-12" : "pr-12") : "",
              className
            )}
            id={labelFor}
            ref={ref}
            {...props}
          />
          {icon && iconPosition === "right" && (
            <div
              className={cn(
                "absolute text-muted dark:text-white",
                "right-4"
              )}
            >
              {icon}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };

