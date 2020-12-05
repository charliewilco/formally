import * as React from "react";

const Switch: React.FC<{
  onChange: (e: any) => void;
  checked: boolean;
}> = ({ onChange, checked }) => (
  <label className="custom-label flex">
    <div className="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
      <input
        type="checkbox"
        className="hidden"
        onChange={onChange}
        checked={checked}
      />

      <svg
        className="hidden w-4 h-4 text-red-600 pointer-events-none"
        viewBox="0 0 172 172">
        <g
          fill="none"
          strokeWidth="none"
          strokeMiterlimit={10}
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
          style={{ mixBlendMode: "normal" }}>
          <path d="M0 172V0h172v172z" />
          <path
            d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
            fill="currentColor"
            strokeWidth={1}
          />
        </g>
      </svg>
    </div>
    <span className="select-none">Uppercase?</span>
  </label>
);

export default Switch;
