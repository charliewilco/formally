import * as React from "react";
import * as CopyToClipboard from "react-copy-to-clipboard";

const ClipboardButton: React.SFC<{ value: string }> = ({ value }) => (
  <CopyToClipboard.default text={value}>
    <button className="Clipboard">Copy</button>
  </CopyToClipboard.default>
);

export default ClipboardButton;
