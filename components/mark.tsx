import * as React from "react";

const Mark: React.SFC<{ color: string }> = ({ color }) => (
  <svg width="25" height="15.38461538" viewBox="0 0 208 128">
    <rect
      width="198"
      height="118"
      x="5"
      y="5"
      ry="10"
      stroke={color}
      strokeWidth="10"
      fill="none"
    />
    <path
      fill={color}
      d="M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z"
    />
  </svg>
);

export default Mark;
