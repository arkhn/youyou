import {
  ICodeSystem,
  ICodeSystem_Concept as ICodeSystemConcept,
  IElementDefinition,
  IElementDefinition_Type as IElementDefinitionType,
  IStructureDefinition
} from '@ahryman40k/ts-fhir-types/lib/R4';
import cloneDeep from 'lodash.clonedeep';
import { SimplifiedAttributes, RenderAttributesTree } from 'types';

/**
 * Transform fetched attributes to simplified attributes with new paths
 * @param elements element definition needed to be transformed
 * @param valueSetRequest value sets for FHIR code type
 * @returns an array of all the fetched attributes, transformed in SimplifiedAttributes types
 */
export const transformAttributes = (
  elements: IElementDefinition[],
  valueSetRequest?: ICodeSystem[]
): SimplifiedAttributes[] => {
  const attributes: SimplifiedAttributes[] = [];
  elements.forEach((element: IElementDefinition) => {
    if (element.id && element.definition && element.max && element.type) {
      if (element.type.length !== 1) {
        attributes.push({
          path: element.id,
          type: element.type.length > 1 ? element.type : element.id,
          definition: element.definition,
          min: element.min,
          max: element.max
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
              const newAttribute: SimplifiedAttributes = {
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
export const createSimplifiedAttributes = (
  structureDefinition: IStructureDefinition[],
  valueSet: ICodeSystem[]
): SimplifiedAttributes[] => {
  const simplifiedSDef: SimplifiedAttributes[] = [];
  const newSDef = cloneDeep(structureDefinition);
  newSDef.forEach((type: any) => {
    const transformedAttributes = transformAttributes(
      type.snapshot.element,
      valueSet
    );
    transformedAttributes.forEach(
      (transformedAttribute: SimplifiedAttributes) => {
        simplifiedSDef.push(transformedAttribute);
      }
    );
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
  type: string | IElementDefinitionType[],
  primitiveTypes: string[]
): boolean =>
  primitiveTypes.some((primitive: string) => type === primitive) ||
  type === 'http://hl7.org/fhirpath/System.String' ||
  type === 'Extension' ||
  type === 'Reference';

/**
 * Create renderTree of FHIR structure definition, with children determined only
 * by its path, without looking for FHIR complex types.
 * @param attribute
 * An object with a simplified attribute of structure definition's snapshot.
 * @param parentAttribute
 * A parent of attribute determined by its path.
 * @param node
 * A node to assign to a parent node in a renderTree tree, determined by its path.
 * @returns a render tree filled with backbones elements.
 */
export const renderTreeAttributes = (
  attribute: SimplifiedAttributes,
  parentAttribute: SimplifiedAttributes,
  node: RenderAttributesTree
): RenderAttributesTree => {
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
      return renderTreeAttributes(newAttribute, parentAttribute, childNode);
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
      return renderTreeAttributes(newAttribute, parentAttribute, newNode);
    }
  }
};

/**
 * Create a Render Tree with filled childrens when the current item is a complex FHIR type
 * (except for Backbone element which is inheriting its children from the original
 * structure definition snapshot's paths)
 * @param complexTypes
 * An array FHIR simplified complex types
 * @param childrenToBeComplex
 * An array of all the children of the attribute selected
 * @param primitiveTypes
 * An array of FHIR primitive types
 */
export const createComplexTypes = (
  complexTypes: RenderAttributesTree[],
  childrenToBeComplex: RenderAttributesTree[],
  primitiveTypes: string[]
): RenderAttributesTree[] => {
  const currentItemsChildren = cloneDeep(childrenToBeComplex);
  const enhancedComplexType: RenderAttributesTree[] = [];
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
              childrenComplexType.push(kid);
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
