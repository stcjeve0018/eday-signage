import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  isLoading?: boolean;
}

export function Button({ variant = "primary", isLoading, className = "", children, ...props }: ButtonProps) {
  const baseStyle = "px-6 py-2.5 rounded-lg font-bold tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transform active:scale-95";
  
  const variants = {
    // 改為強烈的紅色，搭配紅色陰影
    primary: "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-900/30 border border-transparent",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700",
    // 框線改為紅色
    outline: "bg-transparent border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} disabled={isLoading || props.disabled} {...props}>
      {isLoading ? (
        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
      ) : null}
      {children}
    </button>
  );
}