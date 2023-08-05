import * as React from "react";
import { twMerge } from "tailwind-merge";

type Direction = "horizontal" | "vertical";
type Variant = 0 | 1;
interface Props {
  className?: string;
  direction: Direction;
  variant?: Variant;
}

const DecorationLine = ({ className, direction, variant = 0 }: Props) => {
  return (
    <div
      className={twMerge(
        "flex shrink-0",
        direction === "horizontal" ? "w-full h-2" : "h-full w-2 flex-col",
        className
      )}
    >
      {variant === 0 && <div className="bg-orange basis-1/3"></div>}
      <div className="bg-sandy basis-1/3"></div>
      <div
        className={variant === 0 ? "basis-1/3 bg-blue" : "basis-2/3 bg-blueAlt"}
      ></div>
    </div>
  );
};

export default DecorationLine;
