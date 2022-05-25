import * as React from "react";

const SvgCircle = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm0-3A5 5 0 1 0 8 3a5 5 0 0 0 0 10Z"
      fill="#7851A9"
    />
  </svg>
);

export default SvgCircle;
