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
    const v0 = () => (
      <>
        <div className="bg-orange basis-1/5"></div>
        <div className="bg-sandy basis-3/5"></div>
        <div className="basis-1/5 bg-blue"></div>
      </>
    );

    const v1 = () => (
      <>
        <div className="bg-sandy basis-1/3"></div>
        <div className="basis-2/3 bg-blueAlt"></div>
      </>
    );

    const v2 = () => (
      <>
        <div className="basis-1/5 bg-blue"></div>
        <div className="bg-sandy basis-3/5"></div>
        <div className="bg-orange basis-1/5"></div>
      </>
    );

    const v3 = () => (
      <>
        <div className="bg-orange basis-3/12"></div>
        <div className="bg-sandy basis-6/12"></div>
        <div className="basis-3/12 bg-blue"></div>
      </>
    );

    switch (variant) {
      case 0:
        return v0();

      case 1:
        return v1();

      case 2:
        return v2();

      case 3:
        return v3();

      default:
        return v0();
    }
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
