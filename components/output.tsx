import { Clipboard } from "./icons";
import { FormattedOutput, FORMAT_MAP } from "../lib";
import { StateMap } from "./state-map";
import { useCopy } from "./useCopy";

const createMarkup = (__html: string) => ({ __html });

const copyButtonStyle = {
  top: 5,
  right: 5,
};

interface OutputProps {
  converted: FormattedOutput | null;
}

export const Output: React.VFC<OutputProps> = ({ converted }) => {
  const onCopy = useCopy();
  return (
    <div className="">
      {converted !== null && (
        <div>
          <div className="relative p-3 text-sm bg-gray-900 shadow-sm mb-4">
            <button
              className="absolute transition transition-transform duration-300 ease-in-out transform hover:scale-75 hover:opacity-50"
              style={copyButtonStyle}
              onClick={() => onCopy(converted.formatted)}>
              <Clipboard className="w-5 h-5" />
            </button>
            <div
              id="content"
              className="__markdown"
              dangerouslySetInnerHTML={createMarkup(converted.formatted)}
            />
          </div>

          <StateMap map={FORMAT_MAP} transformedStates={converted.states} />
        </div>
      )}
    </div>
  );
};
