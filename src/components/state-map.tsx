import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { FormattedStates, FormatMap } from "../lib";

interface StateMapProps {
  transformedStates: FormattedStates;
  map: FormatMap;
}

export const StateMap: React.VFC<StateMapProps> = ({ transformedStates, map }) => {
  return (
    <div className="w-full">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full py-2 text-xs text-left rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>Transformed States</span>
              <ChevronUpIcon
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-white`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
              <hr className="mb-4" />
              <div>
                {transformedStates.map(([key, value], i) => {
                  return (
                    <Disclosure key={i}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex justify-between w-full py-2 text-sm font-medium text-left rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>{map.get(key)?.[0]}</span>
                            <ChevronUpIcon
                              className={`${
                                open ? "transform rotate-180" : ""
                              } w-5 h-5 text-white`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-200 font-mono">
                            {value}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  );
                })}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
