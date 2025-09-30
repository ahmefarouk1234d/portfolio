import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export function Card({ children, className = "", hover = true, glass = false }: CardProps) {
  const baseClasses = glass
    ? "glass rounded-xl p-6 transition-all duration-300"
    : "bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 transition-all duration-300";
  
  const hoverClasses = hover
    ? "hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 hover:border-cyan-500/20 dark:hover:shadow-cyan-400/5"
    : "";

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
