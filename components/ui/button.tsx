import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border-2 border-primary bg-background text-primary hover:bg-primary/5",
        secondary: "bg-secondary text-primary hover:bg-secondary/80",
      },
      size: {
        default: "h-14 px-8 py-4",
        sm: "h-10 px-6 py-3",
        lg: "h-16 px-10 py-5",
      },
      withIcon: {
        true: "gap-3",
        false: "gap-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      withIcon: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  showIcon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, showIcon = false, children, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, withIcon: showIcon, className }))}
        ref={ref as any}
        {...props}
      >
        {children}
        {showIcon && (
          <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-current">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
