import * as React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  placeholder?: string;
  className?: string;
}

const Input = ({ placeholder, className }: Props) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={twMerge("h-16 p-5 px-[29px] text-link max-w-full", className)}
    />
  );
};

export default Input;
