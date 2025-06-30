import React from "react";

const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props} // Spread props to allow className, etc.
  >
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

export default PlayIcon;
