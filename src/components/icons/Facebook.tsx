import * as React from "react";

interface Props {
  className?: string;
}

const FacebookIcon = ({ className }: Props) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1_1760)">
        <path
          d="M16 8.52246C16 4.10418 12.4183 0.522461 8 0.522461C3.58172 0.522461 0 4.10418 0 8.52246C0 12.5154 2.92547 15.8251 6.75 16.4253V10.835H4.71875V8.52246H6.75V6.75996C6.75 4.75496 7.94438 3.64746 9.77172 3.64746C10.6467 3.64746 11.5625 3.80371 11.5625 3.80371V5.77246H10.5538C9.56 5.77246 9.25 6.38918 9.25 7.02246V8.52246H11.4688L11.1141 10.835H9.25V16.4253C13.0745 15.8251 16 12.5154 16 8.52246Z"
          fill="#232536"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1760">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.522461)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookIcon;
