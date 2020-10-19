import {
  IElementDefinition_Type,
  IStructureDefinition
} from "@ahryman40k/ts-fhir-types/lib/R4";
import { PrimitiveTypesType } from "state/actions/fhirDataTypesActions";
import { RenderAttributesTree } from "types";

export const editAttribute = <K extends keyof IStructureDefinition>(
  structureToEdit: IStructureDefinition,
  attributeKey: K,
  attributeValue?: IStructureDefinition[K]
) => {
  if (undefined !== attributeValue && attributeValue.toString() !== "") {
    structureToEdit[attributeKey] = attributeValue;
    return structureToEdit;
  } else {
    delete structureToEdit[attributeKey];
  }
};

export const createJSONTree = (items: RenderAttributesTree[]) => {
  const sDef: any = {};
  for (const item of items) {
    if (item.children.length === 0) {
      sDef[item.name] = undefined;
    } else {
      if (item.name !== "snapshot" && item.name !== "differential") {
        if (item.max === "1") sDef[item.name] = createJSONTree(item.children);
        else sDef[item.name] = [createJSONTree(item.children)];
      }
    }
  }
  return sDef;
};

export const isPrimitive = (
  type: string | IElementDefinition_Type[],
  primitiveTypes: PrimitiveTypesType[]
) =>
  primitiveTypes.some(
    (primitive: PrimitiveTypesType) => type === primitive.name
  ) ||
  type === "http://hl7.org/fhirpath/System.String" ||
  type === "Extension" ||
  type === "Reference";
