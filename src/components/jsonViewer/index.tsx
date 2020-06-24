import * as React from "react";
import ReactJson from "react-json-view";

interface Props {
  jsonText: any;
}

const JSONViewer = ({ jsonText }: Props) => {
  return (
    <>
      <ReactJson src={jsonText}></ReactJson>
    </>
  );
};

export default JSONViewer;
