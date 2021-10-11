const createMarkup = (__html: string) => ({ __html });

const copyButtonStyle = {
  top: -20,
  right: -20,
};

interface OutputProps {
  converted: string;
  onCopy(): void;
}

export const Output: React.VFC<OutputProps> = ({ converted, onCopy }) => {
  return (
    <div className="mb-6 ">
      <div className="relative p-3 text-sm font-bold bg-gray-900 shadow-sm">
        <button
          className="absolute w-12 h-12 py-3 text-xs font-black bg-red-600 rounded-full hover:bg-red-900 transition transition-transform duration-300 ease-in-out transform hover:scale-75 hover:-rotate-45"
          style={copyButtonStyle}
          onClick={onCopy}>
          Copy
        </button>
        <div
          id="content"
          className="text-lg __markdown"
          dangerouslySetInnerHTML={createMarkup(converted)}
        />
      </div>
    </div>
  );
};
