import * as React from "react"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next";


export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  wrapperStyles?: string;
  label?: string;
  labelFor?: string;
  labelStyles?: string;
  textareaStyles?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, wrapperStyles, label, labelFor, labelStyles, ...props }, ref) => {
    const { t } = useTranslation();
    return (
      <div
        className={cn(
            'flex flex-col gap-2',
            wrapperStyles
        )}
      >
        {label && (
          <label
            htmlFor={labelFor}
            className={cn("text-base font-semibold", labelStyles)}
          >
            {t(label)}
          </label>
        )}
        <textarea
          id={labelFor}
          className={cn(
            "flex min-h-[100px] w-full flex-1 rounded-md border border-input dark:border-background-dark bg-transparent px-4 py-2 text-base shadow-sm placeholder:text-input dark:placeholder:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
