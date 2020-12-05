import * as React from "react";

const Button: React.FC<{
  onSubmit: (e: React.SyntheticEvent) => void;
}> = ({ onSubmit }) => (
  <button
    className="bg-red-600 hover:bg-red-900 text-white font-black py-2 px-4 rounded"
    onSubmit={onSubmit}>
    Convert
  </button>
);

export default Button;
