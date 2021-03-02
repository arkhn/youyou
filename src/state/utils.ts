import {
  ICodeSystem,
  ICodeSystem_Concept as ICodeSystemConcept,
  IElementDefinition,
  IElementDefinition_Type as IElementDefinitionType,
  IStructureDefinition
} from '@ahryman40k/ts-fhir-types/lib/R4';
import cloneDeep from 'lodash.clonedeep';
import { TemporaryAttribute, SimplifiedAttributes } from 'types';

/**
 * Transform fetched attributes to simplified attributes with new paths
 * @param elements element definition needed to be transformed
 * @param valueSetRequest value sets for FHIR code type
 * @returns an array of all the fetched attributes, transformed in TemporaryAttribute types
 */
export const transformAttributes = (
  elements: IElementDefinition[],
  valueSetRequest?: ICodeSystem[]
): TemporaryAttribute[] => {
  const attributes: TemporaryAttribute[] = [];
  elements.forEach((element: IElementDefinition) => {
    if (element.id && element.definition && element.max) {
      if (element.type && element.type.length !== 1) {
        attributes.push({
          path: element.id,
          type: element.type.length > 1 ? element.type : element.id,
          definition: element.definition,
          min: element.min,
          max: element.max
        });
      } else if (!element.type) {
        attributes.push({
          path: element.id,
          definition: element.definition,
          min: element.min,
          max: element.max,
          type: undefined
        });
      } else {
        element.type.forEach((types: IElementDefinitionType) => {
          if (element.definition && element.id && element.max && types.code) {
            if (types.code === 'code') {
              const valueSet: ICodeSystemConcept[] = [];
              if (element.binding) {
                element.binding?.extension?.forEach((extension) => {
                  if (extension.valueString && valueSetRequest) {
                    const findValueSet:
                      | ICodeSystem
                      | undefined = valueSetRequest.find(
                      (value: ICodeSystem) =>
                        value.name === extension.valueString
                    );
                    if (findValueSet && findValueSet.concept) {
                      findValueSet.concept.forEach((vs: ICodeSystemConcept) => {
                        valueSet.push(vs);
                      });
                    }
                  }
                });
              }
              const newAttribute: TemporaryAttribute = {
                definition: element.definition,
                path: element.id,
                type: types.code,
                min: element.min,
                max: element.max,
                binding: {
                  valueSet: valueSet.length > 0 ? valueSet : undefined,
                  strength: element.binding?.strength
                }
              };
              attributes.push(newAttribute);
            } else {
              attributes.push({
                path: element.id,
                type: types.code,
                definition: element.definition,
                min: element.min,
                max: element.max
              });
            }
          }
        });
      }
    }
  });
  return attributes;
};

/**
 * Create simplified attributes from structure definition snapshot
 * @param structureDefinition structure definition to transform
 * @param valueSet
 */
export const createTemporaryAttribute = (
  structureDefinition: IStructureDefinition[],
  valueSet: ICodeSystem[]
): TemporaryAttribute[] => {
  let simplifiedSDef: TemporaryAttribute[] = [];
  structureDefinition.forEach((type: any) => {
    const transformedAttributes = transformAttributes(
      type.snapshot.element,
      valueSet
    );
    simplifiedSDef = simplifiedSDef.concat(transformedAttributes);
  });
  return simplifiedSDef;
};

/**
 * Check if it's a FHIR primitive type
 * @param type FHIR type you have to check
 * @param primitiveTypes all primitive FHIR types
 * @returns if type is a primitive FHIR type, return true, else, return false.
 */
export const isPrimitive = (
  type: string | IElementDefinitionType[] | undefined,
  primitiveTypes: string[]
): boolean =>
  primitiveTypes.some((primitive: string) => type === primitive) ||
  type === 'http://hl7.org/fhirpath/System.String' ||
  type === 'Extension' ||
  type === 'Reference' ||
  type === undefined;

