import {
  IElementDefinition_Type as IElementDefinitionType,
  IStructureDefinition
} from '@ahryman40k/ts-fhir-types/lib/R4';
import { RenderAttributesTree } from 'types';

/**
 * Defines if an input is disabled depending on the cardinality of the item and of the input
 * @param min min cardinality of the input
 * @param max max cardinality of the input
 * @param baseMin base min cardinality of the item
 * @param baseMax base max cardinality of the item
 */
export const isDisabledInput = (
  min: number,
  max: string,
  baseMin: number,
  baseMax: string | undefined
): boolean => {
  if (
    baseMin !== undefined &&
    baseMax !== undefined &&
    min >= baseMin &&
    (baseMax === '*' || (baseMax === '1' && (max === '1' || max === '0')))
  ) {
    return false;
  }
  return true;
};

export const allCardinalities: { min: number; max: string }[] = [
  {
    min: 0,
    max: '0'
  },
  {
    min: 0,
    max: '1'
  },
  {
    min: 0,
    max: '*'
  },
  {
    min: 1,
    max: '1'
  },
  {
    min: 1,
    max: '*'
  }
];

export const editAttribute = <K extends keyof IStructureDefinition>(
  structureToEdit: IStructureDefinition,
  attributeKey: K,
  attributeValue?: IStructureDefinition[K]
): IStructureDefinition | undefined => {
  if (attributeValue !== undefined && attributeValue.toString() !== '') {
    structureToEdit[attributeKey] = attributeValue;
    return structureToEdit;
  } else {
    delete structureToEdit[attributeKey];
  }
};

/**
 * Create a JSON tree from a structure definition
 * @param items
 * A tree of type RenderAttributesTree that will help to create a JSON tree as in FHIR resources
 * @param base
 * Original structure definition of the resource we choosed to profile
 */
export const createJSONTree = (
  items: RenderAttributesTree[],
  base: any
): any => {
  const sDef: any = {};
  items.forEach((item: RenderAttributesTree) => {
    if (item.children.length === 0) {
      sDef[item.name] = undefined;
    } else if (item.name !== 'snapshot' && item.name !== 'differential') {
      if (item.max === '1') {
        sDef[item.name] = createJSONTree(item.children, base);
      } else {
        sDef[item.name] = [];
        base[item.name] &&
          base[item.name].forEach(() =>
            sDef[item.name].push(createJSONTree(item.children, base))
          );
      }
    }
  });
  return sDef;
};

export const isPrimitive = (
  type: string | IElementDefinitionType[],
  primitiveTypes: string[]
): boolean =>
  primitiveTypes.some((primitive: string) => type === primitive) ||
  type === 'http://hl7.org/fhirpath/System.String' ||
  type === 'Extension' ||
  type === 'Reference';
