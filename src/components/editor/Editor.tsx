import React from "react";
import AttributeEditor from "./attributeEditor/AttributeEditor";
import ResourceProfileMapping from "./resourceProfileMapping/ResourceProfileMapping";
import ProfileSettings from "./profileSettings/ProfileSettings";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import {
  ElementDefinition,
  String,
} from "../../resources/ts/proto/r4/core/datatypes_pb";

const Editor: React.FC<{}> = () => {
  const { loading, structureDefinition, selectedAttributeId } = useSelector(
    (state: RootState) => state.resource
  );
  const profileSettings: String.AsObject = ("profileSettings" as unknown) as String.AsObject;

  let attribute: ElementDefinition.AsObject | undefined = undefined;

  if (selectedAttributeId && selectedAttributeId !== profileSettings) {
    attribute = structureDefinition?.snapshot?.element.find(
      (attribute) => attribute.id === selectedAttributeId
    );
  }

  const renderAttributeEditor = () => {
    if (selectedAttributeId === profileSettings) {
      return <ProfileSettings profile={structureDefinition} />;
    } else {
      return (
        <AttributeEditor attribute={attribute} profile={structureDefinition} />
      );
    }
  };

  if (loading === true) {
    return <div>Loading ...</div>;
  }

  if (structureDefinition) {
    return (
      <div>
        <h1>Profile Editor for {structureDefinition.id}</h1>
        <a
          href={
            "data:json/plain;charset=utf-8," +
            encodeURIComponent(JSON.stringify(structureDefinition, null, 2))
          }
          download={structureDefinition.name + ".json"}
        >
          <button>Download</button>
        </a>
        {renderAttributeEditor()}
        <ResourceProfileMapping profile={structureDefinition} />
      </div>
    );
  }

  return <div>Error</div>;
};

export default Editor;
