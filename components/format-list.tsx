import { Listbox, ListboxButton, ListboxOption, ListboxList } from "@reach/listbox";
import { FormatMap } from "../lib";

interface FormatSelectProps {
  selected: string;
  map: FormatMap;
  onSelect(value: string): void;
}

export const FormatSelect: React.VFC<FormatSelectProps> = ({
  selected,
  map,
  onSelect,
}) => {
  return (
    <div className="w-full z-50">
      <Listbox value={selected.toString()} onChange={onSelect}>
        <div className="relative mt-1 w-full">
          <ListboxButton className="w-full relative py-2 pl-3 pr-10 text-left bg-gray-900 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{map.get(selected)?.[0]}</span>
          </ListboxButton>

          <ListboxList className="absolute w-full py-1 mt-1 overflow-auto text-base bg-gray-900 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
            {Array.from(map).map(([value, [label]], idx) => (
              <ListboxOption key={idx} value={value.toString()}>
                <span>{label}</span>
              </ListboxOption>
            ))}
          </ListboxList>
        </div>
      </Listbox>
    </div>
  );
};
