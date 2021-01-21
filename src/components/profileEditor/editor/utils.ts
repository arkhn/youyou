import { IElementDefinition_Type as IElementDefinitionType } from '@ahryman40k/ts-fhir-types/lib/R4';
import { SimplifiedAttributes } from 'types';

/**
 * Create a JSON tree from a structure definition
 * @param attributes tree of simplified attributes to be transformed into JSON
 * @param structureDefinition original structure definition of the resource we choosed to profile
 */
export const createJSONTree = (
  attributes: SimplifiedAttributes[],
  structureDefinitionJSON: any
): any => {
  const JSONTree: any = {};
  attributes.forEach((attribute: SimplifiedAttributes) => {
    if (attribute.children.length === 0) {
      JSONTree[attribute.name] = undefined;
    } else if (
      attribute.name !== 'snapshot' &&
      attribute.name !== 'differential'
    ) {
      if (attribute.max === '1') {
        JSONTree[attribute.name] = createJSONTree(
          attribute.children,
          structureDefinitionJSON
        );
      } else {
        JSONTree[attribute.name] = [];
        structureDefinitionJSON[attribute.name]?.forEach(() =>
          JSONTree[attribute.name].push(
            createJSONTree(attribute.children, structureDefinitionJSON)
          )
        );
      }
    }
  });
  return JSONTree;
};

export const isPrimitive = (
  type: string | IElementDefinitionType[],
  primitiveTypes: string[]
): boolean =>
  primitiveTypes.some((primitive: string) => type === primitive) ||
  type === 'http://hl7.org/fhirpath/System.String' ||
  type === 'Extension' ||
  type === 'Reference';
