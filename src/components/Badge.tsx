import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default:
      "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100",
    primary:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
    success:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
    warning:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
