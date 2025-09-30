import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "gradient";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default:
      "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700",
    primary:
      "bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800",
    success:
      "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 border border-green-200 dark:border-green-800",
    warning:
      "bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800",
    gradient:
      "bg-gradient-to-r from-cyan-500 to-violet-500 text-white border-none",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
