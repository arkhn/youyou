/* import { IStructureDefinition } from "@ahryman40k/ts-fhir-types/lib/R4";

export const editAttribute = <K extends keyof IStructureDefinition>(
  structureToEdit: IStructureDefinition,
  attributeKey: K
) => {
  if (undefined !== attributeValue && attributeValue.toString() !== "") {
    structureToEdit[attributeKey] = attributeValue;
    return structureToEdit;
  } else {
    delete structureToEdit[attributeKey];
  }
};
 */

export const editAttribute = () => {
  return null;
};
