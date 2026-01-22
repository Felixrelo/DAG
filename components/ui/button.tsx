import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import brandConfig from "@/brand.json";

const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";
const secondaryColor = brandConfig.theme?.colors?.secondary || "#ec4899";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-white hover:opacity-90",
        secondary: "text-white hover:opacity-90",
        outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700",
        ghost: "hover:bg-gray-100 text-gray-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, style, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const bgStyle = variant === "default" ? { backgroundColor: primaryColor } : variant === "secondary" ? { backgroundColor: secondaryColor } : {};
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} style={{ ...bgStyle, ...style }} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
