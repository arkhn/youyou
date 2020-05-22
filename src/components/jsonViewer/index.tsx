import * as React from "react";
import Header from "../header";

import "./style.css";

import { Text } from "@blueprintjs/core";

interface Props {
  jsonText: any;
}

const JSONViewer = ({ jsonText }: Props) => {
  return (
    <>
      <Text className="textBoxJson">{jsonText}</Text>
    </>
  );
};

export default JSONViewer;