/**
 * Create renderTree of FHIR structure definition, with children determined only
 * by its path, without looking for FHIR complex types.
 * @param attribute an object with a temporary type of attribute of structure definition's snapshot.
 * @param parentAttribute a parent of the temporary attribute determined by its path.
 * @param node a node to assign to a parent node in a simplified attribute tree, determined by its path.
 * @returns a simplified attributes tree filled with backbones elements.
 */
export const createSimplifiedAttributes = (
  attribute: TemporaryAttribute,
  parentAttribute: TemporaryAttribute,
  node: SimplifiedAttributes
): SimplifiedAttributes => {
  if (node.id === parentAttribute.path) {
    return cloneDeep(node);
  } else {
    const splitPath = attribute.path.split('.');
    const childNode = node.children.find((c) => c.name === splitPath[0]);
    const newPath = splitPath.slice(1, splitPath.length).join('.');
    const newAttribute = {
      path: newPath,
      type: attribute.type,
      definition: attribute.definition,
      min: attribute.min,
      max: attribute.max
    };
    if (childNode) {
      return createSimplifiedAttributes(
        newAttribute,
        parentAttribute,
        childNode
      );
    } else {
      let splitSlice = '';
      splitPath.forEach((path) => {
        if (path.split(':').length > 1) splitSlice = path;
      });
      const newNode = {
        name: splitSlice !== '' ? splitPath.join('.') : splitPath[0],
        id: parentAttribute.path,
        type: parentAttribute.type,
        children: [],
        definition: parentAttribute.definition,
        min: parentAttribute.min,
        max: parentAttribute.max
      };
      parentAttribute.binding
        ? node.children.push({ ...newNode, binding: parentAttribute.binding })
        : node.children.push(newNode);
      return createSimplifiedAttributes(newAttribute, parentAttribute, newNode);
    }
  }
};

/**
 * Creates a simplified attribute tree, with children implemented when the selected attribute is a complex FHIR type
 * (except for Backbone element which is inheriting its children from the original structure definition snapshot's paths)
 * @param complexTypes an array of FHIR simplified complex types
 * @param childrenToBeComplex an array of all the simplified attributes children of the selected attribute
 * @param primitiveTypes an array of FHIR primitive types
 */
export const createComplexTypes = (
  complexTypes: SimplifiedAttributes[],
  childrenToBeComplex: SimplifiedAttributes[],
  primitiveTypes: string[]
): SimplifiedAttributes[] => {
  const currentItemsChildren = cloneDeep(childrenToBeComplex);
  const enhancedComplexType: SimplifiedAttributes[] = [];
  for (const child of currentItemsChildren) {
    if (
      !isPrimitive(child.type, primitiveTypes) &&
      child.type !== 'BackboneElement'
    ) {
      const toFind = complexTypes.find((type) => type.name === child.type);
      if (toFind) {
        const childrenComplexType = createComplexTypes(
          complexTypes,
          toFind.children,
          primitiveTypes
        );
        child.children.forEach((kid) => {
          if (!childrenComplexType.find((ct) => ct.name === kid.name)) {
            if (
              !childrenComplexType.find(
                (ct) => ct.name === kid.name.split('.')[0]
              )
            ) {
              let index = 0;
              childrenComplexType.forEach((value, i) => {
                if (value.name === kid.name.split(':')[0]) index = i;
              });
              childrenComplexType.splice(index + 1, 0, kid);
            } else {
              const newName = kid.name
                .split('.')
                .slice(1, kid.name.split('.').length)
                .join('.');
              const typeToFind = kid.name.split('.')[0];
              const toChange = childrenComplexType.find(
                (ct) => ct.name === typeToFind
              );
              kid.name = newName;
              toChange?.children.push(kid);
            }
          }
        });
        enhancedComplexType.push({
          ...child,
          children: createComplexTypes(
            complexTypes,
            childrenComplexType,
            primitiveTypes
          )
        });
      } else {
        enhancedComplexType.push(child);
      }
    } else {
      const childrenComplexType = createComplexTypes(
        complexTypes,
        child.children,
        primitiveTypes
      );
      enhancedComplexType.push({
        ...child,
        children: childrenComplexType
      });
    }
  }
  return enhancedComplexType;
};
