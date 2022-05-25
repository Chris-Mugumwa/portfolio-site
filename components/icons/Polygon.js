import * as React from "react";

const SvgPolygon = (props) => (
  <svg
    width={16}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.588 13.5 7.794 0 0 13.5h15.588Zm-3.464-2L7.794 4l-4.33 7.5h8.66Z"
      fill="#EACE09"
    />
  </svg>
);

export default SvgPolygon;
