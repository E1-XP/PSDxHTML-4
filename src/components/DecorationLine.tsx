import * as React from "react";
import { twMerge } from "tailwind-merge";

type Direction = "horizontal" | "vertical";

interface Props {
  className?: string;
  direction: Direction;
}

const DecorationLine = ({ className, direction }: Props) => {
  return (
    <div
      className={twMerge(
        "flex shrink-0",
        direction === "horizontal" ? "w-full h-2" : "h-full w-2 flex-col",
        className
      )}
    >
      <div className="bg-orange basis-1/3"></div>
      <div className="bg-sandy basis-1/3"></div>
      <div className="bg-blue basis-1/3"></div>
    </div>
  );
};

export default DecorationLine;
