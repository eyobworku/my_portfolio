import React from "react";

const LogoDev: React.FC<React.SVGProps<HTMLSpanElement>> = (props) => (
  // If you have an SVG logo, paste its <path> elements here.
  // For now, returning a text-like SVG for "DEV"
  <span
    {...props}
    style={{ fontFamily: "monospace", fontWeight: "bold", fontSize: "1.5em" }}
  >
    EYOB
  </span>
);

export default LogoDev;
