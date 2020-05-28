import * as React from "react";

const WordCount: React.SFC<{ number: number }> = ({ number }) => (
  <span className="Input__count" children={number} />
);

export default WordCount;
