import * as React from "react";
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
  <form className="mb-6" onSubmit={onSubmit}>
    <div className="relative mb-6">
      <textarea
        className="w-full rounded-md block border border-gray-700 py-4 px-2 text-white bg-gray-900 resize-none"
        id="area"
        style={{
          minHeight: 300
        }}
        value={value}
        onChange={onChange}
      />
      <span className="absolute text-xxs top-0 right-0 p-3">{value.length}</span>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex items-center w-3/4">
        <div className="flex items-center mr-4">
          <Mark color="rgba(30, 184, 235, 0.35)" />
          <label htmlFor="area" className="ml-3">
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
