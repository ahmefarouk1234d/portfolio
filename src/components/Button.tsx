import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-white hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 active:scale-100 focus:ring-cyan-500 dark:hover:shadow-cyan-400/20",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 hover:scale-105 active:scale-100 focus:ring-gray-500",
    ghost:
      "bg-transparent hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-800 dark:active:bg-gray-700 hover:scale-105 active:scale-100 focus:ring-gray-500",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {/* Shine effect on hover */}
      {variant === "primary" && (
        <span className="absolute inset-0 w-full h-full transition-transform duration-500 transform translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
      )}
      <span className="relative">{children}</span>
    </button>
  );
}
