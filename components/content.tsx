import * as React from "react";
import ClipboardButton from "./clipboard-button";

function createMarkup(__html: string) {
  return { __html };
}

interface IContentProps {
  content: string;
  clipBoardValue: string;
}

const Content: React.FC<IContentProps> = ({ clipBoardValue, content }) => (
  <div className="mb-6 ">
    <div className="shadow-sm bg-gray-900 p-3 text-sm font-bold relative">
      <ClipboardButton value={clipBoardValue} />
      <div
        id="content"
        className="__markdown text-lg"
        dangerouslySetInnerHTML={createMarkup(content)}
      />
    </div>
  </div>
);

export default Content;
