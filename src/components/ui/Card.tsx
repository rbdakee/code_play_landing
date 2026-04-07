import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "outline";
}

export function Card({
  children,
  className,
  variant = "default",
}: CardProps) {
  const variantStyles = {
    default:
      "bg-white border border-secondary-bg rounded-lg shadow-sm hover:shadow-md transition-shadow",
    elevated:
      "bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow",
    outline:
      "bg-transparent border-2 border-primary rounded-lg hover:bg-primary-light transition-colors",
  };

  return (
    <div className={cn(variantStyles[variant], "p-6", className)}>
      {children}
    </div>
  );
}
