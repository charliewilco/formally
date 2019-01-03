import * as React from "react";
import ClipboardButton from "./clipboard-button";

function createMarkup(__html: string) {
  return { __html };
}

interface IContentProps {
  content: string;
  clipBoardValue: string;
}

const Content: React.SFC<IContentProps> = ({ clipBoardValue, content }) => (
  <div className="Output">
    <div className="Output__content">
      <ClipboardButton value={clipBoardValue} />
      <div
        id="content"
        className="__markdown"
        dangerouslySetInnerHTML={createMarkup(content)}
      />
    </div>
  </div>
);

export default Content;
