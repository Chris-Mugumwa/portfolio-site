import * as React from "react";

const SvgFigma = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={12} fill="#fff" />
    <path d="M14 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#19BCFE" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18a2 2 0 0 0 2-2v-2h-2a2 2 0 1 0 0 4Z"
      fill="#09CF83"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 14h2v-4h-2a2 2 0 1 0 0 4Z"
      fill="#A259FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 10h2V6h-2a2 2 0 1 0 0 4Z"
      fill="#F24E1E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 10h-2V6h2a2 2 0 0 1 0 4Z"
      fill="#FF7262"
    />
  </svg>
);

export default SvgFigma;
