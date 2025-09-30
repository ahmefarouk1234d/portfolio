import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 transition-all duration-200 ${
        hover ? "hover:bg-[var(--card-hover)] hover:shadow-lg hover:scale-[1.02]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
