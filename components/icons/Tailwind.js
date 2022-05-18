import * as React from "react";

const SvgTailwind = (props) => (
  <svg
    width={12}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.625 0c-1.5 0-2.438.833-2.813 2.5.563-.833 1.22-1.146 1.97-.938.427.12.733.464 1.072.846.551.622 1.19 1.342 2.583 1.342 1.5 0 2.438-.833 2.813-2.5-.563.833-1.219 1.146-1.969.938-.428-.12-.734-.464-1.072-.846C7.657.72 7.019 0 5.625 0ZM2.812 3.75c-1.5 0-2.437.833-2.812 2.5.563-.833 1.219-1.146 1.969-.938.428.12.734.464 1.072.846.552.622 1.19 1.342 2.584 1.342 1.5 0 2.438-.833 2.813-2.5-.563.833-1.22 1.146-1.97.938-.427-.12-.733-.464-1.072-.846-.551-.622-1.19-1.342-2.583-1.342Z"
      fill="url(#Tailwind_svg__a)"
    />
    <defs>
      <linearGradient
        id="Tailwind_svg__a"
        x1={-0.313}
        y1={2.4}
        x2={9.887}
        y2={7.693}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2298BD" />
        <stop offset={1} stopColor="#0ED7B5" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgTailwind;
