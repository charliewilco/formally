import * as React from "react";

const Button: React.SFC<{
  onSubmit: (e: React.SyntheticEvent) => void;
}> = ({ onSubmit }) => (
  <button className="Button" onSubmit={onSubmit}>
    Convert
  </button>
);

export default Button;
