import * as React from "react";
import ClipboardButton from "./clipboard-button";

function createMarkup(__html: string) {
  return { __html };
}

interface IContentProps {
  content: string;
  onClipboard: (x: any) => void;
}

const Content: React.SFC<IContentProps> = ({ onClipboard, content }) => (
  <div className="Output">
    <div className="Output__content">
      <ClipboardButton onClipboard={onClipboard} />
      <div
        id="content"
        className="__markdown"
        dangerouslySetInnerHTML={createMarkup(content)}
      />
    </div>
  </div>
);

export default Content;
