import * as React from "react";
import WordCount from "./word-count";
import Mark from "./mark";
import Switch from "./toggle-switch";
import Button from "./button";

const Input: React.SFC<{
  onSubmit: (e: React.SyntheticEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChecked: (e: any) => void;
  value: string;
  checked: boolean;
}> = ({ onSubmit, onChange, onChecked, checked, value }) => (
  <form className="Input" onSubmit={onSubmit}>
    <div>
      <textarea
        className="Input__area"
        id="area"
        value={value}
        onChange={onChange}
      />
      <WordCount number={value.length} />
    </div>
    <div className="Input__tray">
      <div className="Input__tray__content">
        <div className="Input__tray__content">
          <Mark color="rgba(30, 184, 235, 0.35)" />
          <label htmlFor="area" className="Input__label">
            Convert
          </label>
        </div>
        <Switch checked={checked} onChange={onChecked} />
      </div>
      <Button onSubmit={onSubmit} />
    </div>
  </form>
);

export default Input;
