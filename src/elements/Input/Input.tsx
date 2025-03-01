import React from "react";
import { twMerge } from "tailwind-merge";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  error: string;
  type?: string;
  styles?: string;
};

export default function Input({
  value,
  onChange,
  label,
  name,
  type,
  error,
  styles,
}: InputProps) {
  return (
    <div className={twMerge(styles, "m-0 block")}>
      {label && (
        <label className="pb-2 w-full m-0 block" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className="p-3 bg-slate-200 w-full m-0 rounded-sm"
        type={type ?? "text"}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
      />
      {error && <p className="text-red-500 pt-2">{error}</p>}
    </div>
  );
}
