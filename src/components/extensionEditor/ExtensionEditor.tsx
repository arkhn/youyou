import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

import StructuredefSettings from "../structuredefSettings/StructuredefSettings";
import AttributeEditor from "./attributeEditor/AttributeEditor";
import Navbar from "../navbar/Navbar";

const ExtensionEditor: React.FC<{}> = () => {
  const { extensionStructureDefinition } = useSelector((state: RootState) => {
    return state.resource;
  });

  return (
    <React.Fragment>
      <Navbar buttonType="profile" />
      <a
        href={
          "data:json/plain;charset=utf-8," +
          encodeURIComponent(
            JSON.stringify(extensionStructureDefinition, null, 2)
          )
        }
        download={extensionStructureDefinition?.name + ".json"}
      >
        <button>Download</button>
      </a>
      {extensionStructureDefinition && (
        <React.Fragment>
          <StructuredefSettings
            structureDefinition={extensionStructureDefinition}
            type="extension"
          />
          <AttributeEditor structureDefinition={extensionStructureDefinition} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ExtensionEditor;
