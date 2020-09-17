import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "state/store";

import AttributeEditor from "components/extensionEditor/attributeEditor/AttributeEditor";
import Navbar from "components/navbar/Navbar";
import StructureDefSettings from "components/structureDefSettings/StructureDefSettings";

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
