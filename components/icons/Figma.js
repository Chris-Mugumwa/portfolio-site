import * as React from "react";

const SvgFigma = (props) => (
  <svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#19BCFE" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 12a2 2 0 0 0 2-2V8H4a2 2 0 1 0 0 4Z"
      fill="#09CF83"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 8h2V4H4a2 2 0 1 0 0 4Z"
      fill="#A259FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4h2V0H4a2 2 0 0 0 0 4Z"
      fill="#F24E1E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 4H6V0h2a2 2 0 0 1 0 4Z"
      fill="#FF7262"
    />
  </svg>
);

export default SvgFigma;
