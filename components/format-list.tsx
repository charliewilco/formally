import {
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxOption,
  ListboxList,
} from "@reach/listbox";

import { FormatMap } from "../lib";
import { ChevronDown } from "./icons";

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
    <div>
      <ListboxInput value={selected.toString()} onChange={onSelect}>
        <div>
          <ListboxButton className="listbox-button" arrow={<ChevronDown />}>
            <span>{map.get(selected)?.[0]}</span>
          </ListboxButton>

          <ListboxPopover>
            <ListboxList>
              {Array.from(map).map(([value, [label]], idx) => (
                <ListboxOption key={idx} value={value.toString()}>
                  <span>{label}</span>
                </ListboxOption>
              ))}
            </ListboxList>
          </ListboxPopover>
        </div>
      </ListboxInput>
      <style jsx>{`
        :global(.listbox-button) {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        :global([data-reach-listbox-button]) {
          border-radius: 0.25rem;
          border: 0;
          background: var(--bg-offset);
        }

        :global([data-reach-listbox-popover]) {
          background: var(--bg);
        }
      `}</style>
    </div>
  );
};
