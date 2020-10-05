import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import { RenderNode } from "types";
import { createComplexeType } from "../utils";
import RenderComplexType from "./RenderComplexType";

const ContactEditor: React.FC<{}> = () => {
  const { complexTypes, primitiveTypes, structureDefinitionTree } = useSelector(
    (state: RootState) => state.fhirDataTypes
  );
  const newStructureDef: RenderNode[] = [];

  createComplexeType(
    structureDefinitionTree,
    newStructureDef,
    primitiveTypes,
    complexTypes
  );

  return (
    <div>
      <RenderComplexType
        contactPoint={structureDefinitionTree}
        complexTypes={complexTypes}
        contactToEdit={newStructureDef[0]}
        primitiveTypes={primitiveTypes}
        complexeTypePattern={newStructureDef[0]}
      />
    </div>
  );
};

export default ContactEditor;
