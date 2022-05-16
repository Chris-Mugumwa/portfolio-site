import * as React from "react";

const SvgHtml = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={12} fill="#fff" />
    <path
      d="m8.213 16.2-.842-9.45h9.258l-.843 9.449-3.792 1.051-3.78-1.05Z"
      fill="#E44F26"
    />
    <path d="m12 16.447 3.064-.85.72-8.074H12v8.924Z" fill="#F1662A" />
    <path
      d="M12 11.028h-1.534l-.105-1.187H12V8.68H9.094l.027.312.285 3.194H12v-1.16ZM12 14.038l-.005.001-1.291-.348-.083-.925H9.458l.162 1.82 2.375.66.005-.002v-1.206Z"
      fill="#EBEBEB"
    />
    <path
      d="M11.996 11.028v1.159h1.427l-.134 1.503-1.293.349v1.206l2.376-.659.018-.196.272-3.051.028-.311h-2.694ZM11.996 8.682V9.84h2.8l.023-.26.053-.588.027-.311h-2.903Z"
      fill="#fff"
    />
  </svg>
);

export default SvgHtml;
