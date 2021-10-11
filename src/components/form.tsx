import { useCallback, useState } from "react";
import { FORMAT_MAP } from "src/lib";
import { FormatSelect } from "./format-list";

interface FormProps {
  value: string;
  isUpper: boolean;
  onChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
  onSubmit(e: React.SyntheticEvent): void;
  onToggle(): void;
}

export const Form: React.VFC<FormProps> = ({
  onSubmit,
  value,
  onChange,
  isUpper,
  onToggle,
}) => {
  const [formatters, setFormatters] = useState<number[]>([0]);

  const changeSelected = useCallback(
    (index: number) => {
      return (value: number) =>
        setFormatters((prev) => {
          const mutable = [...prev];
          mutable[index] = value;

          return mutable;
        });
    },
    [setFormatters]
  );

  return (
    <form className="mb-6" onSubmit={onSubmit}>
      <div className="relative mb-6">
        <textarea
          className="h-64 block w-full px-2 font-mono py-4 text-white bg-gray-900 border border-gray-700 resize-none rounded-md"
          id="area"
          value={value}
          onChange={onChange}
        />
        <span className="absolute top-0 right-0 p-3 text-xxs">{value.length}</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center w-3/4">
          <div className="flex items-center mr-4">
            <svg width="25" height="15.38461538" viewBox="0 0 208 128">
              <rect
                width="198"
                height="118"
                x="5"
                y="5"
                ry="10"
                stroke="rgba(30, 184, 235, 0.35)"
                strokeWidth="10"
                fill="none"
              />
              <path
                fill="rgba(30, 184, 235, 0.35)"
                d="M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z"
              />
            </svg>
            <label htmlFor="area" className="ml-3">
              Convert
            </label>
          </div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="
                      rounded
                      bg-gray-200
                      border-transparent
                      focus:border-transparent focus:bg-gray-200
                      text-red-600
                      focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                      mr-2"
              onChange={onToggle}
              checked={isUpper}
            />
            <span className="select-none">Uppercase?</span>
          </label>
        </div>
        <button
          className="px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-900"
          type="submit">
          Convert
        </button>
      </div>
      {formatters.map((value, index) => {
        return (
          <FormatSelect
            key={index}
            selected={value}
            onSelect={changeSelected(index)}
            map={FORMAT_MAP}
          />
        );
      })}
    </form>
  );
};
