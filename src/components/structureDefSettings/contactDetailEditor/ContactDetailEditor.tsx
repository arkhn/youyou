import {
  IElementDefinition,
  IStructureDefinition
} from "@ahryman40k/ts-fhir-types/lib/R4";
import React from "react";
import { useSelector } from "react-redux";
import { PrimitiveTypesType } from "state/actions/fhirDataTypesActions";
import { RootState } from "state/store";
import { RenderNode } from "types";
import { createComplexeType } from "../utils";
import RenderComplexType from "./RenderComplexType";

const ContactEditor: React.FC<{}> = () => {
  const newContactPoint: any[] = [];
  const { complexTypes, primitiveTypes } = useSelector(
    (state: RootState) => state.fhirDataTypes
  );
  const contactPoint: RenderNode[] = [];
  const toFind = complexTypes.find((type) => type.name === "ElementDefinition");
  if (complexTypes) {
    toFind?.children?.forEach((element) => {
      contactPoint.push(element);
    });
  }

  // create empty element "contactDetail"
  createComplexeType(
    contactPoint,
    newContactPoint,
    primitiveTypes,
    complexTypes
  );

  const contactToEdit = [...contactPoint];

  console.log(contactPoint);

  contactPoint.forEach((item) => {
    const toFind = complexTypes.find((type) => type.name === item.id);
    toFind?.children?.forEach((element) => {
      contactPoint.push(element);
    });
  });

  return (
    <div>
      <RenderComplexType
        contactPoint={contactToEdit}
        complexTypes={complexTypes}
        contactToEdit={newContactPoint[0]}
      />
    </div>
  );
};

export default ContactEditor;
