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

export const tooltipValues = {
  id:
    "The version can be globally unique, or scoped by the Logical Id of the resource.",
  url:
    "The identifier that is used to identify this structure when it is referenced in a specification, model, design or an instance. This URL is where the structure can be accessed.",
  name:
    "A Computer-ready name (e.g. a token) that identifies the structure - suitable for code generation. Note that this name (and other names relevant for code generation, including element & slice names, codes etc) may collide with reserved words in the relevant target language, and code generators will need to handle this",
  title: "A free text natural language name identifying the structure",
  status: "The lifecycle status of an artifact.",
  date: "The date this version of the structure was published",
  publisher: "The date this version of the structure was published",
  description:
    "A free text natural language description of the structure and its use.",
  purpose: "Why this structure was created - what the intent of it is",
  copyright: "Use and/or publishing restrictions"
};

export const isPrimitive = (
  toFind: string | IElementDefinition_Type[],
  primitiveTypes: PrimitiveTypesType[]
) => {
  const findPrimitive = primitiveTypes.find((type) => {
    if (
      type.name === toFind ||
      toFind === "http://hl7.org/fhirpath/System.String" ||
      toFind === "Extension" ||
      toFind === "Reference"
    ) {
      return true;
    }
    return false;
  });
  return findPrimitive;
};

export const createComplexeType = (
  rootTypes: RenderAttributesTree[],
  rootArray: any[],
  primitiveTypes: PrimitiveTypesType[],
  complexTypes: RenderAttributesTree[]
) => {
  const newObject: any = {};
  rootTypes.forEach((type: RenderAttributesTree) => {
    if (isPrimitive(type.type, primitiveTypes)) {
      newObject[type.name] = undefined;
    } else if (Array.isArray(type.type)) {
      const newTypeArray: any[] = [];
      type.type.forEach((code) => {
        newTypeArray.push(code.code);
      });
      newObject[type.name] = newTypeArray;
    } else if (type.name !== "snapshot" && type.name !== "differential") {
      const newArray: any[] = [];
      if (type.children.length > 0) {
        const newType: RenderAttributesTree[] = [];
        type.children.forEach((element) => {
          newType.push(element);
        });
        createComplexeType(newType, newArray, primitiveTypes, complexTypes);
        if (type.max === "1") {
          newObject[type.name] = newArray[0];
        } else {
          newObject[type.name] = newArray;
        }
      } else {
        const newType: RenderAttributesTree[] = [];
        if (complexTypes) {
          const toFind = complexTypes.find(
            (newComplexType) => newComplexType.name === type.type
          );
          toFind?.children?.forEach((element) => {
            newType.push(element);
          });
          createComplexeType(
            newType as RenderAttributesTree[],
            newArray,
            primitiveTypes,
            complexTypes
          );
          if (type.max === "1") {
            newObject[type.name] = newArray[0];
          } else {
            newObject[type.name] = newArray;
          }
        }
      }
    }
  });
  rootArray.push(newObject);
};
