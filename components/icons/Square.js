import * as React from "react";

const SvgSquare = (props) => (
  <svg
    width={165}
    height={253}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M164.608.786H-101v251.5h265.608V.786Zm-36.679 34.73h-192.25v182.039h192.25V35.517Z"
      fill="#7851A9"
      fillOpacity={0.24}
    />
  </svg>
);

export default SvgSquare;
