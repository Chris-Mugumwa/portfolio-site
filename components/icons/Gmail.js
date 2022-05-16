import * as React from "react";

const SvgGmail = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={12} fill="#fff" />
    <g clipPath="url(#Gmail_svg__a)">
      <path
        d="M8.955 18.936v-6.662l-1.558-1.89L6 9.333v8.426c0 .65.397 1.176.886 1.176h2.069Z"
        fill="#4285F4"
      />
      <path
        d="M16.045 18.936h2.069c.49 0 .886-.527.886-1.176V9.335l-1.582 1.201-1.373 1.738v6.662Z"
        fill="#34A853"
      />
      <path
        d="M8.955 12.274 8.743 9.67l.212-2.492 3.545 3.527 3.546-3.527.237 2.357-.238 2.738L12.5 15.8l-3.545-3.527Z"
        fill="#EA4335"
      />
      <path
        d="M16.045 7.18v5.094L19 9.334V7.768c0-1.454-1.251-2.283-2.127-1.41l-.828.822Z"
        fill="#FBBC04"
      />
      <path
        d="m6 9.334 1.359 1.352 1.596 1.588V7.179l-.828-.823C7.25 5.484 6 6.313 6 7.766v1.568Z"
        fill="#C5221F"
      />
    </g>
    <defs>
      <clipPath id="Gmail_svg__a">
        <path fill="#fff" transform="translate(6 6)" d="M0 0h13v13H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgGmail;
