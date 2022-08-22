import { Disclosure, DisclosureButton, DisclosurePanel } from "@reach/disclosure";
import { FormattedStates, FormatMap } from "../lib";
import { Arrow } from "./disclosure-arrow";

interface StateMapProps {
  transformedStates: FormattedStates;
  map: FormatMap;
}

export const StateMap: React.VFC<StateMapProps> = ({ transformedStates, map }) => {
  return (
    <div>
      <h3>Transformed States</h3>
      <div>
        {transformedStates.map(([key, value], i) => {
          return (
            <Disclosure key={i}>
              <DisclosureButton className="disclosure-button">
                <span>{map.get(key)?.[0]}</span>
                <Arrow />
              </DisclosureButton>
              <DisclosurePanel>
                <div className="state">{value}</div>
              </DisclosurePanel>
            </Disclosure>
          );
        })}
      </div>
      <style jsx>{`
        .state {
          font-family: var(--monospace);
          padding: 0.5rem;
          margin-bottom: 1rem;
        }

        h3 {
          margin-bottom: 1rem;
          font-weight: 400;
          font-size: 1.25rem;
        }
      `}</style>
    </div>
  );
};
