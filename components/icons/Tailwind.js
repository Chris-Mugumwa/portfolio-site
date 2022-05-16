import * as React from "react";

const SvgTailwind = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={12} fill="#fff" />
    <path
      d="M11.625 8c-1.5 0-2.438.833-2.813 2.5.563-.833 1.22-1.146 1.97-.938.427.12.733.464 1.072.846.551.622 1.19 1.342 2.584 1.342 1.5 0 2.437-.833 2.812-2.5-.563.833-1.219 1.146-1.969.938-.428-.12-.734-.464-1.072-.846C13.657 8.72 13.019 8 11.625 8Zm-2.813 3.75c-1.5 0-2.437.833-2.812 2.5.563-.833 1.219-1.146 1.969-.938.428.12.734.464 1.072.846.552.622 1.19 1.342 2.584 1.342 1.5 0 2.438-.833 2.813-2.5-.563.833-1.22 1.146-1.97.938-.427-.12-.733-.464-1.072-.846-.551-.622-1.19-1.342-2.584-1.342Z"
      fill="url(#Tailwind_svg__a)"
    />
    <defs>
      <linearGradient
        id="Tailwind_svg__a"
        x1={5.687}
        y1={10.4}
        x2={15.887}
        y2={15.693}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2298BD" />
        <stop offset={1} stopColor="#0ED7B5" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgTailwind;
