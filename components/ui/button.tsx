"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-white text-black border-2 border-black hover:bg-gray-100",
        secondary: "bg-transparent border border-white text-white hover:bg-white/10",
      },
      size: {
        sm: "px-6 py-2 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-12 py-4 text-lg",
      },
      withIcon: {
        true: "justify-between",
        false: "justify-center",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
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

    if (showIcon) {
      return (
        <Comp
          className={cn(
            buttonVariants({ variant, size, withIcon: true }),
            "relative pr-12",
            className
          )}
          ref={ref as any}
          {...props}
        >
          <span className="w-full text-center">{children}</span>
          <span className="absolute right-2.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border-2 border-current">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </Comp>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, withIcon: false }), className)}
        ref={ref as any}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };



// import * as React from "react";
// import { cva, type VariantProps } from "class-variance-authority";
// import { cn } from "@/lib/utils";
// import { ArrowUpRight } from "lucide-react";

// const buttonVariants = cva(
//   "inline-flex items-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary/90",
//         outline: "border-1 border-primary bg-background text-primary hover:bg-primary/5",
//         secondary: "border border-primary/20 bg-secondary text-primary hover:bg-secondary/80",
//       },
//       size: {
//         default: "h-12 px-6 py-3",
//         sm: "h-10 px-5 py-2.5",
//         lg: "h-14 px-8 py-4",
//       },
//       withIcon: {
//         true: "justify-between",
//         false: "justify-center",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//       withIcon: false,
//     },
//   }
// );

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   asChild?: boolean;
//   showIcon?: boolean;
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, showIcon = false, children, ...props }, ref) => {
//     const Comp = asChild ? "span" : "button";
    
//     if (showIcon) {
//       return (
//         <Comp
//           className={cn(buttonVariants({ variant, size, withIcon: true, className }), "relative pr-12")}
//           ref={ref as any}
//           {...props}
//         >
//           <span className="w-full text-center">{children}</span>
//           <span className="absolute right-2.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border-2 border-current">
//             <ArrowUpRight className="h-3.5 w-3.5" />
//           </span>
//         </Comp>
//       );
//     }
    
//     return (
//       <Comp
//         className={cn(buttonVariants({ variant, size, withIcon: false, className }))}
//         ref={ref as any}
//         {...props}
//       >
//         {children}
//       </Comp>
//     );
//   }
// );
// Button.displayName = "Button";

// export { Button, buttonVariants };
