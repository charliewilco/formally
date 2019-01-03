import * as React from "react";

const Switch: React.SFC<{
  onChange: (e: any) => void;
  checked: boolean;
}> = ({ onChange, checked }) => (
  <label className="Switch" htmlFor="checkUpper">
    <input
      className="Switch__check"
      onChange={onChange}
      checked={checked}
      id="checkUpper"
      type="checkbox"
    />
    <span className="Switch__label">Uppercase?</span>
  </label>
);

export default Switch;
