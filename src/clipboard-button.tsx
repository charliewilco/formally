import * as React from "react";

const ClipboardButton: React.SFC<{ onClipboard: (x: any) => void }> = ({
  onClipboard
}) => (
  <button
    className="Clipboard"
    id="clipboard"
    onClick={onClipboard}
    children="Copy"
  />
);

export default ClipboardButton;
