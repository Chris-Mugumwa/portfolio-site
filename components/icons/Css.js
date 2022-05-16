import * as React from "react";

const SvgCss = (props) => (
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
      fill="#1572B6"
    />
    <path d="m12 16.447 3.064-.85.72-8.074H12v8.924Z" fill="#33A9DC" />
    <path
      d="M12 10.947h1.534l.105-1.187H12V8.6h2.906l-.027.312-.285 3.194H12v-1.16Z"
      fill="#fff"
    />
    <path
      d="m12.007 13.957-.005.001-1.29-.348-.083-.925H9.465l.162 1.82 2.374.66.006-.002v-1.206Z"
      fill="#EBEBEB"
    />
    <path
      d="m13.435 12.057-.14 1.552-1.292.348v1.207l2.376-.659.018-.196.201-2.252h-1.163Z"
      fill="#fff"
    />
    <path
      d="M12.004 8.6v1.16h-2.8l-.023-.26-.053-.588-.027-.311h2.903ZM12 10.947v1.159h-1.275l-.023-.26-.052-.588-.028-.311H12Z"
      fill="#EBEBEB"
    />
  </svg>
);

export default SvgCss;
