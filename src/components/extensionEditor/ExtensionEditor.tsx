import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/state/store";

import StructureDefSettings from "src/components/structureDefSettings/StructureDefSettings";
import AttributeEditor from "src/components/extensionEditor/attributeEditor/AttributeEditor";
import Navbar from "src/components/navbar/Navbar";

const ExtensionEditor: React.FC<{}> = () => {
  const { loading, extensionStructureDefinition } = useSelector(
    (state: RootState) => {
      return state.resource;
    }
  );

  if (loading) {
    return <div>Loading ...</div>;
  }
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
          <StructureDefSettings
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
