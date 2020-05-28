import * as React from "react";
import * as CopyToClipboard from "react-copy-to-clipboard";

const ClipboardButton: React.SFC<{ value: string }> = ({ value }) => (
  <CopyToClipboard.default text={value}>
    <button
      className="absolute bg-yellow-600 hover:bg-yellow-900 text-sm font-bold rounded-full p-4 height-sm width-sm"
      style={{
        top: -16,
        right: -16
      }}>
      Copy
    </button>
  </CopyToClipboard.default>
);

export default ClipboardButton;
