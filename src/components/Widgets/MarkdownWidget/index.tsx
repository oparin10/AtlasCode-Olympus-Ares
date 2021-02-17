import React from "react";

interface Props {}

const MarkdownWidget = (props: Props) => {
  return (
    <div>
      This is the markdown widget
      <div style={{ height: "500px", backgroundColor: "blue" }}></div>
    </div>
  );
};

export default MarkdownWidget;
