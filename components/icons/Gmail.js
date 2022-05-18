import * as React from "react";

const SvgGmail = (props) => (
  <svg
    width={13}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#Gmail_svg__a)">
      <path
        d="M2.955 12.936V6.274l-1.558-1.89L0 3.333v8.426c0 .65.397 1.176.886 1.176h2.069Z"
        fill="#4285F4"
      />
      <path
        d="M10.045 12.936h2.069c.49 0 .886-.527.886-1.176V3.335l-1.582 1.201-1.373 1.738v6.662Z"
        fill="#34A853"
      />
      <path
        d="M2.955 6.274 2.743 3.67l.212-2.492L6.5 4.706l3.546-3.527.237 2.357-.237 2.738L6.5 9.8 2.955 6.274Z"
        fill="#EA4335"
      />
      <path
        d="M10.045 1.18v5.094L13 3.334V1.768c0-1.454-1.251-2.283-2.127-1.41l-.828.822Z"
        fill="#FBBC04"
      />
      <path
        d="m0 3.334 1.359 1.352 1.596 1.588V1.179L2.127.356C1.25-.516 0 .313 0 1.766v1.568Z"
        fill="#C5221F"
      />
    </g>
    <defs>
      <clipPath id="Gmail_svg__a">
        <path fill="#fff" d="M0 0h13v13H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgGmail;
