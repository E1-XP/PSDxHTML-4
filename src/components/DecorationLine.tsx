import * as React from "react";
import { twMerge } from "tailwind-merge";

type Direction = "horizontal" | "vertical";
type Variant = 0 | 1 | 2 | 3;
interface Props {
  className?: string;
  direction: Direction;
  variant?: Variant;
}

const DecorationLine = ({ className, direction, variant = 0 }: Props) => {
  const getBlocks = () => {
    if (variant === 0)
      return (
        <>
          <div className="bg-orange basis-1/5"></div>
          <div className="bg-sandy basis-3/5"></div>
          <div className="basis-1/5 bg-blue"></div>
        </>
      );

    if (variant === 1)
      return (
        <>
          <div className="bg-sandy basis-1/3"></div>
          <div className="basis-2/3 bg-blueAlt"></div>
        </>
      );

    if (variant === 2)
      return (
        <>
          <div className="basis-1/5 bg-blue"></div>
          <div className="bg-sandy basis-3/5"></div>
          <div className="bg-orange basis-1/5"></div>
        </>
      );

    if (variant === 3)
      return (
        <>
          <div className="bg-orange basis-3/12"></div>
          <div className="bg-sandy basis-6/12"></div>
          <div className="basis-3/12 bg-blue"></div>
        </>
      );
  };

  return (
    <div
      className={twMerge(
        "flex shrink-0",
        direction === "horizontal" ? "w-full h-2" : "h-full w-2 flex-col",
        className
      )}
    >
      {getBlocks()}
    </div>
  );
};

export default DecorationLine;
