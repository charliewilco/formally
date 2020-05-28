import * as React from "react";
import * as CopyToClipboard from "react-copy-to-clipboard";

const ClipboardButton: React.SFC<{ value: string }> = ({ value }) => (
  <CopyToClipboard.default text={value}>
    <button
      className="absolute bg-red-600 hover:bg-red-900 text-xs font-black rounded-full py-3 h-12 w-12 transition transition-transform duration-300 ease-in-out transform hover:scale-75 hover:-rotate-45"
      style={{
        top: -20,
        right: -20
      }}>
      Copy
    </button>
  </CopyToClipboard.default>
);

export default ClipboardButton;
