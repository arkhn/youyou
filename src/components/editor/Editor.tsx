import React from "react";
import AttributeEditor from "./attributeEditor/AttributeEditor";
import ResourceProfileMapping from "./resourceProfileMapping/ResourceProfileMapping";
import StructuredefSettings from "../structuredefSettings/StructuredefSettings";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import {
  IElementDefinition,
  IStructureDefinition
} from "@ahryman40k/ts-fhir-types/lib/R4";

const Editor: React.FC<{}> = () => {
  const { loading, structureDefinition, selectedAttributeId } = useSelector(
    (state: RootState) => state.resource
  );
  const structuredefSettings: string = "structuredefSettings";
  let attribute: IElementDefinition | undefined = undefined;

  if (selectedAttributeId && selectedAttributeId !== structuredefSettings) {
    attribute = structureDefinition?.snapshot?.element.find(
      (attribute: IElementDefinition) => attribute.id === selectedAttributeId
    );
  }

  const renderAttributeEditor = (structureDef: IStructureDefinition) => {
    if (selectedAttributeId === structuredefSettings) {
      return (
        structureDefinition && (
          <StructuredefSettings
            structureDefinition={structureDefinition}
            type="resource"
          />
        )
      );
    } else {
      return (
        <AttributeEditor
          attribute={attribute}
          structureDefinition={structureDef}
        />
      );
    }
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (structureDefinition) {
    return (
      <div>
        <h1>Profile Editor for {structureDefinition.type}</h1>
        <a
          href={
            "data:json/plain;charset=utf-8," +
            encodeURIComponent(JSON.stringify(structureDefinition, null, 2))
          }
          download={structureDefinition.name + ".json"}
        >
          <button>Download</button>
        </a>
        <ResourceProfileMapping profile={structureDefinition} />
        {renderAttributeEditor(structureDefinition)}
      </div>
    );
  }

  return <div>Error</div>;
};

export default Editor;
