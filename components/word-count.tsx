import * as React from "react";

const WordCount: React.FC<{ number: number }> = ({ number }) => (
  <span className="Input__count" children={number} />
);

export default WordCount;
