import { StructureDefinition } from "../../resources/ts/proto/r4/core/resources/structure_definition_pb";

export const editAttribute = <K extends keyof StructureDefinition.AsObject>(
  structureToEdit: StructureDefinition.AsObject,
  attributeKey: K,
  attributeValue?: StructureDefinition.AsObject[K]
) => {
  if (undefined !== attributeValue && attributeValue.toString() !== "") {
    structureToEdit[attributeKey] = attributeValue;
    return structureToEdit;
  } else {
    delete structureToEdit[attributeKey];
  }
};
