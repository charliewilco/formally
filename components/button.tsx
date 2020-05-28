import * as React from "react";

const Button: React.SFC<{
  onSubmit: (e: React.SyntheticEvent) => void;
}> = ({ onSubmit }) => (
  <button
    className="bg-yellow-600 hover:bg-yellow-900 text-white font-black py-2 px-4 rounded"
    onSubmit={onSubmit}>
    Convert
  </button>
);

export default Button;
