import * as React from "react";
import { twMerge } from "tailwind-merge";

import shape from "./../images/Shapes.svg";

interface Props {
  className?: string;
  onClick?: () => any;
}

const Button = ({
  children,
  className,
  onClick,
}: React.PropsWithChildren<Props>) => (
  <button
    className={twMerge(
      "bg-blue text-link text-white opacity-[0.8700000047683716] px-8 py-5 relative hover:brightness-110 transition",
      className
    )}
    onClick={onClick}
  >
    <img
      src={shape}
      alt="shape decoration"
      className="absolute top-0 left-0 pointer-events-none"
    />
    {children}
  </button>
);

export default Button;
