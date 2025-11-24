import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = "", ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-300 mb-1.5">{label}</label>}
      <input
        className={`w-full bg-gray-800 border ${error ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:border-emerald-500 focus:ring-emerald-500"} rounded-lg px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-all ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({ label, error, className = "", ...props }: TextareaProps) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-300 mb-1.5">{label}</label>}
      <textarea
        className={`w-full bg-gray-800 border ${error ? "border-red-500" : "border-gray-700 focus:border-emerald-500"} rounded-lg px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-all min-h-[100px] ${className}`}
        {...props}
      />
    </div>
  );
}