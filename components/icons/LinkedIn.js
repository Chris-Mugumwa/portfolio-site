import * as React from "react";

const SvgLinkedIn = (props) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#LinkedIn_svg__a)">
      <path
        d="M11.928 11.924H9.853V8.675c0-.774-.014-1.772-1.079-1.772-1.08 0-1.245.844-1.245 1.716v3.305H5.454v-6.68h1.992v.912h.028a2.182 2.182 0 0 1 1.964-1.079c2.103 0 2.49 1.383 2.49 3.182v3.665ZM3.114 4.33a1.204 1.204 0 1 1 0-2.408 1.204 1.204 0 0 1 0 2.408Zm1.037 7.594H2.074v-6.68h2.077v6.68Zm8.81-11.928H1.033A1.022 1.022 0 0 0 0 1.006v11.979a1.022 1.022 0 0 0 1.033 1.01h11.93a1.025 1.025 0 0 0 1.037-1.01V1.005a1.024 1.024 0 0 0-1.037-1.01"
        fill="#0A66C2"
      />
    </g>
    <defs>
      <clipPath id="LinkedIn_svg__a">
        <path fill="#fff" d="M0 0h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLinkedIn;
