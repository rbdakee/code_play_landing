import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  target?: "_blank" | "_self";
  rel?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  onClick,
  href,
  className,
  variant = "primary",
  size = "md",
  disabled = false,
  target,
  rel,
  type = "button",
}: ButtonProps) {
  const baseStyles = cn(
    "inline-block font-semibold rounded-lg transition-all duration-200 ease-in-out",
    "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed"
  );

  const variantStyles = {
    primary: cn(
      "bg-primary text-white hover:opacity-90 relative overflow-hidden",
      "animate-pulse-glow",
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent",
      "before:animate-shimmer before:pointer-events-none"
    ),
    secondary: "bg-secondary-bg text-foreground hover:bg-muted-light",
    outline: "border-2 border-primary text-primary hover:bg-primary-light",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={buttonClassName}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClassName}
    >
      {children}
    </button>
  );
}
