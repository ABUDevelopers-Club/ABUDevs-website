import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input type={type}  className={ cn("flex h-10 w-full border border-gray-300 outline-neutral-500 outline-[0.5px]  bg-background px-3 py-2 text-base md:text-sm", className  )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
